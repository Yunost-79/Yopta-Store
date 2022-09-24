const burgerBtn = document.querySelector('.burger');
const burgerLines = document.querySelector('.burger-lines');
const burgerNav = document.querySelector('.nav-burger');
const burgerBackdrop = document.querySelector('.burger-backdrop');

const toggleBurgerMenu = () => {
  burgerLines.classList.toggle('active');
  burgerBtn.classList.toggle('active');

  if (burgerNav.classList.contains("active")) {
    burgerBackdrop.classList.remove("active");
    burgerNav.classList.remove('active');
    setTimeout(() => {
      burgerNav.classList.remove('shown');
    }, 700);
  } else {
    burgerBackdrop.classList.add("active");
    burgerNav.classList.add('shown');
    burgerNav.classList.add('active');
  }

  document.body.classList.toggle('lock')
}