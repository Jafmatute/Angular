

/*
    ===== Código de TypeScript =====
*/

interface Producto {
    desc: string,
    precio: number,
}


const telefono: Producto = {
    desc: 'Nokia a1',
    precio: 150,
}

const tableta: Producto = {
    desc: 'Ipad M1',
    precio: 350
}


function calcularISV(productos: Producto[]): [number, number] {

    let total = 0;
    productos.forEach(({ precio }, i, products) => {

        total += precio;
    });

    return [total, total * 0.15];
}

const articulos = [telefono, tableta];

const [total, isv] = calcularISV(articulos);
console.log(isv);
