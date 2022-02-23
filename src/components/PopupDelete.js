import Popup from "./Popup.js";
export default class PopupDelete extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._deleteButton = document.querySelector('.cards__trashicon');
        this._form = this._popup.querySelector('.popup__form');
    }
    openPopupDelete() {
        super.open()
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.close()
        });
        this._deleteButton.addEventListener('click', () => {
            this.openPopupDelete()
        })
    };
    _deleteElement() {
        this.close()
    }
}