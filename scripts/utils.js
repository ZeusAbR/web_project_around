import {
  popup,
  popupAdd,
  profileName,
  profileDescription,
  newNameInput,
  newJobInput,
  newTitle,
  newImage,
} from "./index.js";
import { Card } from "./Card.js";

export const popupImage = document.querySelector(".popup__image");
export const popupParrafo = document.querySelector(".popup__parrafo");

export const openButton = document.querySelector(".profile__edit");
export const closePopupPerfil = document.querySelector("#popup-close-perfil");
export const formButtonProfile = document.querySelector("#popupButtonProfile");
export const openNewPlace = document.querySelector(".profile__add");
export const closePopupAdd = document.querySelector("#popup-close-add");
export const formButtonAdd = document.querySelector("#popupButtonAdd");
export const popupOverlayProfile = document.querySelector(
  "#popupOverlayProfile"
);
export const popupOverlayAdd = document.querySelector("#popupOverlayAdd");
export const popupOverlayImage = document.querySelector("#popupOverlayImage");

// perfil
openButton.addEventListener("click", function () {
  formButtonProfile.classList.add("button_inactive");
  popup.classList.add("popup__open");
});

closePopupPerfil.addEventListener("click", function () {
  popup.classList.remove("popup__open");
});
// avatar
formButtonProfile.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileName.textContent = newNameInput.value;
  profileDescription.textContent = newJobInput.value;
  popup.classList.remove("popup__open");
});
//place
openNewPlace.addEventListener("click", function () {
  formButtonAdd.classList.add("button_inactive");
  popupAdd.classList.add("popup__open");
});

closePopupAdd.addEventListener("click", function () {
  popupAdd.classList.remove("popup__open");
});
//template
formButtonAdd.addEventListener("click", function (evt) {
  evt.preventDefault();
  const card = new Card(newTitle.value, newImage.value, ".template");
  const cardElement = card.createCard();
  card.setEvents();
  const container = document.querySelector(".elements");
  container.prepend(cardElement);
  popupAdd.classList.remove("popup__open");
});

const popupCloseDisplay = document.querySelector("#popup-close-display");
export const popupDisplay = document.querySelector("#popup-display");
popupCloseDisplay.addEventListener("click", function () {
  popupDisplay.classList.remove("popup__open");
});

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
