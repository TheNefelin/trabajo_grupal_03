
export class Producto {
    constructor(id, nombre, precio, dercripcion, stock, link, etiqueta) {
        this._id = id;
        this._nombre = nombre;
        this._precio = precio;
        this._dercripcion = dercripcion;
        this._stock = stock;
        this._link = link
        this._etiqueta = etiqueta;
    }
    getId() {
        return this._id;
    }
    getNombre() {
        return this._nombre;
    }
    getPrecio() {
        return this._precio;
    }
    getDercripcion() {
        return this._dercripcion;
    }
    getStock() {
        return this._stock;
    }
    getLink() {
        return this._link;
    }
    getEtiqueta() {
        return this._etiqueta;
    }
    setNombre(nombre) {
        this._nombre = nombre;
    }
    setPrecio(precio) {
        this._precio = precio;
    }
    setDercripcion(descripcion) {
        this._dercripcion = descripcion;
    }
    setStock(stock) {
        this._stock = stock;
    }
    setLink(link) {
        this._link = link;
    }
    setLink(etiqueta) {
        this._etiqueta = etiqueta;
    }
    setModificarStock(cant) {
        this._stock = parseInt(this._stock) + parseInt(cant)
    }
};






