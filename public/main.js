const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const { dialog } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
const { protocol } = require('electron')
const url = require('url')

require('@electron/remote/main').initialize()

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    // fullscreen: true,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      webSecurity: false
    },
    // frame: false
  });

  // const menuTemplate = [
  //   {
  //     label: 'Visualizer',
  //     submenu: [
  //       {
  //         role: 'undo'
  //       },
  //       {
  //         role: 'cut'
  //       },
  //       {
  //         role: 'close'
  //       }
  //     ]
  //   }
  // ];
  // const menu = Menu.buildFromTemplate(menuTemplate)
  // Menu.setApplicationMenu(menu)

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )
};


app.on('ready', function () {
  createWindow()

  protocol.registerFileProtocol('file', (request, cb) => {
    const url = request.url.replace('file:///', '')
    const decodedUrl = decodeURI(url)
    try {
      return cb(decodedUrl)
    } catch (error) {
      console.error(
        'ERROR: registerLocalResourceProtocol: Could not get file path:',
        error
      )
    }
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
