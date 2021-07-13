

/*
    ===== Código de TypeScript =====
*/

// Funciones Básicas ts

function sumar(a: number, b: number): number {

    return (a + b);
}

const sumarFlecha = (a: number, b: number): number => {

    return a + b;
}

function multiplicar(num1: number, num2?: number, base: number = 2): number {

    return num1 * base;
}

// const result = multiplicar(10, 0, 20);
// console.log(result);

// Funciones como aobjetos como argumento ts

interface PersonajeLOR {
    nombre: string,
    pv: number,
    mostrarHP: () => void,
}

function curar(personaje: PersonajeLOR, curarX: number): void {

    personaje.pv += curarX;
}


const newPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHP() {
        console.log(`Mostrar los puntos de vida ${this.pv}`);

    }
}

curar(newPersonaje, 20);
newPersonaje.mostrarHP();
