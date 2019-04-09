document.addEventListener('click', () => {
  const win = window.open('', '', 'width = 100, height = 100')
  let i = 0;
  setInterval(() => {
    win.moveTo(i, i)
    i = (i + 5) % 200
  }, 100)

})

function openWindow(){
  const{x, y} = getRandomCoords()
  const opts = 'width=${WIN_WIDTH}, height=${WIN_HEIGHT}, left=${x}, top=${y}'
  const win = window.open(window.location.pathname,'',opts)

  if (!win) return
  wins.push(win)
}

interceptUserInput(event => {
  event.preventDefault()
  event.stopPropagation()
  openWindow()
})

function focusWindows(){
  wins.forEach(win => {
    if(!win.closed)win.focus()
  })
}
