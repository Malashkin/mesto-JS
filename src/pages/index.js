import './index.css'
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupDelete from '../components/PopupDelete.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import { editButton, popupEdit, popupAvatar, editAvatarButton, popupAvatarSelector, profileAvatar, popupDeleteSelector, sectionCards, cardList, popupZoom, popupAdd, popupEditSelector, popupAddSelector, profileNameSelector, profileInfoSelector, nameInput, jobInput, addButton, selectorsConfiguration } from '../utils/constatnts.js'

let userId

const popupWithZoom = new PopupWithImage(popupZoom)
popupWithZoom.setEventListeners();

const popupFormEdit = new PopupWithForm(popupEditSelector, editUserInfo)
popupFormEdit.setEventListeners();

const popupFormAdd = new PopupWithForm(popupAddSelector, saveCard)
popupFormAdd.setEventListeners();

const popupDelete = new PopupDelete(popupDeleteSelector);
popupDelete.setEventListeners();

const popupAvatarForm = new PopupWithForm(popupAvatarSelector, editAvatar)
popupAvatarForm.setEventListeners();

const addFormValidation = new FormValidator(selectorsConfiguration, popupAdd);
addFormValidation.enableValidation();

const editFormValidation = new FormValidator(selectorsConfiguration, popupEdit);
editFormValidation.enableValidation();

const avatarFormValidation = new FormValidator(selectorsConfiguration, popupAvatar)
avatarFormValidation.enableValidation();

const userInfo = new UserInfo(profileNameSelector, profileInfoSelector, profileAvatar)

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort36/',
    headers: {
        authorization: "b63003c8-9150-4e29-8d9a-6e331bb26d1d",
        'Content-Type': 'application/json'
    }
});


const cardsList = new Section({
    renderer: (items) => {
        const card = createNewCard(items);
        cardsList.addItem(card);
    },
}, sectionCards);

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([data, items]) => {
        userId = data._id;
        userInfo.setUserInfo(data);
        cardsList.renderItems(items);
    })
    .catch((err) => {
        console.log(err);
    });

function createNewCard(data) {
    const newCard = new Card(data, userId, cardList, handleCardClick, handleLikeClick, handleCardDelete)
    return newCard.generateCard()
};

function editUserInfo(data) {
    popupFormEdit.loadingConduction(true, 'Сохранить')
    api.editUserInfo(data)
        .then(data => {
            userInfo.setUserInfo(data)
            popupFormEdit.close()
        })
        .finally(() => {
            popupFormEdit.loadingConduction(false, 'Сохранить')
        })
};

function handleCardDelete(card) {
    popupDelete.open();
    popupDelete.handelSubmit(() => {
        api.deleteCard(card.id)
            .then((data) => {
                card.deleteElement(data)
            })
            .then(() => {
                popupDelete.close()
            })
    })
};

function handleCardClick(link, name) {
    popupWithZoom.openPopupZoom(link, name)
};

function handleLikeClick(card) {
    if (card.isLiked()) {
        api.deleteCardLike(card.id)
            .then(cardData => {
                card.setLikes(cardData.likes)
            })
    } else {
        api.putCardLike(card.id)
            .then(cardData => {
                card.setLikes(cardData.likes)
            })
    }
};

function saveCard(data) {
    popupFormAdd.loadingConduction(true, 'Сохранить')
    api.createCardApi(data)
        .then(data => {
            cardsList.addItem(createNewCard(data))
            popupFormAdd.close()
        })
        .finally(() => {
            popupFormAdd.loadingConduction(false, 'Сохранить')
        })
};

function setInputValue() {
    nameInput.value = userInfo.getUserInfo().name;
    jobInput.value = userInfo.getUserInfo().info;
};

function editAvatar(data) {
    popupAvatarForm.loadingConduction(true, 'Сохранить')
    api.editAvatar(data)
        .then((data) => {
            userInfo.setUserInfo(data)
            popupAvatarForm.close();
        })
        .finally(() => {
            popupAvatarForm.loadingConduction(false, 'Сохранить')
        })
};

editButton.addEventListener('click', () => {
    popupFormEdit.open();
    setInputValue(userInfo.getUserInfo());
    editFormValidation.resetValidation();
});

addButton.addEventListener('click', () => {
    popupFormAdd.open()
    addFormValidation.resetValidation();
});
editAvatarButton.addEventListener('click', () => {
    popupAvatarForm.open();
    avatarFormValidation.resetValidation();
});