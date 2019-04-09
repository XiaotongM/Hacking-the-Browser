console.log("extension go")

var x = Math.floor(Math.random() * 256);
var y = Math.floor(Math.random() * 256);
var z = Math.floor(Math.random() * 256);

function random(int) {
  return Math.floor(Math.random() * int);
}

for (j = 0; j < 3; j++) {
  //string + variable
  let windowOptions = 'left = ' + x + ', top = ' + y + ', width = 100, height = 100';

  const win = window.open('', '', windowOptions);

  win.addEventListener("click", function() {

    win.resizeTo(i * Math.random() * 3, i * 2)

    //javascript does not have function "random", only Math.random
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    console.log(rndCol);
    win.document.body.style.background = rndCol;

  });

  let i = 0;
  setInterval(() => {
    win.moveTo(x + i * 5, y + i)
    i = (i + 10) % 200
  }, 200)
}

// let popups = [];
//
// chrome.runtime.onMessage.addListener('click', openWindow);
//
// function openWindow(){
//   focusWindows();
//   const win = window.open('', '', 'left = x, right = y, width = 100, height = 100');
//   popups.push(win);
// }
//
// function focusWindows(){
//   popups.forEach(win => win.focus);
// }
