export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }
    open() {
        this._popup.classList.add('popup_type_opened')
        document.addEventListener('keydown', this._handleEscClose)
    }
    close() {
        this._popup.classList.remove('popup_type_opened')
        document.removeEventListener('keydown', this._handleEscClose)
    }
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this._popup.close()
        }

    }
    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            if (evt.target.contains('popup_type_opened') || evt.target.contains('popup__close')) {
                this._popup.close()
            }
        });
    }
}