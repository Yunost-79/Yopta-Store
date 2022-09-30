const renderMenu = () => {
  const headerMenu = document.getElementById("header-menu");
  const headerBurgerMenu = document.getElementById("header-menu-burger");

  HEADER_MENU_ITEMS.forEach((item) => {
    const menuElem = document.createElement("li");
    menuElem.classList.add("nav-item");
    if (item.onclick) {
      menuElem.innerHTML = `<div onclick="${item.onclick}">${item.label}</a>`;
    } else {
      menuElem.innerHTML = `<a href="${item.link}"  ${item?.className ? "class=" + item.className : ""}>${item.label}</a>`;
    }
    headerMenu.append(menuElem);

    const menuElemBurger = document.createElement("li");
    menuElemBurger.classList.add("nav-item-burger");
    if (item.onclick) {
      menuElemBurger.innerHTML = `<div onclick="${item.onclick}">${item.label}</a>`;
    } else {
      menuElemBurger.innerHTML = `<a href="${item.link}"  ${item?.className ? "class=" + item.className : ""}>${item.label}</a>`;
    }
    headerBurgerMenu.append(menuElemBurger);
  });
};

renderMenu();

const handleOpenModal = (id) => {
  console.log(id);
  const modal = document.getElementById(id);
  modal.style.display = "block";
};

const handleCloseModal = (id) => {
  const modal = document.getElementById(id);
  modal.style.display = "none";

};

const handleSrollTO = (id) => {
  document.getElementById(id).scrollIntoView();
};
