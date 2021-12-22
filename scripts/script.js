const edit = document.querySelector('.profile__button');
const show = document.querySelector('.popup');
const closeModal = show.querySelector('.popup__close');
const formElement = document.querySelector('.popup__container');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__spec');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const formContainer = document.querySelector('.cards')
const container = formContainer.querySelector('.cards__conteiner')
const addButton = document.querySelector('.profile__add')
const cards = document.querySelector('.cards')
const initialContent = document.querySelector('.cards__list').content;


/*addButton.addEventListener('click', e => {
        e.preventDefault()
        const newItem = container.cloneNode(false).content;
        const newItemTitle = ;
        const newItemPicture = ;

        console.log({ newItem });
    }); */



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
    cards.append(initialCard)
}

// НАЧАТЬ С ПЕРЕЧИТЫВАНИЯ createElement  



function openModal() {
    show.classList.remove('popup');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function close() {
    show.classList.add('popup');
}

function submitFormHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    close();
}

edit.addEventListener('click', openModal);
closeModal.addEventListener('click', close);
formElement.addEventListener('submit', submitFormHandler);