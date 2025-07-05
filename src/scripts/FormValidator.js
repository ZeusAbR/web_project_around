export class FormValidator {
  constructor(form, settings) {
    this.form = form;
    this.inputElement = settings.inputElement;
    this.submitButtonSelector = settings.submitButtonSelector;
    this.inactiveButtonClass = settings.inactiveButtonClass;
    this.inputErrorClass = settings.inputErrorClass;
    this.errorClass = settings.errorClass;
  }
  
  enableValidation = () => {
    this.popupForm = document.querySelector(this.form);
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
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
  }

  hasInvalidInput() {
    return this.inputList.some((inputElement) => {

      return !inputElement.validity.valid;
    });
  }

  showInputError(inputElement, errorMessage) {
    this.errorElement = this.popupForm.querySelector(
      `.${inputElement.id}-error`
    );

    inputElement.classList.add(this.inputErrorClass);
    this.errorElement.textContent = errorMessage;
    this.errorElement.classList.add(this.errorClass);
  }

  hideInputError(inputElement) {
    this.errorElement = this.popupForm.querySelector(
      `.${inputElement.id}-error`
    );

    inputElement.classList.remove(this.inputErrorClass);
    this.errorElement.classList.remove(this.errorClass);
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
