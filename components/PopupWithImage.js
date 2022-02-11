import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }
    openPopupZoom = (link, name) => {
        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupSubtitle = this._popup.querySelector('.popup__subtitle')
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupSubtitle.textContent = name;
        super.open();
    };
}