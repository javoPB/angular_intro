

/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Néstor'
}

const pasajero2: Pasajero = {
    nombre: 'Javier',
    hijos: ['Néstor']
}


function imprimirPasajero( pasajero: Pasajero ): void {
    ///const cuantosHijos = pasajero.hijos != undefined ? pasajero.hijos.length : 0;
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log('Número de hijos del pasajero: ', cuantosHijos)
}

imprimirPasajero(pasajero1);