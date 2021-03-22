function onOff() {
  const modal = document.querySelector('#modal')
  
  modal.classList.toggle('hide')
  modal.classList.toggle('addScroll')

  document
    .querySelector('body')
    .classList.toggle('hideScroll')
}