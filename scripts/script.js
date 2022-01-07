const editButton = document.querySelector('.profile__button');
const show = document.getElementById('popupEdit');
const closeModal = show.querySelector('.popup__close');
const formEdit = document.querySelector('.popup__container');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__spec');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const addButton = document.querySelector('.profile__add');
const addModal = document.getElementById('popupAdd');
const cards = document.querySelector('.cards');
const initialContent = document.querySelector('.cards__list').content;
const closeAddModal = document.getElementById('addClose');
const ItemImage = document.querySelector('.popup__text_type_image');
const ItemTitle = document.querySelector('.popup__text_type_title');
const formAdd = document.querySelector('.popup__container_type_add');
const popupImage = document.querySelector('.popup__image');
const popupZoom = document.getElementById('popupImage')
let popupSubtitle = document.querySelector('.popup__subtitle')
const popupZoomClose = document.getElementById('popupImageClose')
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

initialCards.forEach(function(card) {
    initialData(card)
});

function initialData(card) {
    const initialCard = initialContent.querySelector('.cards__conteiner').cloneNode(true);
    const initialZoom = initialCard.querySelector('.cards__image')
    initialCard.querySelector('.cards__image').src = card.link
    initialCard.querySelector('.cards__title').textContent = card.name;
    initialCard.querySelector('.cards__image').alt = card.name;

    function openPopupZoom() {
        popupZoom.classList.remove('popup');
        popupImage.src = initialCard.querySelector('.cards__image').src;
        popupImage.alt = initialCard.querySelector('.cards__title').textContent;
        popupSubtitle.textContent = initialCard.querySelector('.cards__title').textContent;
    }
    initialZoom.addEventListener('click', openPopupZoom);
    cards.prepend(initialCard)
};

function submitFormHandlerAdd(evt) {
    evt.preventDefault();
    const newItem = initialContent.querySelector('.cards__conteiner').cloneNode(true);
    const newItemZoom = newItem.querySelector('.cards__image');
    newItem.querySelector('.cards__title').textContent = ItemTitle.value;
    newItem.querySelector('.cards__image').src = ItemImage.value;
    newItem.querySelector('.cards__image').alt = ItemTitle.value;

    function ItemZoom() {
        popupZoom.classList.remove('popup');
        popupImage.src = newItem.querySelector('.cards__image').src;
        popupImage.alt = newItem.querySelector('.cards__title').textContent;
        popupSubtitle.textContent = newItem.querySelector('.cards__title').textContent;
    }
    newItemZoom.addEventListener('click', ItemZoom);
    cards.prepend(newItem);
    formAdd.reset();
};

function cardLike(evt) {
    const eventTarget = evt.target
    eventTarget.classList.toggle('cards__emotion_active')
}

function cardDelete(evt) {
    const eventTarget = evt.target
    eventTarget.closest('.cards__conteiner').remove();
}

function closePopup(evt) {
    const eventTarget = evt.target
    eventTarget.closest('.popup_opened').classList.add('popup')
}

function submitFormHandlerEdit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closeEditModal();
};

function openEditModal() {
    show.classList.remove('popup');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

function openAddModal() {
    addModal.classList.remove('popup');
};

editButton.addEventListener('click', openEditModal);
formEdit.addEventListener('submit', submitFormHandlerEdit);
addButton.addEventListener('click', openAddModal);
formAdd.addEventListener('submit', submitFormHandlerAdd);