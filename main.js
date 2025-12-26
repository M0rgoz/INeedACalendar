// main.js dosyasını tamamen bununla değiştirebilirsiniz
const { app, BrowserWindow } = require('electron')

// Windows bildirimleri için gerekli ID (Herhangi bir string olabilir ama benzersiz olmalı)
if (process.platform === 'win32') {
    app.setAppUserModelId('com.ineededacalendar.app'); 
}

function createWindow () {
  const win = new BrowserWindow({ 
    width: 1200, 
    height: 800,
    webPreferences: {
      nodeIntegration: true, // Gerekirse
      contextIsolation: false // React ve basit HTML yapısı için
    }
  })
  win.removeMenu();
  win.loadFile('zentime.html')
}

app.whenReady().then(createWindow)
// 3.  Terminalden `npm install electron` ve `npx electron .` komutlarını çalıştırarak uygulamanızı başlatabilirsiniz.