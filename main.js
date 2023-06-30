const {app,BrowserWindow} = require('electron')
const path =require('path')
const{autoUpdater}= require('electron-updater')
const log = require('electron-log');
log.transports.file.resolvePath = ()=> path.join('C:\Users\sansk\Downloads\autoupdate_electron','logs/main.log');
log.info('hello, log');
log.warn('some problem appears');
let win; 
function createWindow(){
win = new BrowserWindow({width:300,height:400})
console.log (path.join(__dirname,'index.html'))
win.loadFile(path.join(__dirname,'index.html'))


}
app.on('ready',()=>{
    createWindow()
    autoUpdater.checkForUpdatesAndNotify()
})
autoUpdater.on("update-available",()=>{
    
    log.info("update-available")
}) 

autoUpdater.on("checking-for-update",()=>{
    
    log.info("checking-for-update")
}) 
autoUpdater.on("download_progress",()=>{
    
    log.info("checking-for-update")
}) 
autoUpdater.on("update-downloaded",()=>{
    
    log.info("update-downloaded")
}) 
