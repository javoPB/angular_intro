

/*
    ===== Código de TypeScript =====
*/

//Mediante la anotación <T> se indican los tipos de datos genericos, el tipo de dato del argumento debe ser igual al generico indicado (<T>)
function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo.');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5]);

let soyExplicito = queTipoSoy<number>( 200 );