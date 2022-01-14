const selectorsConfiguration = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    errorClass: 'popup__error_visible',
    inputErrorClass: 'popup__input_error',

};

const showInputError = (formElement, inputElement, selectorsConfiguration, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(selectorsConfiguration.errorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(selectorsConfiguration.inputErrorClass);
}
const hideInputError = (formElement, inputElement, selectorsConfiguration) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(selectorsConfiguration.errorClass)
    errorElement.textContent = ''
    errorElement.classList.remove(selectorsConfiguration.inputErrorClass)
};

const isValid = (formElement, inputElement, selectorsConfiguration) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, selectorsConfiguration, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement, selectorsConfiguration, );
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

function activetingSubmit(selectorsConfiguration, buttonElement) {
    buttonElement.classList.remove(selectorsConfiguration.inactiveButtonClass)
    buttonElement.removeAttribute("disabled");
}

function deactivetingSubmit(selectorsConfiguration, buttonElement) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(selectorsConfiguration.inactiveButtonClass)
}

const toggleButtonState = (inputList, buttonElement, selectorsConfiguration) => {

    if (hasInvalidInput(inputList)) {
        buttonElement.setAttribute("disabled", true);
        buttonElement.classList.add('popup__button_disable')
    } else {
        buttonElement.classList.remove('popup__button_disable')
        buttonElement.removeAttribute("disabled");

    }
}
const setEventListeners = (formElement, selectorsConfiguration) => {
    const inputList = Array.from(formElement.querySelectorAll(selectorsConfiguration.inputSelector));
    const buttonElement = formElement.querySelector(selectorsConfiguration.submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, selectorsConfiguration)
            toggleButtonState(inputList, buttonElement, selectorsConfiguration)
        })
    })
}

const enableValidation = (selectorsConfiguration) => {
    const formList = Array.from(document.querySelectorAll(selectorsConfiguration.formSelector))
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, selectorsConfiguration);
    });
};
enableValidation(selectorsConfiguration)