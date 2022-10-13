const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const config = require('electron-json-config').factory();
const prompt = require('electron-prompt');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
    })

    let endpoint = config.get('endpoint');
    if (!endpoint) {
        // ask for endpoint url
        prompt({
            title: 'Fusio endpoint',
            label: 'Url:',
            value: 'https://demo.fusio-project.org/',
            inputAttrs: {
                type: 'url'
            }
        }).then((endpoint) => {
            if (endpoint === null) {
                // no endpoint defined
            } else {
                config.set('endpoint', endpoint);

                // and load the index.html of the app.
                win.loadURL(url.format({
                    pathname: path.join(__dirname, '/dist/index.html'),
                    protocol: 'file:',
                    slashes: true,
                    query: {
                        url: endpoint
                    }
                }))
            }
        });
    } else {
        // and load the index.html of the app.
        win.loadURL(url.format({
            pathname: path.join(__dirname, '/dist/index.html'),
            protocol: 'file:',
            slashes: true,
            query: {
                url: endpoint
            }
        }))
    }
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
