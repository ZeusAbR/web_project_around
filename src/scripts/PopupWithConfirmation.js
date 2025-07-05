import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector(".popup-delete");
  }

  openConfirmation(apiDelete) {
    this.popupForm = document.querySelector("#popupFormDelete");
    this.popupForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
      apiDelete();
    });
  }
}
