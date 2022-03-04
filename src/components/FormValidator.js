export class FormValidator {
    constructor(selectorsConfiguration, formElement) {
        this._selectorsConfiguration = selectorsConfiguration;
        this._formElement = formElement;
        this._submitButton = this._formElement.querySelector(this._selectorsConfiguration.submitButtonSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._selectorsConfiguration.inputSelector))
    };

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._selectorsConfiguration.errorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._selectorsConfiguration.inputErrorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._selectorsConfiguration.errorClass)
        errorElement.textContent = '';
        errorElement.classList.remove(this._selectorsConfiguration.inputErrorClass)
    };

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _activetingSubmit() {
        this._submitButton.classList.remove(this._selectorsConfiguration.inactiveButtonClass)
        this._submitButton.removeAttribute("disabled");
    };

    deactivetingSubmit() {
        this._submitButton.setAttribute("disabled", true);
        this._submitButton.classList.add(this._selectorsConfiguration.inactiveButtonClass)
    };

    _toggleButtonState(inputList) {
        if (this._hasInvalidInput(inputList)) {
            this.deactivetingSubmit()
        } else {
            this._activetingSubmit()
        }
    };

    _setEventListeners() {
        this._toggleButtonState()
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement)
                this._toggleButtonState()
            })
        })
    };

    enableValidation() {
        this._setEventListeners();
    };
    resetValidation() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        })
    };
}