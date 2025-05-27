import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

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

//genera la carta nueva bajo el template
const template = document.querySelector(".card");
initialCards.forEach((itemCard) => {
  const card = new Card(itemCard.name, itemCard.link, ".template");
  const cardElement = card.createCard();
  card.setEvents();
  const container = document.querySelector(".elements");
  container.append(cardElement);
});

const formButtonAdd = document.querySelector("#popupButtonAdd");
formButtonAdd.addEventListener("click", function (evt) {
  evt.preventDefault();
  const card = new Card(newTitle.value, newImage.value, ".template");
  const cardElement = card.createCard();
  card.setEvents();
  const container = document.querySelector(".elements");
  container.prepend(cardElement);
  popupAdd.classList.remove("popup__open");
});

// expande img de la carta
const popupCloseDisplay = document.querySelector("#popup-close-display");
popupCloseDisplay.addEventListener("click", function () {
  popupDisplay.classList.remove("popup__open");
});

// click a main page
const popupOverlayProfile = document.querySelector("#popupOverlayProfile");
const popupOverlayAdd = document.querySelector("#popupOverlayAdd");
const popupOverlayImage = document.querySelector("#popupOverlayImage");

popupOverlayProfile.addEventListener("click", function () {
  popup.classList.remove("popup__open");
});

popupOverlayAdd.addEventListener("click", function () {
  popupAdd.classList.remove("popup__open");
});

popupOverlayImage.addEventListener("click", function () {
  popupDisplay.classList.remove("popup__open");
});

//esc
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    popup.classList.remove("popup__open");
    popupAdd.classList.remove("popup__open");
    popupDisplay.classList.remove("popup__open");
  }
});

const validationSettings = {
  inputElement: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "button_inactive", // el boton en gris antes de ser validado
  inputErrorClass: "form__input_type_error", //el perimetro del input errorClass:
  errorClass: "form__input-error_active", // el texto del error
};

//@index
// resultados del constructor
const profileValidation = new FormValidator(
  "#popupFormPerfil",
  validationSettings
);
const placeValidation = new FormValidator(
  "#popupFormPlace",
  validationSettings
);

profileValidation.enableValidation();
placeValidation.enableValidation();
