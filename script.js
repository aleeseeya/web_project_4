// Opening and Closing the Popup Box

// Profile 
let editBtn = document.querySelector(".profile__edit-button");
let profileName = document.querySelector(".profile__name");
let profileTitle  = document.querySelector(".profile__title");

// Popup 
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__close-icon");


function openPopup() { 
  popup.classList.toggle(popup_opened);
  popup.setAttribute("display", "block");
}

popup.addEventListener("click", openPopup);

// editBtn.addEventListener("click", openPopup);

// Form Fields

// Editing Your Name and About Me


// Like Icon
let likeSymbol = document.querySelector(".photo-grid__like-button");

function likePhoto() {
  likeSymbol.setAttribute("src", "./images/like-icon_active.png");
}

likeSymbol.addEventListener("click", likePhoto);

// function unlikePhoto() {
//  likeSymbol.setAttribute("src", "./images/like-icon.png");
// }



// if (likeSymbol.getAttribute("src", "./images/like-icon_active.png")) {
//  likeSymbol.addEventListener("click", unlikePhoto); 
// }


// likeSymbol.addEventListener("click", unlikePhoto);