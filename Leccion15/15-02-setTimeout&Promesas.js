//Funcion setTimeout y promesas en javascript
//que es setTimeout es una funcion que se ejecuta despues de un tiempo determinado


let miPromesa = new Promise((resolve,reject)=>{
    let expresion = true;
    if(expresion){
        resolve('se evaluo la expresion correcta mente')
    }
    else{
        reject('la evaluacion ha fallado')
    }
})

// miPromesa
// .then((valor)=> console.log(valor))
// .catch((err)=> console.log(err))

//llamar la fucion pero utilizando setTimeout asincrono

let promesa = new Promise((resolve)=>{
    console.log('inicio de la promesa')
    setTimeout( ()=> resolve ('saludos con promesa y tiemout'),3000)
    console.log('fin de la promesa')
});

promesa.then(valor => console.log(valor))