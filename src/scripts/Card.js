export class Card {
  constructor(
    text,
    image,
    isLiked,
    template,
    handleOpenPopup,
    handleDeleteCard,
    handleLikeCard,
    handleDislikeCard
  ) {
    this.text = text;
    this.image = image;
    this.isLiked = isLiked;
    this.template = template;
    this.handleOpenPopup = handleOpenPopup;
    this.handleDeleteCard = handleDeleteCard;
    this.handleLikeCard = handleLikeCard;
    this.handleDislikeCard = handleDislikeCard;
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
    this.likeCard();
    return this.card;
  }

  setEvents() {
    this.likeButton.addEventListener("click", () => {
      if (this.isLiked) {
        this.handleDislikeCard().then(() => {
          this.isLiked = false;
          this.likeCard();
        });
      } else {
        this.handleLikeCard().then(() => {
          this.isLiked = true;
          this.likeCard();
        });
      }
    });
    this.trashButton.addEventListener("click", () => {
      this.handleDeleteCard();
    });
    this.cardImage.addEventListener("click", () => {
      this.displayImage();
    });
  }

  likeCard() {
    if (!this.isLiked) {
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

//crear la homologacion de los  id //