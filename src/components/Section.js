export default class Section {
    constructor({ items, renderer }, selectorContainer) {
        this._items = items;
        this._renderer = renderer;
        this._selectorContainer = document.querySelector(selectorContainer);
    }
    addItem(card) {
        this._selectorContainer.prepend(card)
    }
    renderItems() {
        this._items.forEach(item => {
            this._renderer(item)
        });
    }
}