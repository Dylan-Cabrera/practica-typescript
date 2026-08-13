class CuentaBancaria {
    readonly titular: string;
    private saldo: number;
    private historial: string[];

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
        this.historial = [`Saldo inicial: $${saldo}`];
    }

    depositar(monto: number): void {
        if(monto <= 0) {
            throw new Error("Monto invalido");
        }
        this.saldo += monto;
        this.historial.push(` Deposito: $${monto}`)
    }

    retirar(monto: number): void {
        if (monto > this.saldo) {
            throw new Error("Saldo insuficiente");
        }
        if (monto <= 0) {
            throw new Error("El monto a retirar debe ser mayor a 0");
        }
        this.saldo -= monto;
        this.historial.push(`retiro: $${monto}`);
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    obtenerHistorial(): string[] {
        return this.historial;
    }
}

const nuevaCuenta = new CuentaBancaria("Augusto Chavez Fiore", 9999);

console.log(`${nuevaCuenta.titular}, saldo: $${nuevaCuenta.consultarSaldo()}`);

nuevaCuenta.depositar(1);
nuevaCuenta.retirar(100);

console.log(`Movimientos: ${nuevaCuenta.obtenerHistorial()} 
             Saldo actual: $${nuevaCuenta.consultarSaldo()}`);

