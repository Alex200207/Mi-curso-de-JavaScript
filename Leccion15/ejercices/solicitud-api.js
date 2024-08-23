//solicitando datos a una api

const apikey = 'zZEeY70P9pUhIq2lQXBiRfTJEuu1bRWv';//apikey de giphy

const url = 'https://api.giphy.com/v1/gifs/random?'//url de la api

const peticion = fetch(`${url}api_key=${apikey}`);//hacemos la peticion a la api

peticion        //hacemos la peticion
.then(respuesta => respuesta.json())//convertimos la respuesta a json
.then(({data}) => {//desestructuramos la data
    const {url} = data.images.original.url;//desestructuramos la url
    const img = document.createElement('img')//creamos un elemento img
    img.src = url;//le asignamos la url
    document.body.append(img);//lo agregamos al body
})
.catch(console.warn)//en caso de error mostramos un mensaje de error
