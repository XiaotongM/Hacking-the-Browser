chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
  console.log(tab)
  let msg = {
    txt: "hello"
  }
  chrome.tabs.sendMessage(tab.id, msg);
}


/*

add to background.js
chrome.browserAction.onClicked.addListener(function(){

})

include "browser_action": {
  "default_icon": "icon.png"
},
to manifest.json

inject 2 js files
chrome.tabs.executeScript({ file: "jquery.js" }, function(){
   chrome.tabs.executeScript({ file: "content_scripts.js" }, function(){
   })
})

listen to background.js
chrome.runtime.onMessage.addListener(function(message){

})

chrome.browserAction.onClicked.addListener(function(tab){

})

*/
