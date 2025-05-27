export class FormValidator {
  constructor(form, settings) {
    this.form = form; //va traer el id de cada form del html
    this.inputElement = settings.inputElement; //no encuentra al elemento inputElement
    this.submitButtonSelector = settings.submitButtonSelector;
    this.inactiveButtonClass = settings.inactiveButtonClass; // el boton en gris antes de ser validado
    this.inputErrorClass = settings.inputErrorClass; //el perimetro del input errorClass:
    this.errorClass = settings.errorClass; //msg error
  }
  // metodos
  enableValidation = () => {
    this.popupForm = document.querySelector(this.form); //popup perfil,form espera el id del popup
    this.popupForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this.setEvents();
  };

  setEvents() {
    this.inputList = Array.from(
      this.popupForm.querySelectorAll(".popup__input")
    );
    this.buttonElement = this.popupForm.querySelector(".popup__button");

    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }

  checkInputValidity(inputElement) {
    if (this.hasInvalidInput()) {
      this.showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
  }
  hasInvalidInput() {
    return this.inputList.some((inputElement) => {
      console.log(inputElement);
      console.log(inputElement.validity.valid);
      return !inputElement.validity.valid;
    });
  }

  showInputError(inputElement, errorMessage) {
    this.errorElement = this.popupForm.querySelector(
      `.${inputElement.id}-error`
    );
    console.log(this.errorElement);
    console.log(inputElement);

    inputElement.classList.add(this.inputErrorClass);
    this.errorElement.textContent = errorMessage;
    this.errorElement.classList.add(this.errorClass);
  }

  hideInputError(inputElement) {
    this.errorElement = this.popupForm.querySelector(
      `.${inputElement.id}-error`
    );
    console.log(this.errorElement);
    console.log(inputElement);
    inputElement.classList.remove(this.inputErrorClass);
    this.errorElement.classList.remove(this.errorClass); //no se deberia llamar a una clase que inactive?
    this.errorElement.textContent = "";
  }
  toggleButtonState() {
    if (this.hasInvalidInput()) {
      this.buttonElement.classList.add(this.inactiveButtonClass);
    } else {
      this.buttonElement.classList.remove(this.inactiveButtonClass);
    }
  }
}

// const validationSettings = {
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "button_inactive", // el boton en gris antes de ser validado
//   inputErrorClass: "form__input_type_error", //el perimetro del input errorClass:
//   errorClass: "form__input-error_active ", // el texto del error
// };
