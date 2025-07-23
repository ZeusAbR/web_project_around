import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector(".popup-delete");
  }

  openConfirmation(apiDelete) {
    this.apiDelete = apiDelete;
    this.popupForm = document.querySelector("#popupFormDelete");
    this.popupForm.addEventListener("submit", this.deleteFromApi);
  }
  close() {
    super.close();
    this.popupForm.removeEventListener("submit", this.deleteFromApi);
  }

  deleteFromApi(evt) {
    evt.preventDefault();
    this.apiDelete();
  }
}
