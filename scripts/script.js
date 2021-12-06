const edit = document.querySelector('.profile__button');
const show = document.querySelector('.popup');
const closeModal = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__container');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__spec');

function openModal() {
    show.classList.remove('popup');
    profileName = nameInput;
    profileJob = jobInput;
}

function close() {
    show.classList.add('popup');
}

function submitFormHandler(evt) {
    evt.preventDefault();
    const nameInput = document.querySelector('.popup__text-name').value;
    const jobInput = document.querySelector('.popup__text-spec').value;
    profileName.textContent = nameInput;
    profileJob.textContent = jobInput;
    close();
}

edit.addEventListener('click', openModal);
closeModal.addEventListener('click', close);
formElement.addEventListener('submit', submitFormHandler);