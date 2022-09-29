// ==========Render Modal Form to Sing in==========

function renderModalForm() {
  const modalBlockSingIn = document.getElementById("modal-sing-in");
  // const modalBlockSingUp = document.getElementById("modal-sing-up");

  const handleRenderElement = (elem) => {
    const element = document.createElement(elem.element);
    if (elem.className?.length) {
      element.classList.add(...elem.className);
    }
    if (elem.element === "a") {
      element.href = elem.href;
    }
    if (elem.element === "form") {
      element.setAttribute("action", elem.action);
    }

    if (elem.element === "input") {
      element.setAttribute("placeholder", elem.placeholder);
      element.setAttribute("type", elem.type);
      element?.setAttribute("autocomplete", elem.autocomplete);
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

  const modalContentSingIn = handleRenderElement(MODAL_STRUCTURE_SING_IN);
  modalBlockSingIn.append(modalContentSingIn);

  // const modalContentSingUp = handleRenderElement(MODAL_STRUCTURE_SING_UP);
  // modalBlockSingUp.append(modalContentSingUp);
}

renderModalForm();

// ==========Open and close modal form to Sing ==========

function openModal() {
  const modalId = document.getElementById("modal-sing-in");
  const closeModal = document.querySelector(".modal-close");
  const singIn = document.querySelectorAll(".log-in");
  // const modalIdSingUp = document.getElementById("modal-sing-up");
  // const singUp = document.querySelector(".sing-up-link");

  singIn.forEach((link) => {
    link.onclick = (e) => {
      e.preventDefault();
      modalId.style.display = "block";
      document.body.classList.add("lock");
    };
  });

  closeModal.onclick = () => {
    modalId.style.display = "none";
    document.body.classList.remove("lock");
  };

  window.onclick = (e) => {
    if (e.target === modalId) {
      modalId.style.display = "none";
      document.body.classList.remove("lock");
    }
  };
}

openModal();

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

// ==========Open and close modal form to Sing Up==========
