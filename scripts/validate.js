

//debe mostrar el msg de error si no cumple las especificaciones
const showInputError = (formElement, inputElement, errorMessage) => {
  console.log("show");

  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); //name-error . elemento p
  console.log(errorElement);
  console.log(formElement);
  console.log(`.${inputElement.id}-error`);

  inputElement.classList.add("form__input_type_error"); //en ningun lugar esta declarada esta clase
  errorElement.textContent = errorMessage; // al p le pongo el texto del error automatico del browser
  errorElement.classList.add("form__input-error_active"); // css rojo
};

// //de cumplir las espacificaciones debe activar el boton submit
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
    // console.log("invalido");
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // console.log("valido");
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    console.log(inputElement.validity);
    return !inputElement.validity.valid; //al ser falso por! , valida la falsedad y pasa toggle
  });
};

//3
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_inactive");
  } else {
    buttonElement.classList.remove("button_inactive");
    //parte de la validacion en este momento deberia pintar el boton a negro
  } //si el input es invalido se agrega la clase, esta valida los dos campos
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
      //aqui es el momento en el que el usuario escribe antes de guardar el form
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//1
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  // console.log(formList); // formList es el array de los dos popup(forms)
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
      // console.log("hola"); // muestra el comportamiento del submit en ambos forms
    });
    setEventListeners(formElement); //va a linea 49
  });
};

enableValidation();
