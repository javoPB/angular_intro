

/*
    ===== Código de TypeScript =====
*/
function sumar(a: number, b: number): number{
    return a+b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a+b
}

const multiplicacion = (numero: number, otroNumero?: number, base: number = 2): number => {
    return numero * base;
}

const resultado = sumar(10, 20);
const resultadoFlecha = sumarFlecha(1, 2);
const multiplicar = multiplicacion(10, 0, 4);
//console.info(resultado, resultadoFlecha, multiplicar);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarPV: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number){
    personaje.pv =  curarX;

    personaje.mostrarPV()
    //console.log('---->>', personaje.mostrarPV);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarPV(){
        console.log('Puntos de vida: ', this.pv)
    }
}
nuevoPersonaje.mostrarPV();

//curar(nuevoPersonaje, 20);


