const personas = [];//creamos un arreglo de personas vacio

function mostrarPersonas() {
  //creamos una funcion que muestra las personas
  console.log("Mostrar personas: "); //esto es para probar que funcina al cargar la pagina
  let texto = ""; //creamos una variable texto que va a almacenar el contenido de las personas
  for (let persona of personas) {
    //recorremos el arreglo de personas
    console.log(persona);
    texto += `<li>  ${persona.nombre} ${persona.apellido} </li>`; //agregamos al texto el nombre y apellido de la persona
  }
  document.getElementById("personas").innerHTML = texto; //recuperamos el ul con el id persona y mostramos los datps almacenados en texto
}

function agregarPersonas() {
  const forma = document.forms["forma"]; //obtenemos el formulario con el nombre forma
  const nombre = forma["nombre"]; //obtenemos el input con el nombre nombre
  const apellido = forma["apellido"]; //obtenemos el input con el nombre apellido

  if (nombre.value != "" && apellido.value != "") {
    //si los inputs no estan vacios
    const persona = new Persona(nombre.value, apellido.value); //creamos un objeto de tipo persona con los valores de los inputs
    personas.push(persona); //agregamos la persona al arreglo de personas
    mostrarPersonas(); //mostramos las personas
  }
  else{
    alert('Los campos nombre y apellido son obligatorios')
  }
}
