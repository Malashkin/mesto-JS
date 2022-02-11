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

const popupWithZoom = new PopupWithImage('.popup')
popupWithZoom.setEventListeners();

const initialItems = new Section({
    items: initialCards,
    renderer: (data) => {
        initialItems.addItem(createNewCard(data));
    }
}, '.cards');


function createNewCard(data) {
    const newCard = new Card(data, openPopupZoom, '.cards__list')
    return newCard.generateCard()
};


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

const popupFormAdd = new PopupWithForm('.popup__form_type_add', (data) => {
    cards.prepend(generateCard(data))
})

addButton.addEventListener('click', open(popupFormAdd));

popupFormAdd.setEventListeners()