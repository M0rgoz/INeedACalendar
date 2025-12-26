const { app, BrowserWindow } = require('electron')
function createWindow () {
  const win = new BrowserWindow({ width: 1200, height: 800 })
  win.removeMenu();
  win.loadFile('zentime.html')
}
app.whenReady().then(createWindow)
// 3.  Terminalden `npm install electron` ve `npx electron .` komutlarını çalıştırarak uygulamanızı başlatabilirsiniz.