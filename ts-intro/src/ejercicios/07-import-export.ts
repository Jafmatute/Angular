

/*
    ===== Código de TypeScript =====
*/

import { Producto, calcularISV } from './06-desestructuracion-funcion';

const CarritoCompras: Producto[] = [
    {
        desc: 'Xiaomy Note',
        precio: 100
    },
    {
        desc: 'Xiaomy Redmi Pro',
        precio: 150
    }
];

const [total, isv] = calcularISV(CarritoCompras);
console.log(`Total: ${total}`);
console.log(`ISV: ${isv}`);



