console.log("hola")

const openButton = document.querySelector(".profile__edit");
const closePopup = document.querySelector(".popup__close");

const newNameInput = document.getElementById("name"); //<input/>
const newJobInput = document.getElementById("info"); //<input/>

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const formButton = document.querySelector(".popup__button"); //<button/>


//este evento funcion activa el lapiz para traer el popup//
openButton.addEventListener("click", function ( ) {
  const popup = document.querySelector(".popup");
popup.classList.add("popup__open")
})

//este evento funcion remueve el popup desde click en x //
closePopup.addEventListener("click", function (){
  const popup = document.querySelector(".popup");
popup.classList.remove("popup__open")
})

//este evento debe realizar el cambio de la info en profile al rellenar yguardar el formulario//
console.log(newJobInput)
formButton.addEventListener("click", function (evt) {
  evt.preventDefault(); //evita que la pagina se recargue al hacer submit
  profileName.textContent = newNameInput.value
  profileDescription.textContent = newJobInput.value

})




