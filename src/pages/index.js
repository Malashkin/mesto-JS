import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
// import './index.css'
import { initialCards, editButton, popupEdit, popupZoom, popupAdd, buttonClosePopupAdd, buttonClosePopupEdit, buttonClosePopupZoom, formEdit, profileName, profileJob, nameInput, jobInput, addButton, cards, itemImage, itemTitle, formAdd, popupImage, popupSubtitle, selectorsConfiguration } from '../utils/constatnts.js'

const addFormValidation = new FormValidator(selectorsConfiguration, popupAdd);
addFormValidation.enableValidation();

const editFormValidation = new FormValidator(selectorsConfiguration, popupEdit);
editFormValidation.enableValidation();

const popupWithZoom = new PopupWithImage('.popup_type_zoom')
popupWithZoom.setEventListeners();


const initialItems = new Section({
    items: initialCards,
    renderer: (item) => {
        initialItems.addItem(createNewCard(item));
    }
}, '.cards');
initialItems.renderItems();

function handleCardClick(link, name) {
    popupWithZoom.openPopupZoom(link, name)
};

function createNewCard(data) {
    const newCard = new Card(data, handleCardClick, '.cards__list')
    return newCard.generateCard()
};


const UserInfom = new UserInfo('.profile__name', '.profile__spec')

function setInputValue() {
    nameInput.value = UserInfom.getUserInfo().name;
    jobInput.value = UserInfom.getUserInfo().info;
}

const popupFormEdit = new PopupWithForm('.popup_type_edit', (data) => {
    UserInfom.setUserInfo(data)
});
popupFormEdit.setEventListeners();

editButton.addEventListener('click', () => {
    setInputValue();
    popupFormEdit.open();
})

const popupFormAdd = new PopupWithForm('.popup_type_add', (data) => {
    cards.prepend(createNewCard(data))
    console.log(data);
})

addButton.addEventListener('click', () => popupFormAdd.open());
popupFormAdd.setEventListeners();