import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = Array.from(this._form.querySelectorAll(".popup__input"));
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((element) => {
      inputValues[element.name] = element.value;
    });
    return inputValues;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitButtonElement = this._popup.querySelector(".popup__button");
    this._submitButtonElement.addEventListener("click", (evt) => {
      evt.preventDefault();
      const valoresInput = this._getInputValues();
      this._handleFormSubmit(valoresInput);
      this.close();
    });
  }
}
