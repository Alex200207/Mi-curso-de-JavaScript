//Funcion de self Invoking en js


(function (a,b) {//esta funcion imprime un mensaje en consola
    console.log("ejecutando la funcion: " +  (a + b));
})(3,4);//esto hace de ella una funcion anonima pues no esta asignada a una variable ni tiene un nombre simplemente se llama asi misma
//esta funcion no se puede mandar a llamr pues no tiene nombre ni esta asignada a una variable 


//my practice--------------------------------------------------------------

(function(i,y){
    console.log("se ejecuta la resta de 5 -5: " + (i - y))
})(5,5)

//------------------------------------------------------------------------