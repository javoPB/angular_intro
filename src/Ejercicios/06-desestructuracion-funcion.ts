

/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}


export function calculaISV(productos: Producto[]): [number, number]{
    let total = 0;

    //Forma normal de obtener el precio de un producto
    productos.forEach( (producto) => {
        total += producto.precio;
    })

    //Desestructuración para obtener el precio de un producto. 
    //(Lo que se hace es de cada objeto que procesa el forEach obtiene mediante desestructuración el precio)
    productos.forEach( ({precio}) => {
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos = [telefono, tableta];

const isv = calculaISV(articulos);
console.log('Impuesto sobre la venta: ', isv);