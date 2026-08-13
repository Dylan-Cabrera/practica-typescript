class Empleado {
    protected nombre: string;
    protected antiguedad: number;

    constructor(nombre: string, antiguedad: number) {
        this.nombre = nombre;
        this.antiguedad = antiguedad;
    }

    calcularSueldo(): number{
        return 0;
    }

    describir(): string {
        return `Nombre: ${this.nombre}, Antiguedad: ${this.antiguedad} años — sueldo: $${this.calcularSueldo()}`;
    }
}

class EmpleadoFijo extends Empleado {
    sueldoBase: number;

    constructor(nombre: string, antiguedad: number, sueldoBase: number) {
        super(nombre, antiguedad);
        this.sueldoBase = sueldoBase;
    }

    calcularSueldo(): number {
        let bonoAntiguedad: number = (this.sueldoBase * 0.02) * this.antiguedad;
        return this.sueldoBase + bonoAntiguedad;
    }
}

const empleado = new Empleado("Pepe", 2);
const empleadoFijo = new EmpleadoFijo("Pipe",10 , 800000);

console.log(empleado.describir());
console.log(empleadoFijo.describir());