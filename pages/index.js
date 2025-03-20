console.log("hola");

const openButton = document.querySelector(".profile__edit");
const closePopup = document.querySelector(".popup__close");

const popup = document.querySelector(".popup");


const newNameInput = document.querySelector("#name");
const newJobInput = document.querySelector("#info");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const formButton = document.querySelector(".popup__button");

openButton.addEventListener("click", function () {
  popup.classList.add("popup__open");
});

closePopup.addEventListener("click", function () {
  popup.classList.remove("popup__open");
});

console.log(newJobInput);
formButton.addEventListener("click", function (evt) {
  evt.preventDefault(); 
  profileName.textContent = newNameInput.value;
  profileDescription.textContent = newJobInput.value;
});
