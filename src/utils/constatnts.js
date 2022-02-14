export const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const editButton = document.querySelector('.profile__button');
export const popupEdit = document.querySelector('#popupEdit');
export const popupAdd = document.querySelector('#popupAdd');
export const buttonClosePopupAdd = document.querySelector('.popup__close_add');
export const buttonClosePopupEdit = document.querySelector('.popup__close_edit');
export const buttonClosePopupZoom = document.querySelector('.popup__close_zoom');
export const formEdit = document.querySelector('.popup__form');
export const cards = document.querySelector('.cards');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__spec');
export const nameInput = document.querySelector('.popup__input_name');
export const jobInput = document.querySelector('.popup__input_job');
export const addButton = document.querySelector('.profile__add');
export const itemImage = document.querySelector('.popup__input_image');
export const itemTitle = document.querySelector('.popup__input_title');
export const formAdd = document.querySelector('.popup__form_type_add');
export const popupImageSelector = '.popup__image';
export const popupSubtitleSelector = '.popup__subtitle';
export const selectorsConfiguration = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    errorClass: 'popup__error_visible',
    inputErrorClass: 'popup__input_error',
};
export const popupZoom = '.popup_type_zoom';
export const sectionCards = '.cards';
export const cardsList = '.cards__list';
export const profileNameSelector = '.profile__name';
export const profileInfoSelector = '.profile__spec';
export const popupEditSelector = '.popup_type_edit';
export const popupAddSelector = '.popup_type_add';