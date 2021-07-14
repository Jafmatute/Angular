
/*
    ===== Código de TypeScript =====
*/

function reportableClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

@reportableClassDecorator
class MiClass {

    public miProp: string = 'ABC';

    imprimir() {
        console.log('Hola Mundoooooo....');

    }
}

console.log(MiClass);

const miclass = new MiClass();
console.log('Mi prop TS', miclass.miProp);

