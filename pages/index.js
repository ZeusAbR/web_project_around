console.log("hola")

const openButton = document.querySelector(".profile__edit");
const closePopup = document.querySelector(".popup__close");

openButton.addEventListener("click", function ( ) {
  const popup = document.querySelector(".popup");
popup.classList.add("popup__open")
})

closePopup.addEventListener("click", function (){
  const popup = document.querySelector(".popup");
popup.classList.remove("popup__open")
})