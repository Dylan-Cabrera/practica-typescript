class Persona {
    private readonly dni: number;
    public nombre: string;
    private edadActual: number;
    private correo: string;

    constructor(dni:number, nombre:string, edad:number, email:string) {
        this.dni = dni;
        this.nombre = nombre;
        this.edadActual = 0;
        this.correo = "";
        this.edad = edad;
        this.email = email;
    }

    get edad(): number {
        return this.edadActual;
    }

    set edad(valor: number) {
        if (valor < 0 || valor > 120) {
            throw new Error("La edad debe ser entre 0 y 120 años");
        }
        this.edadActual = valor;
    }

    get email(): string {
        return this.correo;
    }

    set email(valor: string) {
        if (!valor.includes("@")) {
            throw new Error("El email debe contener un '@'");
        }
        this.correo = valor;
    }

    get esMayorDeEdad(): boolean {
        return this.edad >= 18;
    }

    get datosPublicos(): string {
        return `Nombre: ${this.nombre} | Es mayor de edad: ${this.esMayorDeEdad}`;
    }
}

const persona1 = new Persona(12345678, "Javi", 25, "javi@correo.com");
console.log("Datos de la persona 1:");
console.log(persona1.datosPublicos);

try {
    persona1.edad = 130;
} catch (e: any) {
    console.log(e.message);
}
try {
    persona1.email = "correofalso.com";
} catch (e: any) {
    console.log(e.message);
}

console.log("Email final:", persona1.email);