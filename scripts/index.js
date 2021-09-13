// Variables
const cardTemplate = document.querySelector("#cardTemplate").content;

// Popups
const popup = document.querySelector(".popup");
const editPopup = document.querySelector("#edit-popup");
const addPopup = document.querySelector("#add-popup");
const cardPreviewPopup = document.querySelector("#card-preview-popup");

// Photo Grid
const placesList = document.querySelector(".places__list");
const cardEl = cardTemplate.cloneNode(true);

// Buttons
const addOpenBtn = document.querySelector(".profile__add-button");
const editOpenBtn = document.querySelector(".profile__edit-button");

const editCloseBtn = document.querySelector("#close-edit");
const addCloseBtn = document.querySelector("#close-add");
const cardPreviewCloseBtn = cardPreviewPopup.querySelector(".popup__close-btn");

const editFormSubmit = document.querySelector("#edit-profile-form");
const addFormSubmit = document.querySelector("#add-card-form");

// Edit Profile Popup
const profileName = document.querySelector(".profile__name");
const profileTitle  = document.querySelector(".profile__title");
const nameInput = document.querySelector("#edit-profile-name");
const titleInput= document.querySelector("#edit-profile-title");

// Add Card Popup
const cardTitleInput = document.querySelector("#new-card-title")
const cardLinkInput = document.querySelector("#new-card-link");
const cardImageLink = document.querySelector(".card__image-link");

// Card Image Preview
const cardPreviewImage = document.querySelector(".popup__image");
const cardPreviewCaption = document.querySelector(".popup__caption");

// Functions

function togglePopup(popup) {
  popup.classList.toggle("popup_opened");
} 

function setEditForm(editPopup) {
if (!editPopup.classList.contains(".popup_opened")) {
  nameInput.value = profileName.textContent;
  titleInput.value = profileTitle.textContent;
  }
}

function editFormSubmitHandler(evt) {
 evt.preventDefault();
 profileName.textContent = nameInput.value;
 profileTitle.textContent = titleInput.value;
 togglePopup(editPopup);
}

// Adding a Card

function createCard(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const likeButton = cardElement.querySelector(".card__like-icon");
  const deleteButton = cardElement.querySelector(".card__delete-icon");

  deleteButton.addEventListener("click", function() {
    const card = deleteButton.closest(".card");
    card.remove();
  });

  likeButton.addEventListener("click", function() {
    likeButton.classList.toggle("card__like-icon_active");
  });

  const imageEl = cardElement.querySelector(".card__image");
  imageEl.src = card.image;
  imageEl.alt = card.title;
  cardElement.querySelector(".card__title").textContent = card.title;
  placesList.prepend(cardElement);

  imageEl.addEventListener("click", () => {
    togglePopup(cardPreviewPopup);
    cardPreviewImage.src = card.image;
    cardPreviewImage.alt = card.title;
    cardPreviewCaption.textContent = card.title;
  });

return cardElement;

}

initialCards.forEach((card) => {
   const cardEl = createCard(card);
   placesList.append(cardEl);
 });

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  const newCard = {
    title: cardTitleInput.value,
    image: cardLinkInput.value
  }
  const newCardEl = createCard(newCard);
  togglePopup(addPopup);
}

function showCardPreview(card) {
 cardPreviewImg.src = card.image;
 cardPreviewCaption.textContent = card.title;
 togglePopup(cardPreviewPopup);
}

// Event Listeners

editOpenBtn.addEventListener("click", () => {
  initialEditForm(editPopup);
  togglePopup(editPopup);
});

editFormSubmit.addEventListener("submit", editFormSubmitHandler);
editCloseBtn.addEventListener("click", () => togglePopup(editPopup));

addOpenBtn.addEventListener("click", () => togglePopup(addPopup));
addCloseBtn.addEventListener("click", () => togglePopup(addPopup));
addFormSubmit.addEventListener("submit", addFormSubmitHandler);

cardPreviewCloseBtn.addEventListener("click", () => togglePopup(cardPreviewPopup));
