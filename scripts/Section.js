class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // Método público para renderizar todos los elementos
  renderItems() {
    this._items.forEach((item) => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }

  // Método público para agregar un elemento al contenedor
  addItem(element) {
    this._container.append(element);
  }
}
