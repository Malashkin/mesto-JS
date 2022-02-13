import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._popupForm = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        const inputValues = this._popupForm.querySelectorAll('.popup__input')
        const inputsValue = {};
        inputValues.forEach(item =>
            inputsValue[item.name] = item.value);
        return inputsValue;
    };

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
            this.close()
        });
    };

    close() {
        this._popupForm.reset();
        super.close();
    };
}