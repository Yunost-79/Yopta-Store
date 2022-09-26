
// ==========ModalWindow==========

const modalF = document.getElementById('modal');
const logIn = document.getElementById('logIn');

let close = document.querySelector(".modal-close-lines");

logIn.onclick = (e) => {
  e.preventDefault();
    modal.style.display = "block";
};


close.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// ==========Validation Form==========

let form = document.querySelector(".val-form");
let formInput = document.querySelectorAll(".form-input");
let inputEmail = document.querySelector(".form-input-email");
let inputPhone = document.querySelector(".form-input-phone");
let inputCheckbox = document.querySelector(".form-input-checkbox");

// Проверка на валидность почты
function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Проверка на валидность телефона

function validatePhone(phone) {
  let re = /^[0-9\s]*$/;
  return re.test(String(phone));
}

//Проверка inputs
form.onsubmit = function () {
  let emailVal = inputEmail.value;
  let phoneVal = inputPhone.value;
  let emptyInputs = Array.from(formInput).filter((input) => input.value === "");

  //Проверка на пустые inputs

  formInput.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  if (emptyInputs.length !== 0) {
    console.log("Inputs not filled");
    return false;
  }

  //Проверка на валидность почты

  if (!validateEmail(emailVal)) {
    console.log("Email not valid");
    inputEmail.classList.add("error");
    return false;
  } else {
    inputEmail.classList.remove("error");
  }

  //Проверка на валидность номера телефона

  if (!validatePhone(phoneVal)) {
    console.log("Phone not valide");
    inputPhone.classList.add("error");
    return false;
  } else {
    inputPhone.classList.remove("error");
  }

  //Проверка на отимеченый чекбокс

  if (!inputCheckbox.checked) {
    console.log("Checkbox not checked");
    inputCheckbox.classList.add("error");
    return false;
  } else {
    inputCheckbox.classList.remove("error");
  }
};
