
// Variables

// Popups
let editPopup = document.querySelector("#edit-popup");
let addPopup = document.querySelector("#add-popup");
let popup = document.querySelector(".popup");

// Buttons
let closeBtn = document.querySelector(".popup__close-btn");
let addBtn = document.querySelector(".profile__add-button");
let editBtn = document.querySelector(".profile__edit-button");
let editCloseBtn = document.querySelector("#close-edit");
let addCloseBtn = document.querySelector("#close-add");

let submitBtn = document.querySelector(".popup__submit-btn");

// Form Fields
let formElement = document.querySelector(".form");

// Edit Popup
let profileName = document.querySelector(".profile__name");
let profileTitle  = document.querySelector(".profile__title");
let nameField = document.querySelector("#edit-popup-name");
let titleField = document.querySelector("#edit-popup-title");

// Add Card Popup
let addTitleField = document.querySelector("#new-card-title")
let addLinkField = document.querySelector("#new-card-link");
let cardCaption = document.querySelector(".cards__card-caption");
let cardCaptionField = document.querySelector(".cards__card-caption");
let cardImageLink = document.querySelector(".card__image-link");

// Photo Grid


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
  //titleField.value = profileTitle.textContent;

}

function addCardForm() {
  openAddPopup();
  // addTitleField.value = cardCaption.textContent;
  // addLinkField.value = cardImageLink.innerHTML;
  
}


function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameField.value;
  profileTitle.textContent = titleField.value;
  closePopup();
}

// Photo-grid

// Like Buttons

document.querySelectorAll(".photo-grid__like-icon").forEach(item =>
  item.addEventListener("click", () =>
  item.classList.toggle("photo-grid__like-icon_active"))
  );


// Event Listeners

// Popups
editBtn.addEventListener("click", editForm);
addBtn.addEventListener("click", addCardForm);
editCloseBtn.addEventListener("click", closeEditPopup);
addCloseBtn.addEventListener("click", closeAddPopup)
formElement.addEventListener("submit", handleFormSubmit);



const initialCards = [
  { name: "Statue of Liberty",
    link: "images/statueofliberty_photo-grid.jpg"
  },
  {
    name: "Shotgun House",
    link: "images/neworleans.jpg"
  },
  {
    name: "Mount Rainier",
    link: "images/mountrainier.jpg"
  },
  {
    name: "The Bean",
    link: "images/chicagobean.jpg"
  },
  {
    name: "Golden Gate",
    link: "images/golden-gate-bridge.jpg"
  },
  {
    name: "Lincoln Memorial",
    link: "images/lincolnmemorial.jpg"
  }
];
