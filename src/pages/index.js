import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import './index.css'
import { initialCards, editButton, popupEdit, sectionCards, cardsList, popupZoom, popupAdd, popupEditSelector, popupAddSelector, profileNameSelector, profileInfoSelector, nameInput, jobInput, addButton, cards, selectorsConfiguration } from '../utils/constatnts.js'

const addFormValidation = new FormValidator(selectorsConfiguration, popupAdd);
addFormValidation.enableValidation();

const editFormValidation = new FormValidator(selectorsConfiguration, popupEdit);
editFormValidation.enableValidation();

const popupWithZoom = new PopupWithImage(popupZoom)
popupWithZoom.setEventListeners();


const initialItems = new Section({
    items: initialCards,
    renderer: (item) => {
        initialItems.addItem(createNewCard(item));
    }
}, sectionCards);
initialItems.renderItems();

function handleCardClick(link, name) {
    popupWithZoom.openPopupZoom(link, name)
};

function createNewCard(data) {
    const newCard = new Card(data, handleCardClick, cardsList)
    return newCard.generateCard()
};

const userInfom = new UserInfo(profileNameSelector, profileInfoSelector)

function setInputValue() {
    nameInput.value = userInfom.getUserInfo().name;
    jobInput.value = userInfom.getUserInfo().info;
}

const popupFormEdit = new PopupWithForm(popupEditSelector, (data) => {
    userInfom.setUserInfo(data)
});
popupFormEdit.setEventListeners();

editButton.addEventListener('click', () => {
    setInputValue();
    popupFormEdit.open();
})

const popupFormAdd = new PopupWithForm(popupAddSelector, (data) => {
    addItem(data)
})

addButton.addEventListener('click', () => {
    addFormValidation.resetValidation();
    popupFormAdd.open()
});

popupFormAdd.setEventListeners();