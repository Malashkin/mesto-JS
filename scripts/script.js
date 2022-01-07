const editButton = document.querySelector('.profile__button');
const editModal = document.querySelector('#popupEdit');
const closeModalEdit = editModal.querySelector('.popup__close');
const formEdit = document.querySelector('.popup__container_type_edit');
const formAdd = document.querySelector('.popup__container_type_add')
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__spec');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const addButton = document.querySelector('.profile__add');
const addModal = document.querySelector('#popupAdd');
const cards = document.querySelector('.cards');
const initialContent = document.querySelector('.cards__list').content;
const initialZoom = document.querySelector('.cards__image')
const initialSubtitle = cards.querySelector('.cards__title')
const closeAddModal = document.querySelector('#addClose');
const ItemImage = document.querySelector('.popup__text_type_image');
const ItemTitle = document.querySelector('.popup__text_type_title');
const popupImage = document.querySelector('.popup__image');
const popupZoom = document.querySelector('#popupImage')
const popupSubtitle = document.querySelector('.popup__subtitle')
const popupZoomClose = document.querySelector('#popupImageClose')
const elementCard = document.querySelector('.cards__conteiner');
const cardList = document.querySelector('.cards__list').content



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

function addCard(card) {
    cardList.prepend(card);
}

function cardForEach(array) {
    array.forEach((card) => addNewCard(addCard(card)))
};

/*
function openPopupZoom() {
    popupZoom.classList.remove('popup');
    popupImage.src = initialZoom.src;
    popupSubtitle.textContent = initialSubtitle.textContent
}


function initialData(card) {
    const initialCard = initialContent.querySelector('.cards__conteiner').cloneNode(true);
    const initialDelete = initialCard.querySelector('.cards__trashicon');;
    initialCard.querySelector('.cards__image').src = card.link
    initialCard.querySelector('.cards__title').textContent = card.name;
    initialCard.querySelector('.cards__image').alt = card.name;
    initialDelete.addEventListener('click', function initialDel() {
        initialDelete.closest('.cards__conteiner').remove();
    });

    return initialCard
}



const initialLike = document.querySelectorAll('.cards__emotion');

initialLike.forEach(function(e) {
    e.addEventListener('click', function(evt) {
        evt.target.classList.toggle('cards__emotion_active')
    })
})
*/
function addNewCard(card) {
    const cardItem = cardList.querySelector('.cards__conteiner').cloneNode(true)
    const cardsImage = cardItem.querySelector('.cards__image')
    const cardsTitle = cardItem.querySelector('.cards__title')
    const cardsLike = cardItem.querySelector('.cards__emotion')
    const cardsDel = cardItem.querySelector('.cards__trashicon')
    cardsImage.src = card.link
    cardsImage.src = card.alt
    cardsTitle.textContent = card.name
    cardsLike.addEventListener('click', addLike)
    cardsDel.addEventListener('click', cardDel)

    return card
}
addCard(addNewCard(initialCards))

function addLike(evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('cards__emotion_active')
}

function cardDel(evt) {
    const eventTarget = evt.target
    eventTarget.closest('.cards__conteiner').remove()
}

function Zoom(title, link) {
    popupSubtitle.textContent = title
    popupImage.src = link
    openModal()
}

function submitFormHandlerAdd(evt) {
    evt.preventDefault()
    const card = {
        name: popupImage.value,
        link: popupImage.value,
    };
    addNewCard(addCard(card))
    closeAddedModal()
    formAdd.reset();
}

function submitFormHandlerEdit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closeEditModal();
};

function openEditModal() {
    editModal.classList.remove('popup');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

function closeEditModal() {
    editModal.classList.add('popup');
};

function openModal() {
    addModal.classList.remove('popup');
};

function closeAddedModal() {
    addModal.classList.add('popup');
};

function closeZoomPopup() {
    popupZoom.classList.add('popup');
}

addCard(initialCards)

editButton.addEventListener('click', openEditModal);
closeModalEdit.addEventListener('click', closeEditModal);
formEdit.addEventListener('submit', submitFormHandlerEdit);
formAdd.addEventListener('submit', submitFormHandlerAdd)
addButton.addEventListener('click', openModal);
closeAddModal.addEventListener('click', closeAddedModal);
popupZoomClose.addEventListener('click', closeZoomPopup);
//cardsZoom.addEventListener('click', () => Zoom(card.name, card.link))