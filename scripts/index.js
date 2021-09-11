
// Variables

// Popups
const editPopup = document.querySelector("#edit-popup");
const addPopup = document.querySelector("#add-popup");
const popup = document.querySelector(".popup");

// Buttons
const closeBtn = document.querySelector(".popup__close-btn");
const addBtn = document.querySelector(".profile__add-button");
const editBtn = document.querySelector(".profile__edit-button");
const editCloseBtn = document.querySelector("#close-edit");
const addCloseBtn = document.querySelector("#close-add");

const submitBtn = document.querySelector(".popup__submit-btn");

// Form Fields
const formElement = document.querySelector(".form");

// Edit Popup
const profileName = document.querySelector(".profile__name");
const proficonstitle  = document.querySelector(".profile__title");
const nameField = document.querySelector("#edit-popup-name");
const titleField = document.querySelector("#edit-popup-title");

// Add Card Popup
const addTitleField = document.querySelector("#new-card-title")
const addLinkField = document.querySelector("#new-card-link");
const cardCaption = document.querySelector(".cards__card-caption");
const cardImageLink = document.querySelector(".card__image-link");

// Photo Grid
const cardTemplate = document.querySelector("#cardTemplate").content.querySelector(".card");
const placesList = document.querySelector(".places__list");


// Functions

// Popups

function openEditPopup() { 
  editPopup.classList.toggle("popup_opened");
}

function closeEditPopup() {
  editPopup.classList.toggle("popup_opened");
}

function openAddPopup() {
  addPopup.classList.toggle("popup_opened");
}

function closeAddPopup() {
   addPopup.classList.toggle("popup_opened");
}

function closePopup() {
  popup.classList.toggle("popup_opened");
} 

function editForm() {
  openEditPopup();
  // nameField.value = profileName.textContent;
  //titleField.value = proficonstitle.textContent;

}

function addCardForm() {
  openAddPopup();
  // addTitleField.value = cardCaption.textContent;
  // addLinkField.value = cardImageLink.innerHTML;
  
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameField.value;
  proficonstitle.textContent = titleField.value;
  closePopup();
}

// Like Buttons

// document.querySelector(".card__like-icon").forEach(item =>
//   item.addEventListener("click", () =>
//   item.classList.toggle("card__like-icon_active"))
//   );


// Event Listeners

// Popups
editBtn.addEventListener("click", editForm);
addBtn.addEventListener("click", addCardForm);
editCloseBtn.addEventListener("click", closeEditPopup);
addCloseBtn.addEventListener("click", closeAddPopup)
formElement.addEventListener("submit", handleFormSubmit);

initialCards.forEach((card) => {
  //use template
   const cardEl = cardTemplate.cloneNode(true);

   // set the title
   cardEl.querySelector(".card__title").textContent = card.title;

   // set the image
   cardEl.querySelector(".card__image").style.backgroundImage = `url(${card.image})`;
   
   placesList.append(cardEl);

   // append it to the list
 });

const likeButton = cardTemplate.querySelector(".card__like-icon");
likeButton.addEventListener("click", likePhoto);

function likePhoto () {
  likeButton.classList.toggle("card__like-icon_active");
}
