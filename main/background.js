import { app, ipcMain } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  let mainWindow = null;

  const gotTheLock = app.requestSingleInstanceLock();
  if (!gotTheLock) {
    app.quit();
  } else {
    app.on('second-instance', (event, commandLine, workingDirectory) => {
      if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore();
        mainWindow.focus();
      }
    });

    app.on('ready', async () => {
      let loading = createWindow('loading', {
        width: 1000,
        height: 600,
        resizable: false,
        show: false,
        frame: false,
        transparent: true,
        maximizable: false
      });

      loading.once('show', async () => {
        mainWindow = createWindow('main', {
          width: 1000,
          height: 600,
          frame: false,
          transparent: true,
          autoHideMenuBar: true,
          show: false
        });

        mainWindow.once('ready-to-show', () => {
          console.log('main loaded');
          setTimeout(() => {
            mainWindow.show();
            loading.hide();
            loading.close();
          }, 8000);
        });

        if (isProd) {
          await mainWindow.loadURL('app://./home.html');
        } else {
          const port = process.argv[2];
          await mainWindow.loadURL(`http://localhost:${port}/home`);
        }
      });

      if (isProd) {
        await loading.loadURL('app://./loading.html');
      } else {
        const port = process.argv[2];
        await loading.loadURL(`http://localhost:${port}/loading`);
      }

      ipcMain.on('close-me', (e, arg) => {
        app.quit();
      });

      ipcMain.on('toggle-maximize-window', (e) => {
        mainWindow.isMaximized()
          ? mainWindow.unmaximize()
          : mainWindow.maximize();
      });

      ipcMain.on('minimize', (e) => {
        mainWindow.isMinimized() ? mainWindow.restore() : mainWindow.minimize();
      });

      loading.show();
    });
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
