const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

function createWindow() {
  const win = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      autoHideMenuBar: true,
      setMenuBarVisibility: false,
      preload: path.join(__dirname, "preloader.js"),
      nodeIntegration: false
    },
    center: true,
    icon: path.join(__dirname, 'logo192.png')
  });

  win.setMenu(null);
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}



app.whenReady().then(() => {
  createWindow();

  app.on("active", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
