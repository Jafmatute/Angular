

/*
    ===== Código de TypeScript =====
*/

// Arrays

// let habilidades:(string| number| boolean) []= ['Bash','Counter','Healing'];

let habilidades:string[] = ['Bash','Counter','Healing'];

interface Personaje {
    nombre:string,
    hp:number,
    habilidades:string[],
    puebloNatal?: string
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp:100,
    habilidades: ['Bash','Counter','Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);



