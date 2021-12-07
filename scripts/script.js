const edit = document.querySelector('.profile__button');
const show = document.querySelector('.popup');
const closeModal = show.querySelector('.popup__close');
const formElement = document.querySelector('.popup__container');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__spec');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');


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