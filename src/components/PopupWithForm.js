import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__form')
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
        this._popupForm.addEventListner('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
            this._close()
        });
    };

    close() {
        this._popup.reset();
        super.close();
    };
}