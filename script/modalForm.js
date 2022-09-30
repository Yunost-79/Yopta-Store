// ==========Render Modal Form to Sing in==========

function renderModalForm() {
  const modalBlockSingIn = document.getElementById("modal-sing-in");
  const modalBlockSingUp = document.getElementById("modal-sing-up");

  const handleRenderElement = (elem) => {
    const element = document.createElement(elem.element);
    if (elem.className?.length) {
      element.classList.add(...elem.className);
    }
    if (elem.element === "a") {
      elem?.href ? (element.href = elem.href) : "";
    }
    if (elem.element === "form") {
      element.setAttribute("action", elem.action);
    }
    if (elem?.id ? elem.element === "div" : "") {
      element.id = elem.id;
    }

    if (elem.element === "input") {
      elem?.placeholder ? element.setAttribute("placeholder", elem.placeholder) : "";
      elem?.id ? (element.id = elem.id) : "";
      elem?.autocomplete ? element.setAttribute("autocomplete", elem.autocomplete) : "";
      element.setAttribute("type", elem.type);
    } else {
      element.textContent = elem.text;
    }
    if (elem.children?.length) {
      elem.children.forEach((it) => {
        const childElem = handleRenderElement(it);
        element.append(childElem);
      });
    }
    return element;
  };

  //For modal form to SING IN
  const modalContentSingIn = handleRenderElement(MODAL_STRUCTURE_SING_IN);
  modalBlockSingIn.append(modalContentSingIn);

  //For modal form to SING UP

  const modalContentSingUp = handleRenderElement(MODAL_STRUCTURE_SING_UP);
  modalBlockSingUp.append(modalContentSingUp);
}

renderModalForm();

// ==========Open and close modal form to Sing ==========

function openModalSingIn() {
  const modalIdSingIn = document.getElementById("modal-sing-in");
  const modalIdSingUp = document.getElementById("modal-sing-up");
  const closeModalSingIn = document.getElementById("close-modal-sing-in");
  const singIn = document.querySelectorAll(".log-in");

  singIn.forEach((link) => {
    link.onclick = (e) => {
      e.preventDefault();
      modalIdSingIn.style.display = "block";
      document.body.classList.add("lock");
    };
  });

  closeModalSingIn.onclick = () => {
    modalIdSingIn.style.display = "none";
    document.body.classList.remove("lock");
  };

  modalIdSingIn.onclick = (e) => {
    if (e.target === modalIdSingIn) {
      modalIdSingIn.style.display = "none";
      document.body.classList.remove("lock");
    }
  };
}

openModalSingIn();

function openModalSingUp() {
  const closeModalSingUp = document.getElementById("close-modal-sing-up");
  const modalIdSingUp = document.getElementById("modal-sing-up");
  const modalIdSingIn = document.getElementById("modal-sing-in");
  const singUp = document.querySelector(".sing-up-link");

  singUp.onclick = (e) => {
    e.preventDefault();
    modalIdSingUp.style.display = "block";
    modalIdSingIn.style.display = "none";
    document.body.classList.add("lock");
  };

  closeModalSingUp.onclick = () => {
    modalIdSingUp.style.display = "none";
    document.body.classList.remove("lock");
  };

  modalIdSingUp.onclick = (e) => {
    if (e.target === modalIdSingUp) {
      modalIdSingUp.style.display = "none";
      document.body.classList.remove("lock");
    }
  };
}

openModalSingUp();

// ==========Validation Form to Sing in==========
function modalValidation() {
  const formInput = document.querySelectorAll(".form-input");
  const inputEmail = document.querySelector(".form-input-email");
  const enterButton = document.querySelector(".enter-button");

  // check valid input's e-mail or not to Sing in
  const validEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  enterButton.addEventListener("click", function () {
    formInput.forEach(function (input) {
      if (input.value === "") {
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });

    if (!validEmail(inputEmail.value)) {
      inputEmail.classList.add("error");
      console.log("email isnt valid");
    } else {
      inputEmail.classList.remove("error");
      console.log("email is valid");
    }
  });
}

modalValidation();
