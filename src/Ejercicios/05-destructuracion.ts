

/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}


const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

//Generando destructuración de un objeto
const {volumen, segundo, cancion: melodia} = reproductor;

console.log('El volumen de la canción: ', volumen);
console.log('El segundo de la canción: ', segundo);
console.log('La canción es: ', melodia);

//Generando destructuración de un arreglo
const dbz: string[] = ['Goku', 'Vegeta', 'Trunk']

const [, , d3] = dbz;
console.log('---->>', d3);
