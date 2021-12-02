const edit = document.querySelector('.profile__button');
const show = document.querySelector('.popup');
const closeModal = document.querySelector('.popup__bclose');

edit.addEventListener('click', function() {
    show.classList.remove('popup');
});
closeModal.addEventListener('click', function() {
    show.classList.add('popup');
})

let formElement = document.querySelector('.popup__container');

function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameInput = document.querySelector('.popup__name').value;
    let jobInput = document.querySelector('.popup__spec').value;


    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector('.profile__name')
    let profileJob = document.querySelector('.profile__spec')
        // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput;
    profileJob.textContent = jobInput;
    closeModal();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);