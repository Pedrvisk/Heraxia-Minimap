import { BrowserWindow } from 'electron';

export default function createWindow(windowName, options) {
  let win;

  win = new BrowserWindow({
    width: options.width,
    height: options.height,
    ...options,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      ...options.webPreferences
    }
  });

  return win;
}
