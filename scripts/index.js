const openButton = document.querySelector(".profile__edit");
const closePopupPerfil = document.querySelector("#popup-close-perfil");

const popup = document.querySelector("#popup-perfil");

const newNameInput = document.querySelector("#name");
const newJobInput = document.querySelector("#info");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const formButtonProfile = document.querySelector("#popupButtonProfile");

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
}); //pinta los nuevos valores mediante el textcontent y cierra el popup una vez sea rellenado el form//

const openNuevoLugar = document.querySelector(".profile__add"); //llama desde el boton +//
const nuevoTitulo = document.querySelector("#Titulo");
const nuevoImagen = document.querySelector("#url");
const popupAdd = document.querySelector("#popup-add"); //distingue por el add a su popup//
const closePopupAdd = document.querySelector("#popup-close-add"); //llama la x para cerrar su popup//

openNuevoLugar.addEventListener("click", function () {
  popupAdd.classList.add("popup__open");
});

closePopupAdd.addEventListener("click", function () {
  popupAdd.classList.remove("popup__open");
}); //cierra desde x al popup//

const popupDisplay = document.querySelector("#popup-display");

const popupImage = document.querySelector(".popup__image");
const popupParrafo = document.querySelector(".popup__parrafo");

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
  });

  const container = document.querySelector(".elements"); //etiqueta padre//
  container.append(card);
});

const popupCloseDisplay = document.querySelector("#popup-close-display"); //llama al boton x y ejecuta remover el popup mediante la clase//
popupCloseDisplay.addEventListener("click", function () {
  popupDisplay.classList.remove("popup__open");
});

//tarjetas nuevas que salieron del popup//
const formButtonAdd = document.querySelector("#popupButtonAdd");
formButtonAdd.addEventListener("click", function (evt) {
  evt.preventDefault();
  const templateCard = document.querySelector(".template").content;
  const card = templateCard.querySelector(".card").cloneNode(true);
  const cardName = card.querySelector(".card__name");
  cardName.textContent = nuevoTitulo.value;
  const cardImage = card.querySelector(".card__image");
  cardImage.src = nuevoImagen.value;
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
    popupImage.src = nuevoImagen.value;
    popupParrafo.textContent = nuevoImagen.value;
  });

  const container = document.querySelector(".elements");
  container.append(card);
  popupAdd.classList.remove("popup__open");
});
