import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { initialCards, editButton, popupEdit, popupZoom, popupAdd, buttonClosePopupAdd, buttonClosePopupEdit, buttonClosePopupZoom, formEdit, profileName, profileJob, nameInput, jobInput, addButton, cards, itemImage, itemTitle, formAdd, popupImage, popupSubtitle, selectorsConfiguration } from '../utils/constatnts.js'

const addFormValidation = new FormValidator(selectorsConfiguration, popupAdd);

addFormValidation.enableValidation();

const editFormValidation = new FormValidator(selectorsConfiguration, popupEdit);

editFormValidation.enableValidation();
/*
const popupWithZoom = new PopupWithImage('.popup')
popupWithZoom.setEventListeners();

const initialItems = new Section({
    items: initialCards,
    renderer: (item) => {
        const newItem = new Card(item, popupWithZoom.openPopupZoom, '.cards__list').generateCard();
        initialItems.addItem(newItem);
    }
}, '.cards');
*/

initialCards.forEach((data) => {
    addNewCard(createNewCard(data.link, data.name))
});

function createNewCard(link, name) {
    return new Card(link, name, openPopupZoom, '.cards__list').generateCard()
};

function addNewCard(card) { // перенесена в Section
    cards.prepend(card);
};

/*
const newUserInfo = new UserInfo('.profile__name', '.profile__spec')
  
    function setInputValue() {
        nameInput.value = newUserInfo.getUserInfo().name;
        jobInput.value = newUserInfo.getUserInfo().info;
    }

    function setUserInfo(data) {
        newUserInfo.setUserInfo(data)
    };
    console.log();
    const popupFormEdit = new PopupWithForm('popup__form_type_edit', (data) => {
        setUserInfo(data)
    });
    editButton.addEventListener('click', () => {
        setInputValue();
        popupFormEdit.open();
    })

    popupFormEdit.setEventListeners();
    */





function submitFormHandlerAdd(evt) { // перенесено
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

function submitFormHandlerEdit(evt) { // перенесено
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    formEdit.reset()
    closePopup(popupEdit)
};

function openEditModal() { //
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

function openPopup(popup) { // перенесено в Popup
    popup.classList.add('popup_type_opened');
    document.addEventListener('mousedown', closeByOverlay)
    document.addEventListener('keydown', closeByEscapeButton)
};

function closePopup(popup) { // перенесено в Popup
    popup.classList.remove('popup_type_opened')
    document.removeEventListener('mousedown', closeByOverlay)
    document.removeEventListener('keydown', closeByEscapeButton)
}

function closeByOverlay(evt) { // перенесено в Popup
    const overlay = document.querySelector('.popup_type_opened')
    if (evt.target === overlay) {
        closePopup(overlay)
        formEdit.reset()
    }
}

function closeByEscapeButton(evt) { // перенесено в Popup
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