let editBtn = document.querySelector(".profile__edit-button");
let profileName = document.querySelector(".profile__name");
let profileTitle  = document.querySelector(".profile__title");
let nameField = document.querySelector("#popup-name");
let titleField = document.querySelector("#popup-title");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__close-button");

// Opening and Closing the Popup Box
// Form Fields

function openPopup() { 
  popup.classList.toggle("popup_opened");
  nameField.value = profileName.textContent;
  titleField.value = profileTitle.textContent;

}
editBtn.addEventListener("click", openPopup);

function closePopup(){
  popup.classList.toggle("popup_opened");
}
closeBtn.addEventListener("click", closePopup);


// Editing Your Name and About Me
let formElement = document.querySelector(".form");

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameField.value;
  profileTitle.textContent = titleField.value;
  closePopup();
}

formElement.addEventListener("submit", handleFormSubmit);


// Like Icon
let likeSymbol = document.querySelector(".photo-grid__like-button");

function likePhoto() {
  likeSymbol.setAttribute("src", "./images/like-icon_active.png");
}
likeSymbol.addEventListener("click", likePhoto);