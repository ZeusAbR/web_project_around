class PopupWithForm extends Popup {
  constructor() {}

  // Método privado para recopilar datos de todos los campos de entrada
  _getInputValues() {}

  // Modificación del método padre setEventListeners()
  setEventListeners() {
    super.setEventListeners();
  }

  // Modificación del método padre close() para reiniciar el formulario
  close() {}
}

// Ejemplos de instancias de PopupWithForm para diferentes popups

// Popup para editar perfil
const editProfilePopup = new PopupWithForm(".", () => {
  // Aquí procesarías los datos del formulario de perfil
  // Por ejemplo: actualizar la información del usuario
});

// Popup para agregar nueva tarjeta
const addCardPopup = new PopupWithForm(".", () => {
  // Aquí procesarías los datos para crear una nueva tarjeta
  // Por ejemplo: crear y agregar la tarjeta al DOM
});

// Popup para eliminar tarjeta (si tiene formulario de confirmación)
const deleteCardPopup = new PopupWithForm(".", () => {
  // Aquí procesarías la eliminación de la tarjeta
});

// Inicializar event listeners para todos los popups
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
deleteCardPopup.setEventListeners();

// Ejemplo de uso: abrir popup desde botones
document
  .querySelector(".profile__edit-button")
  .addEventListener("click", () => {
    editProfilePopup.open();
  });

document.querySelector(".profile__add-button").addEventListener("click", () => {
  addCardPopup.open();
});

// Ejemplo de cómo prellenar un formulario antes de abrirlo
function openEditProfilePopup(name, about) {
  const nameInput = document.querySelector('input[name="name"]');
  const aboutInput = document.querySelector('input[name="about"]');

  nameInput.value = name;
  aboutInput.value = about;

  editProfilePopup.open();
}
