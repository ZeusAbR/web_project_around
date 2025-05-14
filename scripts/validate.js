const showInputError = (formElement, inputElement, errorMessage) => {
  console.log("show");

  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); //name-error . elemento p
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active"); // css rojo
};

const hideInputError = (formElement, inputElement) => {
  console.log("hide");
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

// esta valida input por individual
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {

    return !inputElement.validity.valid;
  });
};

//3
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_inactive");
  } else {
    buttonElement.classList.remove("button_inactive");

  }
};

//2
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button");
  // toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    toggleButtonState(inputList, buttonElement);

    inputElement.addEventListener("input", function () {
      // console.log("holainput"); // muestra el comportamiento del input cada que se presiona una tecla
      // console.log(inputElement.validity.valid); //comprueba parte de los requisitos necesarios del input

      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//1
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();

    });
    setEventListeners(formElement);
  });
};

enableValidation();
