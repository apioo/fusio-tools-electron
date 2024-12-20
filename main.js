const {app, BrowserWindow, View, WebContentsView} = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 768
    })

    win.loadFile('./index.html');
    win.webContents.on('did-fail-load', () => win.loadFile('./index.html'));
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
