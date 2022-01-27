export class FormValidator {
    constructor(selectorsConfiguration, formElement) {
        this._selectorsConfiguration = selectorsConfiguration;
        this._formElement = formElement;
        this._submitButtonSelector = this._formElement.querySelector(this._selectorsConfiguration.submitButtonSelector);
        this._inputSelector = Array.from(this._formElement.querySelectorAll(this._selectorsConfiguration.inputSelector))
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._selectorsConfiguration.errorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._selectorsConfiguration.inputErrorClass);
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._selectorsConfiguration.errorClass)
        errorElement.textContent = ''
        errorElement.classList.remove(this._selectorsConfiguration.inputErrorClass)
    };

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput() {
        return this._inputSelector.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _activetingSubmit() {
        this._submitButtonSelector.classList.remove(this._selectorsConfiguration.inactiveButtonClass)
        this._submitButtonSelector.removeAttribute("disabled");
    }

    deactivetingSubmit() {
        this._submitButtonSelector.setAttribute("disabled", true);
        this._submitButtonSelector.classList.add(this._selectorsConfiguration.inactiveButtonClass)
    }

    _toggleButtonState(inputList) {
        if (this._hasInvalidInput(inputList)) {
            this.deactivetingSubmit()
        } else {
            this._activetingSubmit()
        }
    }

    _setEventListeners() {
        this._toggleButtonState()
        this._inputSelector.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement)
                this._toggleButtonState()
            })
        })
    }

    enableValidation() {
        this._setEventListeners();
    };
}