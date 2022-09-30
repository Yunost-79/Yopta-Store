// ==========Render Modal Form to sign in==========

function renderModalForm() {
  const modalBlockSignIn = document.getElementById("modal-sign-in");
  const modalBlockSignUp = document.getElementById("modal-sign-up");

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
    if (elem.element === "button") {
      element.id = elem.id;
    }

    if (elem.children?.length) {
      elem.children.forEach((it) => {
        const childElem = handleRenderElement(it);
        element.append(childElem);
      });
    }
    return element;
  };

  //For modal form to sign IN
  const modalContentSignIn = handleRenderElement(MODAL_STRUCTURE_SIGN_IN);
  modalBlockSignIn.append(modalContentSignIn);

  //For modal form to sign UP

  const modalContentSignUp = handleRenderElement(MODAL_STRUCTURE_SIGN_UP);
  modalBlockSignUp.append(modalContentSignUp);
}

renderModalForm();

const validEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// ==========Validation Form to SIGN IN==========
function modalValidationSignIn() {
  const formInput = document.querySelectorAll(".form-input");
  const inputEmail = document.querySelector(".form-input-email-sing-in");
  const enterButton = document.getElementById("sign-in-button");

  // check valid input's e-mail or not to sign in

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

      console.log("Email isnt valid");
    } else {
      inputEmail.classList.remove("error");

      console.log("Email is valid");
    }
  });
}

modalValidationSignIn();

// ==========Validation Form to SIGN ON==========

function modalValidationSignUp() {
  const inputSignUp = document.querySelectorAll(".form-input");
  const emailSignUp = document.querySelector(".form-input-email-sign-up");
  const firstPassword = document.getElementById("first-password-input");
  const secondPassword = document.getElementById("second-password-input");
  const classPassword = document.querySelectorAll(".form-input-password-check");
  const checkbox = document.querySelector(".form-input-checkbox");
  const checkboxLabel = document.querySelector(".checkbox_label");
  const enterButton = document.getElementById("sign-up-button");

  enterButton.addEventListener("click", function () {
    inputSignUp.forEach(function (input) {
      if (input.value === "") {
        input.classList.add("error");

        return;
      } else {
        input.classList.remove("error");
      }
    });
    if (!validEmail(emailSignUp.value)) {
      emailSignUp.classList.add("error");

      console.log("Email isnt valid");
      return;
    } else {
      emailSignUp.classList.remove("error");
    }

    classPassword.forEach((pass) => {
      if (pass.value != "") {
        if (firstPassword.value != secondPassword.value) {
          pass.classList.add("error");

          console.log("Passwords do not match");
          return;
        } else {
          pass.classList.remove("error");

          console.log("Passwords is match");
        }
      }
    });

    if (!checkbox.checked) {
      console.log("Checkbox not checked");
      checkbox.classList.add("error");

      checkboxLabel.classList.add("error");
      return;
    } else {
      checkbox.classList.remove("error");
      checkboxLabel.classList.remove("error");
    }
  });
}

modalValidationSignUp();

// const setIsShowModal = (modalId, isShown) => {
//   const modal = document.getElementById(modalId);
//   if (modal) {
//     if (isShown) {
//       modal.classList.add("shown");
//       modal.classList.remove("hidden");
//     } else {
//       modal.classList.remove("shown");
//       setTimeout(() => {
//         modal.classList.add("hidden");
//       }, 300);
//     }
//   }
// };
