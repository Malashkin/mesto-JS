import { method } from "lodash";

export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort36/cards/', {
                method: 'GET',
                headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            });
    };
    getUserInfo() {
        return fetch('https://nomoreparties.co/v1/cohort36/users/me', {
                method: 'GET',
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            });
    }
    editUserInfo(data) {
        return fetch('https://nomoreparties.co/v1/cohort36/users/me', {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify(data)
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            });
    };
    createCardApi(data) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort36/cards', {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify(data)
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            });

    }
    deleteCard(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort36/cards/${cardId}`, {
                method: "DELETE",
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            });
    }

    deleteCardLike(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort36/cards/${cardId}/likes`, {
                method: "DELETE",
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            });
    }

    putCardLike(cardId) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort36/cards/${cardId}/likes`, {
                method: "PUT",
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            });
    }

    editAvatar(data) {
        return fetch(`${this._baseUrl}users/me/avatar`, {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify(data)
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            });
    }
};