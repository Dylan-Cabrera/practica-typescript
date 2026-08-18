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

class EmpleadoPorHoras extends Empleado {
    horasTrabajadas: number;
    valorHora: number;

    constructor(nombre:string, antiguedad:number, horasTrabajadas:number, valorHora:number) {
        super(nombre, antiguedad);
        this.horasTrabajadas = horasTrabajadas;
        this.valorHora = valorHora;
    }

    calcularSueldo(): number {
        return this.horasTrabajadas * this.valorHora;
    }
}

class EmpleadoPorComision extends Empleado {
    ventasDelMes: number;
    porcentajeComision: number;

    constructor(nombre:string, antiguedad:number, ventasDelMes:number, porcentajeComision:number) {
        super(nombre, antiguedad);
        this.ventasDelMes = ventasDelMes;
        this.porcentajeComision = porcentajeComision;
    }

    calcularSueldo(): number {
        return this.ventasDelMes * this.porcentajeComision;
    }
}


const empleadoFijo = new EmpleadoFijo("Pipe",10 , 800000);
const empleadoPorHoras = new EmpleadoPorHoras("Javier", 2, 8, 1000);
const empleadoPorComision = new EmpleadoPorComision("Franco", 2, 10000, 20);

const empleados: Empleado[] = [empleadoFijo, empleadoPorHoras, empleadoPorComision];

for (const empleado of empleados) {
    console.log(`Empleado: ${empleado.describir()}`)
}

const calcularNomina = (empleados: Empleado[]): void => {
    let totalSueldo: number = 0;

    for (const empleado of empleados) {
        totalSueldo += empleado.calcularSueldo()
    }
    console.log(`Total de nomina a pagar: ${totalSueldo}`)
}

calcularNomina(empleados)


