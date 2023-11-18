// ya no se utiliza var

//let y const

//string
let comprar="pan"
let caracter ='@'
const edad=23
//numerico
const totalCompras=15
const credito=100.50
//boleano
let boolean=false
//arreglo
let conjunto=[12,"hola",false,18.5]
//objetos
let informacion={
    curso:"octavo",
    edad:15
}

// console.log(informacion)



//string


let colegio="Eloy Alfaro"
let sector='ofelia'
//comprobar si es string
console.log(typeof colegio)
console.log(typeof sector)

console.log("")

//metodos con string

//contar el numero de caracteres
console.log(colegio.length)

//verificar si exite dentro del string
console.log(colegio.includes("la"))

//convertir a mayusculas
console.log(colegio.toUpperCase())


//connvertir a minusculas
console.log(colegio.toLowerCase())

//quitar espaciado al inicio o final
console.log(colegio.trim()) 

//reemplazar palabra
console.log(colegio.replace('Alfaro', 'Benigno'))

//cortar texto
console.log(colegio.slice(1,6))
console.log(colegio.substring(1,6))
console.log(colegio.charAt(1))

//repetir texto
console.log(colegio.repeat(2))

//divir texto
console.log(colegio.split(""))




//templates con string

let local="etafashion"

let trabajadores="25 tr"

console.log(local+trabajadores)

//espaciado
console.log(local+" "+trabajadores)
console.log(`${local}  ${trabajadores}`)

//backtic, mezclar variables y texto
console.log(`${local} tiene ${trabajadores}`)
