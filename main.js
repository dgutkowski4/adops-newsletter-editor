const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1100,
    minHeight: 700,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#f5f5f5',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: path.join(__dirname, 'icon.png'),
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// Save newsletter HTML to disk
ipcMain.handle('save-newsletter', async (event, htmlContent) => {
  const { filePath, canceled } = await dialog.showSaveDialog(mainWindow, {
    title: 'Export Newsletter',
    defaultPath: `adops-newsletter-${new Date().toISOString().slice(0,7)}.html`,
    filters: [{ name: 'HTML File', extensions: ['html'] }],
  });

  if (canceled || !filePath) return { success: false };

  fs.writeFileSync(filePath, htmlContent, 'utf8');
  return { success: true, filePath };
});

// Save draft JSON
ipcMain.handle('save-draft', async (event, jsonData) => {
  const { filePath, canceled } = await dialog.showSaveDialog(mainWindow, {
    title: 'Save Draft',
    defaultPath: `adops-draft-${new Date().toISOString().slice(0,7)}.json`,
    filters: [{ name: 'Draft File', extensions: ['json'] }],
  });

  if (canceled || !filePath) return { success: false };

  fs.writeFileSync(filePath, jsonData, 'utf8');
  return { success: true };
});

// Load draft JSON
ipcMain.handle('load-draft', async () => {
  const { filePaths, canceled } = await dialog.showOpenDialog(mainWindow, {
    title: 'Load Draft',
    filters: [{ name: 'Draft File', extensions: ['json'] }],
    properties: ['openFile'],
  });

  if (canceled || !filePaths.length) return { success: false };

  const data = fs.readFileSync(filePaths[0], 'utf8');
  return { success: true, data };
});
