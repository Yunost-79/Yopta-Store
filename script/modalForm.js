// ==========Render Modal Form==========

function renderModalForm() {
  const modalBlock = document.querySelector(".modal");

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

  const modalContent = handleRenderElement(MODAL_STRUCTURE_LOGIN);
  modalBlock.append(modalContent);
}

renderModalForm();

// ==========Open and close modal form==========

function openModal() {
  const modalId = document.getElementById("modal");
  const logIn = document.querySelectorAll('[data-login="sing-in"]');
  const closeModal = document.querySelector(".modal-close");

  logIn.onclick = (e) => {
    e.preventDefault();
    modalId.style.display = "block";
    document.body.classList.add("lock");
  };

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

// ==========Validation Form==========
function modalValidation() {
  const form = document.querySelector(".form-group");
  const formInput = document.querySelectorAll(".form-input");
  const inputEmail = document.querySelector(".form-input-email");
  const inputPassword = document.querySelector(".form-input-password");
  const enterButton = document.querySelector(".enter-button");

  // check valid input's e-mail or not
  const validEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  // const emptyInput = [...formInput].filter((input) => input.value === "");

  enterButton.addEventListener("click", function () {
    formInput.forEach(function (input) {
      if (input.value === "") {
        input.classList.add("error");
        console.log("error");
        return;
      }

      if (!validEmail(inputEmail.value)) {
        console.log("Email is not valid");
        inputEmail.classList.add("error");
      } else {
        inputEmail.classList.remove("error");
        console.log("Email is valid");
      }
    });
  });
}

modalValidation();
//check valid input's e-mail or not
// const validEmail = (email) => {
//   const re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// //check to empty inputs

// form.onsubmit = function () {
//   const emailVal = inputEmail.value;
//   const emptyInputs = Array.from(formInput).filter((input) => input.value === "");

//   formInput.forEach(function (input) {
//     if (input.value === "") {
//       input.classList.add("error");
//     } else {
//       input.classList.remove("error");
//     }
//   });

//   if (emptyInputs.length !== 0) {
//     console.log("Inputs not filled");
//     return false;
//   }

//   if (!validateEmail(emailVal)) {
//     console.log("Email not valid");
//     inputEmail.classList.add("error");
//     return false;
//   } else {
//     inputEmail.classList.remove("error");
//   }
// };

// let form = document.querySelector(".val-form");
// let formInput = document.querySelectorAll(".form-input");
// let inputEmail = document.querySelector(".form-input-email");
// let inputPhone = document.querySelector(".form-input-phone");
// let inputCheckbox = document.querySelector(".form-input-checkbox");

// // Проверка на валидность почты
// function validateEmail(email) {
//   let re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

// // Проверка на валидность телефона

// function validatePhone(phone) {
//   let re = /^[0-9\s]*$/;
//   return re.test(String(phone));
// }

// //Проверка inputs
// form.onsubmit = function () {
//   let emailVal = inputEmail.value;
//   let phoneVal = inputPhone.value;
//   let emptyInputs = Array.from(formInput).filter((input) => input.value === "");

//   //Проверка на пустые inputs

//   formInput.forEach(function (input) {
//     if (input.value === "") {
//       input.classList.add("error");
//     } else {
//       input.classList.remove("error");
//     }
//   });

//   if (emptyInputs.length !== 0) {
//     console.log("Inputs not filled");
//     return false;
//   }

//   //Проверка на валидность почты

//   if (!validateEmail(emailVal)) {
//     console.log("Email not valid");
//     inputEmail.classList.add("error");
//     return false;
//   } else {
//     inputEmail.classList.remove("error");
//   }

//   //Проверка на валидность номера телефона

//   if (!validatePhone(phoneVal)) {
//     console.log("Phone not valide");
//     inputPhone.classList.add("error");
//     return false;
//   } else {
//     inputPhone.classList.remove("error");
//   }

//   //Проверка на отимеченый чекбокс

//   if (!inputCheckbox.checked) {
//     console.log("Checkbox not checked");
//     inputCheckbox.classList.add("error");
//     return false;
//   } else {
//     inputCheckbox.classList.remove("error");
//   }
// };
