const burgerBtn = document.querySelector('.burger');
const burgerLines = document.querySelector('.burger-lines');
const burgerNav = document.querySelector('.nav-burger');

burgerBtn.addEventListener('click', (e) =>{
  burgerLines.classList.toggle('active');
  burgerNav.classList.toggle('active');
  burgerBtn.classList.toggle('active');
  document.body.classList.toggle('lock')
  
});