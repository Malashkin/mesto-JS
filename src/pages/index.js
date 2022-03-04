import './index.css'
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupDelete from '../components/PopupDelete.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import { editButton, popupEdit, popupAvatar, editAvatarButton, popupAvatarSelector, profileAvatar, popupDeleteSelector, sectionCards, cardsList, cardList, popupZoom, popupAdd, popupEditSelector, popupAddSelector, profileNameSelector, profileInfoSelector, nameInput, jobInput, addButton, selectorsConfiguration } from '../utils/constatnts.js'

let userId

const addFormValidation = new FormValidator(selectorsConfiguration, popupAdd);
addFormValidation.enableValidation();

const editFormValidation = new FormValidator(selectorsConfiguration, popupEdit);
editFormValidation.enableValidation();

const avatarFormValidation = new FormValidator(selectorsConfiguration, popupAvatar)
avatarFormValidation.enableValidation();

const popupWithZoom = new PopupWithImage(popupZoom)
popupWithZoom.setEventListeners();

const popupFormEdit = new PopupWithForm(popupEditSelector, editUserInfo)
popupFormEdit.setEventListeners();

const popupFormAdd = new PopupWithForm(popupAddSelector, saveCard)
popupFormAdd.setEventListeners();

const popupDelete = new PopupDelete(popupDeleteSelector);
popupDelete.setEventListeners();

const popupAvatarForm = new PopupWithForm(popupAvatarSelector, (data) => { editAvatar(data) })
popupAvatarForm.setEventListeners();

const userInfo = new UserInfo(profileNameSelector, profileInfoSelector, profileAvatar)

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort36/',
    headers: {
        authorization: "b63003c8-9150-4e29-8d9a-6e331bb26d1d",
        'Content-Type': 'application/json'
    }
});

function createNewCard(data) {
    const defaultCard = new Card(data, cardsList, userId, handleCardClick, handleLikeClick, handleCardDelete)
    return defaultCard.generateCard()
};

api.getInitialCards()
    .then(data => {
        const initialCards = new Section({
            items: data,
            renderer: (item) => {
                initialCards.addItem(createNewCard(item));
            }
        }, sectionCards);
        initialCards.renderItems();
    });

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
            cardList.prepend(createNewCard(data))
        })
        .finally(() => {
            popupFormAdd.close()
        })
        .finally(() => {
            popupFormAdd.loadingConduction(false, 'Сохранить')
        })
};

function setUserInfo(data) {
    userInfo.setUserInfo(data)
};

function editUserInfo(data) {
    popupFormEdit.loadingConduction(true, 'Сохранить')
    api.editUserInfo(data)
        .then(data => {
            setUserInfo(data)
        })
        .finally(() => {
            popupFormEdit.close()
            popupFormEdit.loadingConduction(false, 'Сохранить')
        })
};

function setInputValue() {
    nameInput.value = userInfo.getUserInfo().name;
    jobInput.value = userInfo.getUserInfo().info;
};

api.getUserInfo()
    .then((data) => {
        userId = data._id
        setUserInfo(data)
    })
    .catch((err) => {
        console.log(err);
    });

function editAvatar(data) {
    popupAvatarForm.loadingConduction(true, 'Сохранить')
    api.editAvatar({ avatar: data.link })
        .then((data) => {
            setUserInfo(data)
        })
        .finally(() => {
            popupAvatarForm.close();
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