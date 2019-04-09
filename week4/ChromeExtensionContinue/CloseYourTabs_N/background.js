var isFocused;

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('calling toBlur from browser action')
  toBlur();
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
  // console.log('onUpdated: tab', tabId, 'with info:',changeInfo);
  if (changeInfo.status !== 'complete') {
    // ignore this event
    return;
  }

  chrome.windows.getAll({
    populate: true
  }, function(winArr) {
    console.log('tab updated, window count: ', winArr.length);
    for (var win of winArr) {
      console.log('window id ', win.id, ' has ', win.tabs.length, ' tabs');
      isFocused = win.focused;
      // console.log('onUpdated -> getAll', win, winArr);
      var tabCount = win.tabs.length
      if (tabCount > 5) {
        console.log('TABCOUNT', tabCount)
        console.log('v2 calling toBlur on window:', win, ' with tab count:', tabCount, 'and focused = ', isFocused);
        toBlur(isFocused, tabCount);
        //init();
      }
      break;
    }
  });
})

// chrome.windows.getAll({
//     populate: true
//   }, function(winArr) {
//     for (var win of winArr) {
//       isFocused = win.focused;
//
//       var tabCount = win.tabs.length
//       if (tabCount > 5) {
//         console.log('v2 calling toBlur on window:',win,' with tab count:',tabCount, 'and focused = ',isFocused);
//         toBlur(isFocused);
//         //init();
//       }
//     }
//   });

// function init() {
//   chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//     if (msg == 'load') {
//       toBlur(isFocused);
//     }
//   });
// }

//string(bool) --> object(bool, order)
function toBlur(bool, order) {
  chrome.tabs.query({}, function(tabs) {
    for (var i = 0; i < tabs.length; i++) {
      var msg = {
        bool: bool,
        order: order
      }
      console.log('send msg:', msg)
      // chrome.tabs.sendMessage(tabs[i].id, bool);
      chrome.tabs.sendMessage(tabs[i].id, msg);

    }
  });
}
