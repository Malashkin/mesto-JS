import { Card } from '../components/Card.js';
import { NewCard } from '../components/NewCard.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDelete from '../components/PopupDelete.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import './index.css'
import { initialCards, editButton, popupEdit, delButton, popupDeleteSelector, sectionCards, cardsListUser, cardsListDefault, popupZoom, popupAdd, popupEditSelector, popupAddSelector, profileNameSelector, profileInfoSelector, nameInput, jobInput, addButton, selectorsConfiguration } from '../utils/constatnts.js'

const addFormValidation = new FormValidator(selectorsConfiguration, popupAdd);
addFormValidation.enableValidation();

const editFormValidation = new FormValidator(selectorsConfiguration, popupEdit);
editFormValidation.enableValidation();

const popupWithZoom = new PopupWithImage(popupZoom)
popupWithZoom.setEventListeners();


const newItem = new Section({
    items: initialCards,
    renderer: (item) => {
        newItem.addItem(createDefaultCard(item));
    }
}, sectionCards);
newItem.renderItems();

function handleCardClick(link, name) {
    popupWithZoom.openPopupZoom(link, name)
};

function createDefaultCard(data) {
    const defaultCard = new Card(data, handleCardClick, cardsListDefault)
    return defaultCard.generateCard()
};

function createUserCard(data) {
    const UserCard = new NewCard(data, handleCardClick, cardsListUser)
    return UserCard.generateCard()
}

const userInfom = new UserInfo(profileNameSelector, profileInfoSelector)

function setInputValue() {
    const userInformation = userInfom.getUserInfo();
    nameInput.value = userInformation.name;
    jobInput.value = userInformation.info;
}

const popupFormEdit = new PopupWithForm(popupEditSelector, (data) => {
    userInfom.setUserInfo(data)
});
popupFormEdit.setEventListeners();

editButton.addEventListener('click', () => {
    setInputValue();
    popupFormEdit.open();
})

const popupFormAdd = new PopupWithForm(popupAddSelector, (item) => {
    newItem.addItem(createUserCard(item));
})

addButton.addEventListener('click', () => {
    addFormValidation.resetValidation();
    popupFormAdd.open()
});

popupFormAdd.setEventListeners();

const popupDelete = new PopupDelete(popupDeleteSelector, delButton)
popupDelete.setEventListeners()