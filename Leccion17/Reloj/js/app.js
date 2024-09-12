const mostrarReloj = () => {
  let fecha = new Date();
  let hr = formatoHora(fecha.getHours());//obtenemos la hora con el metodo getHours y la formateamos con la funcion formatoHora que creamos.
  let min = formatoHora(fecha.getMinutes());
  let seg = formatoHora(fecha.getSeconds());
  //formatp 12 horas
  hr = hr % 12; // dividimos hr entre 12 y nos quedamos con el residuo si es 0 es medianoche 
  hr = hr ? hr : 12; //usamos un ternario para que si hr es 0, tome el valor de 12
  //y listoo

  let ampm = hr >= 12 ? "am" : "pm";

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

  let diaSemana = dias[fecha.getDay()];//obtenemos el dia de la semana con el metodo getDay que devuelve un numero del 0 al 6 
  let day = fecha.getDate();//obtenemos el dia del mes con el metodo getDate que devuelve un numero del 1 al 31 
  let year = fecha.getFullYear();//obtenemos el año con el metodo getFullYear que devuelve un numero de 4 digitos
  let month = meses[fecha.getMonth()];//obtenemos el mes con el metodo getMonth que devuelve un numero del 0 al 11 
  //y este lo usamos como indice para obtener el mes del arreglo meses


  let fechaTexto = `${diaSemana}, ${day} de ${month} del ${year}`;//creamos una variable que almacena la fecha en formato texto

  document.getElementById("hora").innerHTML = `${hr}:${min}:${seg} ${ampm}`;
    document.getElementById("fecha").innerHTML = fechaTexto;//mostramos la fecha en el div con el id fecha

    document.getElementById('contendor').classList.toggle('animar');//obtenemos el div con el id contenedor y le agregamos la clase animar
    //clasList es una propiedad que nos permite acceder a las clases de un elemento 
    //y con el metodo toggle podemos agregar o quitar una clase funciona como un iterruptor la clase se aplica si no esta y se quita si esta
};

const formatoHora = (hora) => {
    if (hora < 10) {//si la hora es menor a 10
      hora = "0" + hora;//agregamos un 0 al inicio
    }
  return hora;//la retornamos al parametro
};
setInterval(mostrarReloj, 1000);
