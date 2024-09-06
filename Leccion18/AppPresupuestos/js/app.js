const ingresos = [new Ingreso("salario", 20000), new Ingreso("salario", 50000)];

const egresos = [
  new Egreso("Renta departamento", 900),
  new Egreso("ropa", 400),
];

let cargarApp = () => {
  cargarCabecero();//llamamos a la funcion cargarCabecero
    cargarIngresos();//llamamos a la funcion cargarIngresos
    cargarEgresos();//llamamos a la funcion cargarEgresos
};


let totalIngresos = () => {
    let totalIngreso = 0;

    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;

    }
    return totalIngreso;
};
let totalEgresos = () => {
    let totalEgresos = 0;
    for(egreso of egresos){
        totalEgresos += egreso.valor//vamos sumando cada uno de los egresos 
    }
    return totalEgresos// la retornamos
}


let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();//calculamos el presupuesto restando los ingresos menos los egresos
    let porcentajeEgreso = totalEgresos() / totalIngresos();//calculamos el porcentaje de egresos dividiendo los egresos entre los ingresos
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);//mostramos el presupuesto en el div con el id presupuesto
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);//mostramos el porcentaje de egresos en el div con el id porcentaje
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());//mostramos los ingresos en el div con el id ingresos
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());//mostramos los egresos en el div con el id egresos


    console.log(presupuesto)
};

//usaremos el concepto de Intl o internacionalizacion para dar formato a los fechas, numeros y monedas

//definir una funcion formatoMoneda que reciba un valor y lo formatee como moneda

const formatoMoneda = (valor) => {//valor es el parametro que recibe la funcion y este apunta a un numero 
    return valor.toLocaleString('en-US',{style:'currency',currency:'USD',minimumFractionDigital:2})//esto lo que hace es retornar un string con el valor formateado como moneda
}//style es el estilo de moneda, currency es el tipo de moneda, minimumFractionDigital es el numero minimo de decimales 
//que queremos mostrar en este caso 2 decimales  

const formatoPorcentaje = (valor) => {//definimos una funcion formatoPorcentaje que recibe un valor
    return valor.toLocaleString('en-US',{style:'percent',minimumFractionDigital:2})//retornamos el valor formateado como porcentaje
}//style es el estilo de porcentaje, minimumFractionDigital es el numero minimo de decimales que queremos mostrar en este caso 2 decimales

//cargarApp();//llamamos a la funcion cargarApp para que se ejecute al cargar la pagina

const cargarIngresos = () => {
    let ingresosHTML = '';//creamos una variable ingresosHTML que va a almacenar el html de los ingresos

    for(let ingreso of ingresos){//recorremos el arreglo de ingresos
        ingresosHTML += crearIngresoHTML(ingreso);//usamos la funcion y pasamos como referencia el ingreso que estamos iterando
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;//mostramos el html de los ingresos en el div con el id lista-ingresos
}

//por cada objeto de tipo ingreso se va a generar el codigo html con div mostrado ,entonces se regresa a la variable ingresosHTML
//y se concatena cada uno de estos elementos html.. para objeto de tipo ingreso se va a generar un div con la descripcion y el valor

const crearIngresoHTML = (ingreso) =>{//definimos una funcion crearIngresoHTML que recibe un objeto de tipo ingreso
    //por cada uno de los elemento de tipo ingreso vamos a crear un html que va a ser almacenado en la variable ingresoHTML
    let ingresoHTML = `<div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn" >
                                <ion-icon name="close-circle-outline" onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>`;//creamos una variable ingresoHTML que va a almacenar el html de un ingreso
                return ingresoHTML;//retornamos el html del ingreso
}

const eliminarIngreso = (id) => {//definimos una funcion eliminarIngreso que recibe un id
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);//buscamos el indice del ingreso que queremos eliminar con el metodo findIndex que recibe una funcion de callback
    ingresos.splice(indiceEliminar,1);//eliminamos el ingreso con el metodo splice que recibe el indice del ingreso que queremos eliminar y el numero de elementos que queremos eliminar
//el 1 indica que solo queremos eliminar un elemento 
cargarCabecero();//volvemos a cargar el cabecero
cargarIngresos();//volvemos a cargar los ingresos

} //iteramos el arreglo de ingresos y por cada uno de los ingresos vamos a comparar si el id del ingreso es igual al id que estamos recibiendo
//si es igual retornamos el indice del ingreso que queremos eliminar 
//splice es un metodo que nos permite eliminar elementos de un arreglo y recibe el indice del elemento que queremos eliminar y el numero de elementos que queremos eliminar

const cargarEgresos = () => {
    let egresosHTML = '';
    for(egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);

    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) => {
    let egresoHTML = `<div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>`;
                return egresoHTML;
}