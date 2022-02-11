export default class Section {
    constructor({ items, renderer }, selectorContainer) {
        this._items = items; // массив для добавления на страницу
        this._renderer = renderer; // отвечает за создание элементов на странице
        this._selectorContainer = document.querySelector(selectorContainer); // куда будет вставляться items
    }
    addItem(card) { // куда добавить новый card на странице
        this._selectorContainer.prepend(card)
    }
    renderItems() { // отрисовка всех card на странице
        this._items.forEach(item => {
            this._renderer(item)
        });
    }
}