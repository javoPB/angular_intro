

/*
    ===== Código de TypeScript =====
*/
interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St.',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(): string{
        return `${this.nombre}, ${this.direccion.ciudad}, ${this.direccion.pais}`
    }
}

const info = superHeroe.mostrarDireccion();
console.log('******************', info);