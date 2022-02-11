export class Card {
    constructor(data, handleCardClick, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._cardSelector = cardSelector;
    };

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.cards__conteiner')
            .cloneNode(true)

        return cardElement
    };

    _setEventListeners() {
        this._element.querySelector('.cards__emotion').addEventListener('click', () => {
            this._clickLike();
        });
        this._element.querySelector('.cards__trashicon').addEventListener('click', () => {
            this._clickDelete();
        });
        this._element.querySelector('.cards__image').addEventListener('click', () => {
            this._handleCardClick(this._link, this._name)
        });
    };

    _clickLike() {
        this._element.querySelector('.cards__emotion').classList.toggle('cards__emotion_active')
    };

    _clickDelete() {
        this._element.remove();
        this._element = null;
    };

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        const elementCard = this._element.querySelector('.cards__image')
        elementCard.src = this._link;
        elementCard.alt = this._name;
        this._element.querySelector('.cards__title').textContent = this._name;

        return this._element
    };
};