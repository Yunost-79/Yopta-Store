const renderMenu = () => {
  const headerMenu = document.getElementById('header-menu');
  const headerBurgerMenu = document.getElementById('header-menu-burger');

  HEADER_MENU_ITEMS.forEach((item) => {
    const menuElem = document.createElement('li');
    menuElem.classList.add('nav-item');
    menuElem.innerHTML = `<a href="${item.link}"  ${item?.class ? 'class=' + item.class : ''}>
    ${item.label}</a>`;
    headerMenu.append(menuElem);

    const menuElemBurger = document.createElement('li');
    menuElemBurger.classList.add('nav-item-burger');
    menuElemBurger.innerHTML = `<a href="${item.link}"   
    ${item?.class ? 'class=' + item.class : ''}>
    ${item.label}</a>`;
    headerBurgerMenu.append(menuElemBurger);
  });
};

renderMenu();
