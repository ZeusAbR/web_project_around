import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.popupSelector = document.querySelector(popupSelector);
    this._image = this.popupSelector.querySelector(".popup__image");
    this._caption = this.popupSelector.querySelector(".popup__parrafo");
  }

  open(imageSrc, imageCaption) {
    // Configurar la imagen y su leyenda
    this._image.src = imageSrc;
    this._image.alt = imageCaption;
    this._caption.textContent = imageCaption;

    super.open();
  }
  
  setEventListeners() {
    super.setEventListeners();
  }
}
