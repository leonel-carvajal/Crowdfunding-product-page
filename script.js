const iconHam = document.getElementById('iconHam')
const iconClose = document.getElementById('iconClose')
const navModal = document.getElementById('navModal')
const back = document.getElementById('back')
const container = document.getElementById('container')
const modalClose = document.getElementById('modalClose')


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


