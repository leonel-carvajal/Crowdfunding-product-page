const iconHam = document.getElementById('iconHam')
const iconClose = document.getElementById('iconClose')
const navModal = document.getElementById('navModal')
iconHam.addEventListener('click', () => navModal.classList.add('show--modal'))
iconClose.addEventListener('click',()=>navModal.classList.remove('show--modal'))