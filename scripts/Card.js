export class Card {
    constructor(link, name, handleCardClick) {
        this._name = name;
        this._link = link;
        this._handleCardClick = handleCardClick;
    };

    _getTemplate() {
        const cardElement = document
            .querySelector('.cards__list')
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
        this._element.querySelector('.cards__trashicon').closest('.cards__conteiner').remove();
    };

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.cards__image').src = this._link;
        this._element.querySelector('.cards__image').alt = this._name;
        this._element.querySelector('.cards__title').textContent = this._name;

        return this._element
    };
};