

/*
    ===== Código de TypeScript =====
*/
let habilidades = ['cadena 1', 'cadena 2', 'cadena 3', 100];
let habilidades2: string[] = ['Javier', 'Néstor'];
habilidades.push(1);

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
};

personaje.puebloNatal = 'Pueblo paleta';

console.table(personaje);