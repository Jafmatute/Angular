
/*
    ===== Código de TypeScript =====
*/

class Persona {

    constructor(
        public nombre: string,
        public direccion: string,
    ) { }
}

class Heroe extends Persona {

    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ) { super(nombreReal, 'New York USA'); }

}

const ironMan = new Heroe('IronMan', 45, 'Tony');
console.log(ironMan);