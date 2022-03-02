import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import './index.css'
import { editButton, popupEdit, delButton, popupDeleteSelector, sectionCards, cardsList, cardList, popupZoom, popupAdd, popupEditSelector, popupAddSelector, profileNameSelector, profileInfoSelector, nameInput, jobInput, addButton, selectorsConfiguration, cardsListDefault } from '../utils/constatnts.js'
import Api from '../components/Api.js';
import PopupDelete from '../components/PopupDelete.js';
let userId
const addFormValidation = new FormValidator(selectorsConfiguration, popupAdd);
addFormValidation.enableValidation();

const editFormValidation = new FormValidator(selectorsConfiguration, popupEdit);
editFormValidation.enableValidation();

const popupWithZoom = new PopupWithImage(popupZoom)
popupWithZoom.setEventListeners();

const popupDelete = new PopupDelete(popupDeleteSelector);
popupDelete.setEventListeners();

function handleCardDelete(card) {
    popupDelete.open();
    popupDelete.handelSubmit(() => {
        cardsApi.deleteCard(card.id)
            .then((data) => {
                card.deleteElement(data)
            })
            .then(() => {
                popupDelete.close()
            })
    })

}

function handleCardClick(link, name) {
    popupWithZoom.openPopupZoom(link, name)
};

function createNewCard(data) {
    const defaultCard = new Card(data, cardsList, userId, handleCardClick, handleLikeClick, handleCardDelete)
    return defaultCard.generateCard()
};
const userInfo = new UserInfo(profileNameSelector, profileInfoSelector)

function setUserInfo(data) {
    userInfo.setUserInfo(data);
}

function editUserInfo(data) {
    apiUserInfo.editUserInfo(data)
        .then(data => {
            setUserInfo(data);
        })
        .finally(() => {
            popupFormEdit.close();
        })
};

function updateFormValue() {
    userInfo.getUserInfo();
}

function setInputValue() {
    nameInput.value = userInfo.getUserInfo().name;
    jobInput.value = userInfo.getUserInfo().info;
}


const popupFormEdit = new PopupWithForm(popupEditSelector, editUserInfo)

popupFormEdit.setEventListeners();



const popupFormAdd = new PopupWithForm(popupAddSelector, saveCard)

popupFormAdd.setEventListeners();

const cardsApi = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort36/cards',
    headers: {
        authorization: 'b63003c8-9150-4e29-8d9a-6e331bb26d1d',
        'Content-Type': 'application/json'
    }
});
cardsApi.getInitialCards()
    .then(data => {
        const initialCards = new Section({
            items: data,
            renderer: (item) => {
                initialCards.addItem(createNewCard(item));
            }
        }, sectionCards);
        initialCards.renderItems();
    });

const apiUserInfo = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort36/users/me',
    headers: {
        authorization: 'b63003c8-9150-4e29-8d9a-6e331bb26d1d',
        'Content-Type': 'application/json'
    }
});

apiUserInfo.getUserInfo()
    .then((data) => {
        userId = data._id
        setUserInfo(data)
    })
    .catch((err) => console.log(err))

const apiNewCard = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort36/cards ',
    headers: {
        authorization: 'b63003c8-9150-4e29-8d9a-6e331bb26d1d',
        'Content-Type': 'application/json'
    }
});
const apiLike = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort36/cards',
    headers: {
        authorization: "b63003c8-9150-4e29-8d9a-6e331bb26d1d",
        'Content-Type': 'application/json'
    }
})

function saveCard(data) {
    apiNewCard.createCardApi(data)
        .then(data => {
            cardList.prepend(createNewCard(data))
        })
        .finally(() => {
            popupFormAdd.close()
        })
}



editButton.addEventListener('click', () => {
    popupFormEdit.open();
    setInputValue(updateFormValue);
    editFormValidation.resetValidation();
})

addButton.addEventListener('click', () => {
    addFormValidation.resetValidation();
    popupFormAdd.open()
});

function handleLikeClick(card) {
    if (card.isLiked()) {
        apiLike.deleteCardLike(card.id)
            .then(cardData => {
                card.setLikes(cardData.likes)
                console.log(cardData.likes);
            })
    } else {
        apiLike.putCardLike(card.id)
            .then(cardData => {
                card.setLikes(cardData.likes)
                console.log(cardData.likes);
            })
    }
}