
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('fusio', {
    // @TODO configure your Fusio url
    BASE_URL: 'https://demo.fusio-project.org',
    APP_KEY: '',
})
