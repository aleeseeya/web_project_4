// Variables

let editBtn = document.querySelector(".profile__edit-button");
let profileName = document.querySelector(".profile__name");
let profileTitle  = document.querySelector(".profile__title");
let nameField = document.querySelector("#popup-name");
let titleField = document.querySelector("#popup-title");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__close-button");
let formElement = document.querySelector(".form");

// Functions

function openPopup() { 
  popup.classList.toggle("popup_opened");
  nameField.value = profileName.textContent;
  titleField.value = profileTitle.textContent;

}

function closePopup() {
  popup.classList.toggle("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameField.value;
  profileTitle.textContent = titleField.value;
  closePopup();
}


// Event Listeners

editBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);