//debe mostrar el msg de error si no cumple las especificaciones

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

//de cumplir las espacificaciones debe activar el boton submit
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

//activa el boton submit
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
//valida los campos de input, mediante la pregunta
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    console.log(inputElement.validity);
    return !inputElement.validity.valid; //al ser falso por! , valida la falsedad y pasa toggle
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  console.log(toggleButtonState);
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_inactive");
  } else {
    buttonElement.classList.remove("button_inactive");
  }
};

const setEventListeners = (formElement) => {
  //console.log(formElement); llama a uno de los popup
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = document.querySelector(".popup__button");
  console.log(inputList); //si esta regresando los inputs
  console.log(buttonElement);
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    console.log(inputElement); //cada uno de los inputs
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  // console.log(formList); // formList es el array de los dos popup(forms)

  formList.forEach((formElement) => {
    console.log(formElement); //formElement es cada uno de los popup

    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();
