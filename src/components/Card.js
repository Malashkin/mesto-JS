export class Card {
    constructor(data, cardSelector, usedId, handleCardClick, handleLikeClick, handleDeleteCard) {
        this._name = data.name;
        this._link = data.link;
        this.id = data._id;
        this._likes = data.likes;
        this._owner = data.owner._id;
        this._usedId = usedId;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteCard = handleDeleteCard;

    };

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.cards__conteiner')
            .cloneNode(true)
        return cardElement
    };

    deleteElement() {
        this._element.remove();
        this._element = null;
    }



    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector('.cards__image');
        this._cardTitle = this._element.querySelector('.cards__title').textContent = this._name;
        this._cardLike = this._element.querySelector('.cards__emotion');
        this._cardDelete = this._element.querySelector('.cards__trashicon');
        this._cardLikeCounter = this._element.querySelector('.cards__counter');
        this._cardLikeCounter.textContent = this._likes.length;

        this._setEventListeners();
        this.handleDeleteButton();
        this.toggleLikeButton();
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;

        return this._element
    };

    _setEventListeners() {
        this._cardImage.addEventListener('click', () => this._handleCardClick(this._link, this._name));
        this._cardLike.addEventListener('click', () => this._handleLikeClick(this));
        this._cardDelete.addEventListener('click', () => this._handleDeleteCard(this));
    };

    cardsOwner() {
        if (this._usedId === this._owner) {
            return (true)
        }
    };

    handleDeleteButton() {
        if (this.cardsOwner() === true) {
            this._cardDelete.classList.remove('cards__trashicon_deactive');
        } else {
            this._cardDelete.classList.add('cards__trashicon_deactive');
        }
    };
    isLiked() {
        return this._likes.some(owner => owner._id === this._usedId)
    };
    toggleLikeButton() {
        if (this.isLiked()) {
            this._cardLike.classList.add('cards__emotion_active');
        } else {
            this._cardLike.classList.remove('cards__emotion_active');
        }
    };
    _likeAmount() {
        this._cardLike.classList.toggle('cards__emotion_active')
        this._cardLikeCounter.textContent = this._likes.lenght;
    };
    setLikes(cardData) {
        this._likes = cardData;
        this._likeAmount();
    };

};