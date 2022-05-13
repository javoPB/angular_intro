

/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(public nombre: string, public direccio: string){

    }
}

class Heroe extends PersonaNormal {
    /**
    //Forma normal de definir atributos e inicializarlos en el constructor.
    public alterEgo: string;
    public edad: number;
    public nombreReal: string;


    constructor(alterEgo: string){
        this.alterEgo = alterEgo;
        console.log('Heeeey...')
    }
    /**/

    /**
     * Forma tradiconal de definir e inicializar los atributos de una clase.
     */
    constructor(public alterEgo: string, public edad: number, public nombreReal: string){
        super(nombreReal, 'New York, USA');
    }

    


}


const ironman = new Heroe('Ironman', 30, 'Tony Start');

console.log(ironman);