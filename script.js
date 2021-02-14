const iconHam = document.getElementById('iconHam')
const iconClose = document.getElementById('iconClose')
const navModal = document.getElementById('navModal')
const back = document.getElementById('back')
const container = document.getElementById('container')
const modalClose = document.getElementById('modalClose')
const selected = document.querySelectorAll('.selected__link')
const modalSuccess = document.getElementById('modalSuccess')
const goIt = document.getElementById('goIt')
selected.forEach(item => {
  item.addEventListener('click', (e) => {
    container.classList.remove('show')
    modalSuccess.classList.add('modal__success--active')
  })
})

iconHam.addEventListener('click', () => navModal.classList.add('show--modal'))
iconClose.addEventListener('click', () => navModal.classList.remove('show--modal'))
back.addEventListener('click', () => container.classList.add('show'))
modalClose.addEventListener('click', () => container.classList.remove('show'))

const divModalCircle = document.querySelectorAll('.modal__circle')
Array.from(divModalCircle).forEach(item => {
  item.addEventListener('click', (e) => {
    e.target.classList.toggle('modal__circle--selected')
    e.target.parentElement.classList.toggle('prices__card--active')
    e.target.parentElement.lastElementChild.classList.toggle('selected--active')
  })
})

goIt.addEventListener('click', () => {
  modalSuccess.classList.remove('modal__success--active')
    Array.from(divModalCircle).forEach(item => {
      item.classList.remove('modal__circle--selected')
      item.parentElement.classList.remove('prices__card--active')
      item.parentElement.lastElementChild.classList.remove('selected--active')
  })
})
