export class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
    this.popupElement = document.querySelector(`${this.popupSelector}`);
    this.closeButtonElement = this.popupElement.querySelector(".popup__close");
    this.overlayElement = this.popupElement.querySelector(".popup__overlay");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this.popupElement.classList.add("popup__open");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this.popupElement.classList.remove("popup__open");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    this.closeButtonElement.addEventListener("click", () => {
      this.close();
    });
    this.overlayElement.addEventListener("click", (evt) => {
      if (evt.target === this.overlayElement) {
        this.close();
      }
    });
  }
}
