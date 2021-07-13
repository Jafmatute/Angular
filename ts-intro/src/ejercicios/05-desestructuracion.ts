

/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number,
    segundo: number,
    cacion: string,
    detalles: Detalles
}

interface Detalles {
    autor: string,
    anio: number,
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 37,
    cacion: 'Durmiendo con la luna',
    detalles: {
        autor: 'Elefante',
        anio: 1999
    }
}

console.table(reproductor);
const autor = 'fulano';

const { volumen, segundo, cacion, detalles: { autor: aliasAutor } } = reproductor;
// const {autor} = detalles;
console.log(`el Nombre de la cación es :${cacion} y pertenece a ${aliasAutor}`);


// Destructuración de arreglos
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = dbz;
// const [p1, p2, p3] = dbz;

// console.log(`Personaje 1:${p1}`);
// console.log(`Personaje 2:${p2}`);
console.log(`Personaje 3:${p3}`);



