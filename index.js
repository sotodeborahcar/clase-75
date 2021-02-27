// 🦄 🦄 🦄 Promesas 🦄 🦄 🦄

// const chicoDeRastasMePasoABuscarElSabado = true
// const nuevaPromesa = new Promise((resolve, reject) => {
//   if (chicoDeRastasMePasoABuscarElSabado === true) {
//     resolve("Me quede fumando hierbas y escuchando Bob Marley")
//   }
//   else {
//     reject("Me quede en casa limpiandome las uñas")
//   }
// })

// // console.log(nuevaPromesa)

// nuevaPromesa.then((res) => {
//   console.log(res)
// })
// .catch((err) => {
//   console.log(err)
// })

let comics = []
console.log(1)

fetch('https://gateway.marvel.com/v1/public/comics?apikey=cdf503fce8f2c519f899f64cff25fd79')
.then((res) => {
  return res.json()
})
.then((data) => {
  console.log(data)
  comics = data.data.results
  const seccion = document.querySelector("section")

  comics.map((comic) => {
    seccion.innerHTML += `<p>${comic.title}</p>`
  })
  
})
.catch((err) => {
  console.log(err)
  seccion.textContent = "No pudimos encontrar tu busqueda"
})



//  🦄 sintaxis abreviada de funciones flecha

// si la funcion tiene una sola linea, 
// las llaves y la palabra "return" son optativas
// 
// ==> const sumar = (sum1, sum2) => sum1 + sum2

// el codigo es igual a:

//  ==> const sumar = (sum1, sum2) => {
//   return sum1 + sum2
// }

// 🦄 si hay un solo parametro (solo uno), los parentesis son optativos

// const convertirPrimerLetraAMayuscula = nombre => {
//   const primeraLetra = nombre[0]
//   const restoDelNombre = nombre.splice(1)
//   return primeraLetra.toUpperCase() + restoDelNombre
// }


// 🦄 🦄 🦄 sirve para hacer que el fetch nos quede mas limpio:

// fetch("hola")
// .then(res => res.json())
// .then(data => {
//   console.log(data)
// })




//  METODOS HTTP

// hyper text transfer protocol

// GET   --> recibir informacion
// POST   --> enviar informacion
// PUT  ---> modificar informacion
// PATCH  ---> modificar informacion
// DELETE  ---> eliminar informacion


// STATUS CODE  => cada verbo tiene un estatus que nos dice si sale o no bien

 // 200 --> OK , recibiste la informacion 

 // 404 --> recurso no encontrado, me pediste algo que no existe

 // 500 --> server error no especificado, error mio y no te puedo devolver nada



 // 
 // colecciones ---> recursos

 // comics ---> comic 
 // personajes ---> personaje 
// URL 