import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Popup } from "./Popup.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { Section } from "./Section.js";

export const popup = document.querySelector("#popup-perfil");
export const popupAdd = document.querySelector("#popup-add");
export const popupDisplay = document.querySelector("#popup-display");

export const newNameInput = document.querySelector("#name");
export const newJobInput = document.querySelector("#info");
export const profileName = document.querySelector(".profile__name");
export const profileDescription = document.querySelector(
  ".profile__description"
);

export const newTitle = document.querySelector("#title");
export const newImage = document.querySelector("#url");

export const popupParrafo = document.querySelector(".popup__parrafo");

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

const validationSettings = {
  inputElement: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

// resultados de clase validator
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

// resultados de handleFormSubmit from PopupWithForm
const handleProfileSubmit = (valoresInput) => {

  profileName.textContent = valoresInput.name;
  profileDescription.textContent = valoresInput.info;
};
const instanciaPerfil = new PopupWithForm("#popup-perfil", (valoresInput) =>
  handleProfileSubmit(valoresInput)
);

const handlePlaceSubmit = (valoresInput) => {
  const card = new Card(
    valoresInput.title,
    valoresInput.url,
    ".template",
    () => {
      popupWithImage.open(valoresInput.url, valoresInput.title);
    }
  );
  const cardElement = card.createCard();
  card.setEvents();
  const container = document.querySelector(".elements");

  container.prepend(cardElement);
};
const instanciaAdd = new PopupWithForm(
  "#popup-add",

  (valoresInput) => handlePlaceSubmit(valoresInput)
);
//---------
const popupWithImage = new PopupWithImage("#popup-display");
popupWithImage.setEventListeners();
//---------
const openSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, ".template", () => {
        popupWithImage.open(item.link, item.name);
      });
      const cardElement = card.createCard();
      card.setEvents();
      return cardElement;
    },
  },
  ".elements"
);
openSection.renderItems();

// ---------
const openNewPlace = document.querySelector(".profile__add");
const openButton = document.querySelector(".profile__edit");
const formButtonProfile = document.querySelector("#popupButtonProfile");
const formButtonAdd = document.querySelector("#popupButtonAdd");

instanciaPerfil.setEventListeners();

instanciaAdd.setEventListeners();

const userInfo = new UserInfo(".profile__name", ".profile__description");
openButton.addEventListener("click", function () {
  const userInfoObject = userInfo.getUserInfo();
  newNameInput.value = userInfoObject.name;
  newJobInput.value = userInfoObject.description;
  instanciaPerfil.open();
});

openNewPlace.addEventListener("click", function () {
  formButtonAdd.classList.add("button_inactive");
  instanciaAdd.open();
});
