export class Card {
  constructor(text, image, template, handleOpenPopup) {
    this.text = text;
    this.image = image;

    this.template = template;
    this.handleOpenPopup = handleOpenPopup;
  }

  createCard() {
    this.templateCard = document.querySelector(this.template).content;
    this.card = this.templateCard.querySelector(".card").cloneNode(true);
    this.cardName = this.card.querySelector(".card__name");
    this.cardImage = this.card.querySelector(".card__image");
    this.likeButton = this.card.querySelector("#like-button");
    this.trashButton = this.card.querySelector("#trash-button");
    this.cardName.textContent = this.text;
    this.cardImage.alt = this.text;
    this.cardImage.src = this.image;
    return this.card;
  }

  setEvents() {
    this.likeButton.addEventListener("click", () => {
      this.likeCard();
    });
    this.trashButton.addEventListener("click", () => {
      this.deleteCard();
    });
    this.cardImage.addEventListener("click", () => {
      this.displayImage();
    });
  }

  likeCard() {
    if (this.likeButton.src == "http://127.0.0.1:5500/images/Vectorlike.png") {
      this.likeButton.src = "./images/Vectorunlike.png";
    } else {
      this.likeButton.src = "./images/Vectorlike.png";
    }
  }
  deleteCard() {
    this.card.remove();
  }
  displayImage() {
    this.handleOpenPopup();
  }
}
const card = new Card("name", "link", ".template");
