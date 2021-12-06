const edit = document.querySelector('.profile__button');
const show = document.querySelector('.popup');
const closeModal = document.querySelector('.popup__close');


function openModal() {
    show.classList.remove('popup');
}

function close() {
    show.classList.add('popup');
}

edit.addEventListener('click', openModal);
closeModal.addEventListener('click', close);
let formElement = document.querySelector('.popup__container');

function submitFormHandler(evt) {
    evt.preventDefault();
    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__spec');
    let nameInput = document.querySelector('.popup__text-name').value;
    let jobInput = document.querySelector('.popup__text-spec').value;
    profileName.textContent = nameInput;
    profileJob.textContent = jobInput;
    close();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', submitFormHandler);