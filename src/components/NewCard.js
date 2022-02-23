import { Card } from "./Card.js";
import PopupDelete from "./PopupDelete.js";

export class NewCard extends Card {
    constructor(data, handleCardClick, cardSelector) {
        super(data, handleCardClick, cardSelector);
    }
    _setEventListeners() {
        super._setEventListeners();
        this._delButton = this._element.querySelector('.cards__trashicon');
        this._delButton.addEventListener('click', () => {
            this._clickDelete();
        });
    }
    _clickDelete() {
        this._element.remove();
        this._element = null;
    };
}