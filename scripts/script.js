const editButton = document.querySelector('.profile__button');
const editModal = document.getElementById('popupEdit');
const closeModalEdit = editModal.querySelector('.popup__close');
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
const elementCard = document.querySelector('.cards__conteiner');

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
    cards.prepend(card);
}

function cardForEach(array) {
    array.forEach((item) => addCard(initialData(item)))
};

cardForEach(initialCards);


const initialZoom = document.querySelector('.cards__image')
const initialSubtitle = cards.querySelector('.cards__title')

function openPopupZoom() {
    popupZoom.classList.remove('popup');
    popupImage.src = initialZoom.src;
    popupSubtitle.textContent = initialSubtitle.textContent
}
console.log(initialZoom.hasAttribute('src'));
initialZoom.addEventListener('click', console.log('fuck'))

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


function submitFormHandlerAdd(evt) {
    evt.preventDefault();
    const newItem = initialContent.querySelector('.cards__conteiner').cloneNode(true);
    const likeButton = newItem.querySelector('.cards__emotion');
    const newItemDelete = newItem.querySelector('.cards__trashicon');
    const newItemZoom = newItem.querySelector('.cards__image');
    newItem.querySelector('.cards__title').textContent = ItemTitle.value;
    newItem.querySelector('.cards__image').src = ItemImage.value;
    newItem.querySelector('.cards__image').alt = ItemTitle.value;
    /* likeButton.addEventListener('click', function newLike() {
        likeButton.classList.toggle('cards__emotion_active')
    });*/
    newItemDelete.addEventListener('click', function newItemDel() {
        newItemDelete.closest('.cards__conteiner').remove();
    })

    function ItemZoom() {
        popupZoom.classList.remove('popup');
        popupImage.src = newItem.querySelector('.cards__image').src;
        popupImage.alt = newItem.querySelector('.cards__title').textContent;
        popupSubtitle.textContent = newItem.querySelector('.cards__title').textContent;
    }
    newItemZoom.addEventListener('click', ItemZoom);
    cards.prepend(newItem);
    formAdd.reset();
    initialData(newItem)
    closeAddedModal()
};

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

function openAddModal() {
    addModal.classList.remove('popup');
};

function closeAddedModal() {
    addModal.classList.add('popup');
};

function closeZoomPopup() {
    popupZoom.classList.add('popup');
}

editButton.addEventListener('click', openEditModal);
closeModalEdit.addEventListener('click', closeEditModal);
formEdit.addEventListener('submit', submitFormHandlerEdit);
addButton.addEventListener('click', openAddModal);
closeAddModal.addEventListener('click', closeAddedModal);
formAdd.addEventListener('submit', submitFormHandlerAdd);
popupZoomClose.addEventListener('click', closeZoomPopup);