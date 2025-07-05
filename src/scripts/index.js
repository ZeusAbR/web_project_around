import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { Section } from "./Section.js";
import { api } from "./Api.js";
import { PopupWithConfirmation } from "./PopupWithConfirmation.js";

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

const openNewPlace = document.querySelector(".profile__add");
const openProfileButton = document.querySelector(".profile__edit");
const formButtonProfile = document.querySelector("#popupButtonProfile");
const formButtonAdd = document.querySelector("#popupButtonAdd");
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

// #3 popup for profile inputs already loaded /
const handleProfileSubmit = (valoresInput) => {
  const savingButton = document.querySelector("#popupButtonProfile");
  savingButton.textContent = "Guardando...";
  return api.editProfile(valoresInput.name, valoresInput.info).then(() => {
    savingButton.textContent = "Guardar";
    profileName.textContent = valoresInput.name;
    profileDescription.textContent = valoresInput.info;
  });
};
const instanciaPerfil = new PopupWithForm("#popup-perfil", (valoresInput) =>
  handleProfileSubmit(valoresInput)
);

// #4check--- popup for inputs on new card
const handlePlaceSubmit = (valoresInput) => {
  const savingButton = document.querySelector("#popupButtonAdd");
  savingButton.textContent = "Guardando...";
  return api.addNewCard(valoresInput.title, valoresInput.url).then((item) => {
    savingButton.textContent = "Guardar";
    const card = new Card(
      valoresInput.title,
      valoresInput.url,
      item.isLiked,
      ".template",
      () => {
        popupWithImage.open(valoresInput.url, valoresInput.title);
      },
      () => {
        handleDeleteCard(item._id);
        card.deleteCard();
      },
      () => {
        return apiLikeCard(item._id);
      },
      () => {
        return apiDislikeCard(item._id);
      }
    );
    const cardElement = card.createCard();
    card.setEvents();
    const container = document.querySelector(".elements");

    container.prepend(cardElement);
  });
};
//-----
const instanciaAdd = new PopupWithForm(
  "#popup-add",

  (valoresInput) => handlePlaceSubmit(valoresInput)
); //--------

const popupWithImage = new PopupWithImage("#popup-display");
popupWithImage.setEventListeners();

// #1check---trae el popup perfil com los inputs cargados ,modifica la info de perfil ya desde servidor -------
const userInfo = new UserInfo(
  ".profile__name",
  ".profile__description",
  ".profile__picture"
);
api.getUserInfo().then((res) => {
  userInfo.setAvatar(res.avatar);
  userInfo.setUserInfo(res.name, res.about);
  openProfileButton.addEventListener("click", function () {
    const userInfoObject = userInfo.getUserInfo();
    newNameInput.value = userInfoObject.name;
    newJobInput.value = userInfoObject.description;
    instanciaPerfil.open();
  });
});

instanciaPerfil.setEventListeners();

instanciaAdd.setEventListeners();

openNewPlace.addEventListener("click", function () {
  formButtonAdd.classList.add("button_inactive");
  instanciaAdd.open();
});

//--#6.7check---delete by popup confirmation //---
const deleteWithConfirmation = new PopupWithConfirmation("#popup-delete");
deleteWithConfirmation.setEventListeners();

const handleDeleteCard = (cardId) => {
  deleteWithConfirmation.open();

  deleteWithConfirmation.openConfirmation(() => {
    const deleteButton = document.querySelector("#popup-delete .popup__button");
    deleteButton.textContent = "Eliminando...";

    return api
      .deleteCard(cardId)
      .then((response) => {
        deleteButton.textContent = "Sí";
        deleteWithConfirmation.close();
      })
      .catch((error) => {
        deleteButton.textContent = "Sí";
      });
  });
};
//-----#8check like and dislike
const apiLikeCard = (cardId) => {
  return api.likeCard(cardId).then((response) => {});
};

const apiDislikeCard = (cardId) => {
  return api.dislikeCard(cardId).then((response) => {});
};
// #2check--
api.getInitialCards().then((initialCards) => {
  const openSection = new Section(
    {
      items: initialCards,
      renderer: (item) => {
        const card = new Card(
          item.name,
          item.link,
          item.isLiked,
          ".template",
          () => {
            popupWithImage.open(item.link, item.name);
          },
          (cardId) => {
            handleDeleteCard(item._id);
            card.deleteCard();
          },
          () => {
            return apiLikeCard(item._id);
          },
          () => {
            return apiDislikeCard(item._id);
          }
        );
        const cardElement = card.createCard();
        card.setEvents();
        return cardElement;
      },
    },
    ".elements"
  );
  openSection.renderItems();
});

//--#9---avatar
const pencilAvatar = document.querySelector(".profile__pencil");
pencilAvatar.addEventListener("click", () => {
  avatarUpdateConfirmation.open();
});

const handleAvatar = (url) => {
  const avatarButton = document.querySelector("#popup-avatar .popup__button");
  avatarButton.textContent = "Guardando...";
  api.updateAvatarPicture(url.url).then((response) => {
    avatarButton.textContent = "Guardar";
    userInfo.setAvatar(response.avatar);
    avatarUpdateConfirmation.close();
  });
};
const avatarUpdateConfirmation = new PopupWithForm(
  "#popup-avatar",
  handleAvatar
);
avatarUpdateConfirmation.setEventListeners();
