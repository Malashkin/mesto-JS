const selectorsConfiguration = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    errorClass: 'popup__error_visible',
    inputErrorClass: 'popup__input_error',

};

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__error_visible');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input_error');
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__error_visible')
    errorElement.textContent = ''
    errorElement.classList.remove('popup__input_error')
};

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.setAttribute("disabled", true);
        buttonElement.classList.add('popup__button_disable')
    } else {
        buttonElement.classList.remove('popup__button_disable')
        buttonElement.removeAttribute("disabled");
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

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'))
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement);
    });
};
enableValidation(selectorsConfiguration);