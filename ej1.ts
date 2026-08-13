class Producto {
    nombre: string;
    precio: number;
    categoria: string;
    stock: number;

    constructor(nombre: string, precio: number, categoria: string, stock: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }

    //metodos
    describir(): string {
        return `Categoria: ${this.categoria}, ${this.nombre}: $ ${this.precio} - ${this.stock} unidades disponibles`
    }

    hayStock(cantidad: number): boolean {
        return this.stock >= cantidad;
    }

    venderUnidades(cantidad: number): void {
        if (this.hayStock(cantidad)) {
            this.stock -= cantidad;
            console.log(`Venta exitosa. Stock restante: ${this.stock}`);
        } else {
            console.log("No hay suficiente stock");
        }
    }

    aplicarDescuento(porcentaje: number): number {
        const descuento: number = this.precio * (porcentaje / 100);
        return this.precio - descuento;
    }
}

const monitor = new Producto('Monitor', 50000, 'electronica', 10)

console.log(monitor.describir());

console.log(monitor.hayStock(9));

monitor.venderUnidades(5);
monitor.venderUnidades(6);

console.log(`Producto: ${monitor.describir()}. Precio con 15% de descuento: ${monitor.aplicarDescuento(15)}`)

