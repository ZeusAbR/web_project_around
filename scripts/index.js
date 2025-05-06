const openButton = document.querySelector(".profile__edit");
const closePopupPerfil = document.querySelector("#popup-close-perfil");
const popup = document.querySelector("#popup-perfil");
const newNameInput = document.querySelector("#name");
const newJobInput = document.querySelector("#info");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const formButtonProfile = document.querySelector("#popupButtonProfile");

const openNewPlace = document.querySelector(".profile__add");
const newTitle = document.querySelector("#title");
const newImage = document.querySelector("#url");
const popupAdd = document.querySelector("#popup-add");
const closePopupAdd = document.querySelector("#popup-close-add");

const popupDisplay = document.querySelector("#popup-display");
const popupImage = document.querySelector(".popup__image");
const popupParrafo = document.querySelector(".popup__parrafo");

openButton.addEventListener("click", function () {
  popup.classList.add("popup__open");
});

closePopupPerfil.addEventListener("click", function () {
  popup.classList.remove("popup__open");
});

formButtonProfile.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileName.textContent = newNameInput.value;
  profileDescription.textContent = newJobInput.value;
  popup.classList.remove("popup__open");
});

openNewPlace.addEventListener("click", function () {
  popupAdd.classList.add("popup__open");
});

closePopupAdd.addEventListener("click", function () {
  popupAdd.classList.remove("popup__open");
});

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
const template = document.querySelector(".card");

initialCards.forEach((itemCard) => {
  const templateCard = document.querySelector(".template").content;
  const card = templateCard.querySelector(".card").cloneNode(true);
  const cardName = card.querySelector(".card__name");
  cardName.textContent = itemCard.name;
  const cardImage = card.querySelector(".card__image");
  cardImage.src = itemCard.link;
  cardImage.alt = itemCard.name;

  const likeButton = card.querySelector("#like-button");
  likeButton.addEventListener("click", function () {
    if (likeButton.src == "http://127.0.0.1:5500/images/Vectorlike.png") {
      likeButton.src = "./images/Vectorunlike.png";
    } else {
      likeButton.src = "./images/Vectorlike.png";
    }
  });
  const trashButton = card.querySelector("#trash-button");
  trashButton.addEventListener("click", function () {
    card.remove();
  });

  cardImage.addEventListener("click", function () {
    popupDisplay.classList.add("popup__open");
    popupImage.src = itemCard.link;
    popupParrafo.textContent = itemCard.name;
    popupImage.alt = itemCard.name;
  });

  const container = document.querySelector(".elements");
  container.append(card);
});

// abre la img de la carta
const popupCloseDisplay = document.querySelector("#popup-close-display");
popupCloseDisplay.addEventListener("click", function () {
  popupDisplay.classList.remove("popup__open");
});

const formButtonAdd = document.querySelector("#popupButtonAdd");
formButtonAdd.addEventListener("click", function (evt) {
  evt.preventDefault();
  const templateCard = document.querySelector(".template").content;
  const card = templateCard.querySelector(".card").cloneNode(true);
  const cardName = card.querySelector(".card__name");
  cardName.textContent = newTitle.value;
  const cardImage = card.querySelector(".card__image");
  cardImage.src = newImage.value;
  cardImage.alt = newTitle.value;

  const likeButton = card.querySelector("#like-button");
  likeButton.addEventListener("click", function () {
    if (likeButton.src == "http://127.0.0.1:5500/images/Vectorlike.png") {
      likeButton.src = "./images/Vectorunlike.png";
    } else {
      likeButton.src = "./images/Vectorlike.png";
    }
  });
  const trashButton = card.querySelector("#trash-button");
  trashButton.addEventListener("click", function () {
    card.remove();
  });

  cardImage.addEventListener("click", function () {
    popupDisplay.classList.add("popup__open");
    popupImage.src = newImage.value;
    popupParrafo.textContent = newTitle.value;
    popupImage.alt = newTitle.value;
  });

  const container = document.querySelector(".elements");
  container.prepend(card);
  popupAdd.classList.remove("popup__open");
});
