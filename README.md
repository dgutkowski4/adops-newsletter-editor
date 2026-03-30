# AdOps Newsletter Editor

A desktop app (Electron) for building and exporting the monthly AdOps newsletter — no HTML editing required.

---

## Setup (takes ~2 minutes)

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later

### Steps

**What these commands do, in plain English:**

1. **`cd adops-newsletter-editor`** — Opens the project folder in Terminal. Think of it like double-clicking into a folder, but in the command line.

2. **`npm install`** — Downloads the packages the app needs to run. You only need to do this once (or again if the app is updated). It creates a `node_modules` folder — you can ignore that.

3. **`npm start`** — Launches the app. A window will open on your screen and it stays running as long as Terminal is open.

```bash
# 1. Navigate into the folder
cd adops-newsletter-editor

# 2. Install dependencies (first time only)
npm install

# 3. Launch the app
npm start
```

> **Next time you want to open the app**, you only need steps 1 and 3 — skip `npm install`.

---

## Features

| Feature | Description |
|---|---|
| **Content Editor** | Edit every text section — title, subtitle, intro, all body copy, bullets, stats, footer |
| **Section Toggles** | Turn any section on/off for months where it isn't relevant |
| **Campaign Cards** | Add, remove, and reorder campaign highlight cards dynamically |
| **Live Preview** | Right-side panel updates in real time as you type |
| **Save Draft** | Save your work-in-progress as a `.json` file to pick up later |
| **Load Draft** | Reload any previously saved draft |
| **Export HTML** | One-click export of the finished newsletter as a `.html` file ready to paste into Gmail |

---

## How to Send via Gmail

1. Click **Export HTML** in the app — save the `.html` file somewhere
2. Open the `.html` file in your browser (Chrome recommended)
3. Select All (`Cmd+A` / `Ctrl+A`) → Copy (`Cmd+C` / `Ctrl+C`)
4. Paste directly into a new Gmail compose window
5. Gmail preserves the formatting — send as normal

---

## Building a Distributable App (optional)

To create a `.app` (Mac), `.exe` (Windows), or `.AppImage` (Linux) that doesn't require Node.js:

```bash
# Mac
npm run build-mac

# Windows
npm run build-win

# Linux
npm run build-linux
```

Outputs go into the `dist/` folder.
