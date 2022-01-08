const editButton = document.querySelector('.profile__button');
const popupEdit = document.querySelector('#popupEdit');
const popupZoom = document.querySelector('#popupZoom');
const popupAdd = document.querySelector('#popupAdd');
const buttonClosePopupAdd = document.querySelector('.popup__close_add');
const buttonClosePopupEdit = document.querySelector('.popup__close_edit');
const buttonClosePopupZoom = document.querySelector('.popup__close_zoom');
const buttonLike = document.querySelector('.cards__emotion');
const formEdit = document.querySelector('.popup__container');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__spec');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const addButton = document.querySelector('.profile__add');
const cards = document.querySelector('.cards__list');
const content = document.querySelector('.cards__list').content;
const closeAddModal = document.querySelector('#addClose');
const ItemImage = document.querySelector('.popup__text_type_image');
const ItemTitle = document.querySelector('.popup__text_type_title');
const formAdd = document.querySelector('.popup__container_type_add');
const popupImage = document.querySelector('.popup__image');
const popupSubtitle = document.querySelector('.popup__subtitle')
const popupZoomClose = document.querySelector('#popupImageClose')
const initialCards = [{
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



function createNewCard(card) {
    const cardItem = content.querySelector('.cards__conteiner').cloneNode(true);
    const cardsImageClone = cardItem.querySelector('.cards__image');
    const cardButtonLike = cardItem.querySelector('.cards__emotion');
    const cardButtonDelete = cardItem.querySelector('.cards__trashicon');
    cardsImageClone.src = card.link;
    cardsImageClone.alt = card.name;
    cardItem.querySelector('.cards__title').textContent = card.name;
    cardButtonLike.addEventListener('click', cardLike);
    cardButtonDelete.addEventListener('click', cardDelete);
    return cardItem;
};

function addNewCard(card) {
    cards.prepend(card);
};


addNewCard(createNewCard(initialCards))

function submitFormHandlerAdd(evt) {
    evt.preventDefault();
    const newCard = {
        link: ItemImage.value,
        name: ItemTitle.value,
    }
    addNewCard(createNewCard(newCard))
    closePopup(popupAdd)
    formAdd.reset();

};


function cardLike(evt) {
    evt.target.classList.toggle('cards__emotion_active')
}

function cardDelete(evt) {
    evt.target.closest('.cards__conteiner').remove();
}


function submitFormHandlerEdit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEdit)
};

function openEditModal() {
    popupEdit.classList.remove('popup');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

function openAddModal() {
    popupAdd.classList.remove('popup');
};

function closePopup(popup) {
    popup.classList.add('popup')
}

buttonClosePopupAdd.addEventListener('click', () => closePopup(popupAdd));
buttonClosePopupEdit.addEventListener('click', () => closePopup(popupEdit));
buttonClosePopupZoom.addEventListener('click', () => closePopup(popupZoom));
editButton.addEventListener('click', openEditModal);
formEdit.addEventListener('submit', submitFormHandlerEdit);
addButton.addEventListener('click', openAddModal);
formAdd.addEventListener('submit', submitFormHandlerAdd);