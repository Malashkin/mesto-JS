const editButton = document.querySelector('.profile__button');
const show = document.getElementById('popupEdit');
const closeModal = show.querySelector('.popup__close');
const formEdit = document.querySelector('.popup__container');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__spec');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const formContainer = document.querySelector('.cards')
const addButton = document.querySelector('.profile__add')
const addButtonSave = document.getElementById('saveAdded')
const addModal = document.getElementById('popupAdd')
const cards = document.querySelector('.cards')
const submitAdd = document.getElementById('saveAdded')
const initialContent = document.querySelector('.cards__list').content;
const initialCardLink = document.querySelector('.cards__image');
const initialCardTitle = document.querySelector('.cards__title');
const closeAddModal = document.getElementById('addClose');
const ItemImage = document.querySelector('.popup__text_type_image');
const ItemTitle = document.querySelector('.popup__text_type_title');
const formAdd = document.querySelector('.popup__container_type_add')
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
})

function initialData(card) {
    const initialCard = initialContent.querySelector('.cards__conteiner').cloneNode(true);
    initialCard.querySelector('.cards__image').src = card.link
    initialCard.querySelector('.cards__title').textContent = card.name;
    cards.prepend(initialCard)
}

function submitFormHandlerAdd(evt) {
    evt.preventDefault();
    const newItem = initialContent.querySelector('.cards__conteiner').cloneNode(true);
    newItem.querySelector('.cards__title').textContent = ItemTitle.value;
    newItem.querySelector('.cards__image').src = ItemImage.value;
    newItem.querySelector('.cards__image').alt = ItemTitle.value;
    cards.prepend(newItem)
    formAdd.reset()
    closeAddedModal()
    console.log({ newItem });
}


function openEditModal() {
    show.classList.remove('popup');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closeEditModal() {
    show.classList.add('popup');
}

function submitFormHandlerEdit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closeEditModal();
}

function openAddModal() {
    addModal.classList.remove('popup');
}

function closeAddedModal() {
    addModal.classList.add('popup');
}



editButton.addEventListener('click', openEditModal);
closeModal.addEventListener('click', closeEditModal);
formEdit.addEventListener('submit', submitFormHandlerEdit);
addButton.addEventListener('click', openAddModal);
closeAddModal.addEventListener('click', closeAddedModal);
formAdd.addEventListener('submit', submitFormHandlerAdd)