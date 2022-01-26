import { initialCards } from './initial cards.js';
import { Card } from './Card.js';
import { selectorsConfiguration } from './validate.js';
import { deactivetingSubmit } from './validate.js';
const editButton = document.querySelector('.profile__button');
const popupEdit = document.querySelector('#popupEdit');
const popupZoom = document.querySelector('#popupZoom');
const popupAdd = document.querySelector('#popupAdd');
const popupSubmit = popupAdd.querySelector('.popup__button')
const buttonClosePopupAdd = document.querySelector('.popup__close_add');
const buttonClosePopupEdit = document.querySelector('.popup__close_edit');
const buttonClosePopupZoom = document.querySelector('.popup__close_zoom');
const formEdit = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__spec');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const addButton = document.querySelector('.profile__add');
const cards = document.querySelector('.cards');
const content = document.querySelector('.cards__list').content;
const ItemImage = document.querySelector('.popup__input_image');
const ItemTitle = document.querySelector('.popup__input_title');
const formAdd = document.querySelector('.popup__form_type_add');
const popupImage = document.querySelector('.popup__image');
const popupSubtitle = document.querySelector('.popup__subtitle')



initialCards.forEach((item) => {
    const card = new Card(item.link, item.name, openPopupZoom)
    const cardElement = card.generateCard()
    document.querySelector('.cards').prepend(cardElement)
});


function createNewCard(link, name) {
    return new Card(link, name, openPopupZoom).generateCard()
};

function addNewCard(card) {
    cards.prepend(card);
};

function submitFormHandlerAdd(evt) {
    evt.preventDefault();
    const newItem = {
        link: ItemImage.value,
        name: ItemTitle.value,
    }
    addNewCard(createNewCard(newItem.link, newItem.name))
    closePopup(popupAdd)
    formAdd.reset();
    deactivetingSubmit(popupSubmit, selectorsConfiguration)
};

function submitFormHandlerEdit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    formEdit.reset()
    closePopup(popupEdit)
};

function openEditModal() {
    openPopup(popupEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

function openPopupZoom(link, name) {
    openPopup(popupZoom);
    popupImage.src = link;
    popupImage.alt = name;
    popupSubtitle.textContent = name;
};

function openPopup(popup) {
    popup.classList.add('popup_type_opened');
    document.addEventListener('mousedown', closeByOverlay)
    document.addEventListener('keydown', closeByEscapeButton)
};

function closePopup(popup) {
    popup.classList.remove('popup_type_opened')
    document.removeEventListener('mousedown', closeByOverlay)
    document.removeEventListener('keydown', closeByEscapeButton)
}

function closeByOverlay(evt) {
    const overlay = document.querySelector('.popup_type_opened')
    if (evt.target === overlay) {
        closePopup(overlay)
        formEdit.reset()
    }
}

function closeByEscapeButton(evt) {
    const overlay = document.querySelector('.popup_type_opened')
    if (evt.key === 'Escape') {
        closePopup(overlay)
    }
}

buttonClosePopupAdd.addEventListener('click', () => closePopup(popupAdd));
buttonClosePopupEdit.addEventListener('click', () => closePopup(popupEdit));
buttonClosePopupZoom.addEventListener('click', () => closePopup(popupZoom));
editButton.addEventListener('click', openEditModal);
formEdit.addEventListener('submit', submitFormHandlerEdit);
addButton.addEventListener('click', () => openPopup(popupAdd));
formAdd.addEventListener('submit', submitFormHandlerAdd);