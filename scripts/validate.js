const valitateOption = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    errorClass: 'popup__error_visible', // полоска 
    inputErrorClass: 'popup__input_type_error', // Текст

};

const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);


const showInputError = (element, errorMessage) => {
    element.classList.add('popup__error_visible');
    formError.textContent = errorMessage;
    formError.classList.add('popup__input_type_error');
}

const hideInputError = (element) => {
    element.classList.remove('popup__error_visible')
    formError.textContent = ''
    formError.classList.remove('popup__input_type_error')
};

const isValid = () => {
        if (!formInput.validity.valid) {
            showInputError(formInput, formInput.validationMessage);
        } else {
            hideInputError(formInput)
        }
    }
    // Не перебирает все поля инпута
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__button_disabled')
    } else {
        buttonElement.classList.remove('popup__button_disabled')
    }
}

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button');
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement)
            toggleButtonState(inputList, buttonElement)
        })
    })
}

formInput.addEventListener('submit', (evt) => {
    evt.preventDefailt()
});

formElement.addEventListener('input', isValid)