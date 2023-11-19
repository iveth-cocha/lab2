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


//NUMEROS
const numeroVidas=20
const numeroPuntos="20"

//forma habitual (mal)
console.log(`Total= ${numeroVidas}+${numeroPuntos}`)
console.log(`Total= ${numeroVidas+numeroPuntos}`)


//forma correcta
//inicio con el valor int y luego el string
console.log(`Total= ${+numeroPuntos + +numeroVidas}`)


//para sumar dos string: console.log(`Total= ${+numeroPuntos + +numeroVidas}`)
console.log(3+4*5)

//BOOLEAN
let saldo1=500
let saldo2=1000

if (saldo1 > saldo2){
    console.log("pagar")
}
else{
    console.log("seguir consumiendo")
}

//mas facil operador ternario
const respuesta=saldo1>saldo2 ? "pagar":"seguir cosumiendo"

console.log(respuesta)



//BUCLES
const tareas=["trabajar", "comer","dormir"]

const usuario={
    nombre:"maria",
    skills:true
}

//t es el iterador de elemtos, i posicion
tareas.forEach((t,i)=>console.log(t,i))

for (const t of tareas){
    console.log(t)
}
console.log("........")


//para objetos
for (const clave in usuario){
    console.log(`${usuario[clave]}`)
}
console.log(".........")

//map devuelve un nuevo arreglo, entonces es modificable
const nuevasTareas =tareas.map(t=>t)
console.log(nuevasTareas)

