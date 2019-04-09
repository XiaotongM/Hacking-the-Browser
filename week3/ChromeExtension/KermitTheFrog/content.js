let filenames = [
  "kermitFrog1.jpg",
  "kermitFrog2.jpg",
  "kermitFrog3.jpg",
  "kermitFrog4.jpg"
];

let imgs = document.getElementsByTagName('img');

for (imgElt of imgs){
  let r = Math.floor(Math.random() * filenames.length);
  let file = 'kermitFrog/' + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
}
