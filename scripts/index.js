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
const profileTitle = document.querySelector(".profile__title");
const nameInput = document.querySelector("#edit-profile-name");
const titleInput = document.querySelector("#edit-profile-title");

// Add Card Popup
const cardTitleInput = document.querySelector("#new-card-title");
const cardLinkInput = document.querySelector("#new-card-link");
const cardImgLink = document.querySelector(".card__image-link");

// Card Image Preview
const cardPreviewImg = document.querySelector(".popup__image");
const cardPreviewCaption = document.querySelector(".popup__caption");

// Functions

function openPopup(popup) {
  popup.classList.toggle("popup_opened");
}

function closePopup(popup) {
  popup.classList.toggle("popup_opened");
}

function setupEditForm(editPopup) {
  nameInput.value = profileName.textContent;
  titleInput.value = profileTitle.textContent;
}

function editFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileTitle.textContent = titleInput.value;
  closePopup(editPopup);
}

// Adding a Card

function createCard(card) {
  const cardEl = cardTemplate.cloneNode(true);
  const likeBtn = cardEl.querySelector(".card__like-icon");
  const deleteBtn = cardEl.querySelector(".card__delete-icon");

  const imgEl = cardEl.querySelector(".card__image");
  imgEl.src = card.image;
  imgEl.alt = card.title;
  cardEl.querySelector(".card__title").textContent = card.title;

  deleteBtn.addEventListener("click", function () {
    const card = deleteBtn.closest(".card");
    card.remove();
  });

  imgEl.addEventListener("click", () => {
    openPopup(cardPreviewPopup);
    cardPreviewImg.src = card.image;
    cardPreviewImg.alt = card.title;
    cardPreviewCaption.textContent = card.title;
  });

  likeBtn.addEventListener("click", function () {
    likeBtn.classList.toggle("card__like-icon_active");
  });

  return cardEl;
}

function renderCard(card) {
  const cardEl = createCard(card);
  placesList.prepend(cardEl);
}

initialCards.forEach((card) => {
  renderCard(card);
});

function addFormSubmitHandler(evt) {
  evt.preventDefault();
  const newCard = {
    title: cardTitleInput.value,
    image: cardLinkInput.value,
  };
  renderCard(newCard);
  closePopup(addPopup);
}

// Event Listeners

editOpenBtn.addEventListener("click", () => {
  setupEditForm(editPopup);
  openPopup(editPopup);
});

editFormSubmit.addEventListener("submit", editFormSubmitHandler);
editCloseBtn.addEventListener("click", () => openPopup(editPopup));

addOpenBtn.addEventListener("click", () => openPopup(addPopup));
addCloseBtn.addEventListener("click", () => openPopup(addPopup));
addFormSubmit.addEventListener("submit", addFormSubmitHandler);

cardPreviewCloseBtn.addEventListener("click", () =>
  closePopup(cardPreviewPopup)
);
