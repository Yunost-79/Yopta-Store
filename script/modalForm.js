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
    if (elem?.onclick) {
      element.setAttribute("onclick", elem.onclick);
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

const setIsShowModal = (modalId, isShown) => {
  const modal = document.getElementById(modalId);
  if (modal) {
    if (isShown) {
      modal.classList.add("shown")
      modal.classList.remove("hidden")
    } else {
      modal.classList.remove("shown")
      setTimeout(() => {
        modal.classList.add("hidden")
      }, 300)
    }
  }
};
