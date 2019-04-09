$(function() {
  console.log('content script is running v2');
  //chrome.runtime.sendMessage('load');

  chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    console.log('message is received', msg);
    debugger
    if (msg.bool) {
      let blurPower = 5 * (Number(msg.order) - 6) / 6;
      console.log(`blur(${blurPower}px)`);
      document.body.style.filter = `blur(${blurPower}px)`;
    } else {
      document.body.style.filter = '';
    }
  });
});
