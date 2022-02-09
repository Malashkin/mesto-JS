import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards, editButton, popupEdit, popupZoom, popupAdd, buttonClosePopupAdd, buttonClosePopupEdit, buttonClosePopupZoom, formEdit, profileName, profileJob, nameInput, jobInput, addButton, cards, itemImage, itemTitle, formAdd, popupImage, popupSubtitle, selectorsConfiguration } from '../utils/constatnts.js'

const addFormValidation = new FormValidator(selectorsConfiguration, popupAdd);

addFormValidation.enableValidation();

const editFormValidation = new FormValidator(selectorsConfiguration, popupEdit);

editFormValidation.enableValidation();

initialCards.forEach((item) => {
    addNewCard(createNewCard(item.link, item.name))
});

function createNewCard(link, name) {
    return new Card(link, name, openPopupZoom, '.cards__list').generateCard()
};

function addNewCard(card) {
    cards.prepend(card);
};

function submitFormHandlerAdd(evt) {
    evt.preventDefault();
    const newItem = {
        link: itemImage.value,
        name: itemTitle.value,
    }
    addNewCard(createNewCard(newItem.link, newItem.name))
    closePopup(popupAdd)
    formAdd.reset();
    addFormValidation.deactivetingSubmit();
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