const user={
    name:"Maria",
    ciudad:"Quito",
    activo:true,
    adress:{
        calle:"calle abc",
        secundaria:"calle 123"
    },
    edad: 22,
    friends:["pablo","juan","marco"],
    sendMail(){
        return `send mail ${this.friends[0]}`
    },
    sendNotification: function() {
        return `Send notification ${this.friends[2]}`
    }
    
}

console.log(user.ciudad)
console.log(user.sendMail())

console.log("**************")
user.image="http:/image/profile"

//DESESTRUCTURACION DE OBJETOS
//de esta forma 
user.ciudad
user.edad
user.name

//form1
const{name,edad,friends,activo}=user

//form2
//console.log(name,ciudad,activo);

//SUMA DE OBJETOS

//ob1
const user1={
    name:"Maria",
    ciudad:"Quito",
    activo:true
}

//ob 2
const adress1={
    calle:"calle abcd",
    secundaria:"calle 1234"
}

//Unir objetos
const allInformation={...user1,...adress1}//spread operator (...)unir objetos
console.log(allInformation )// los parametros rest siempre van en funciones

console.log("-------")
//CONSTRUCCIOON DE OBJETOS A PARTIR DE VARIABLES
const name1="laptop"
const price=3000

const newProduct={
    name1,
    price
}

//SI LA VARIABLE ES != DEL NOMBRE DE MI VALOR, no tan comun
// const newProduct={
//     name: name1,
//     price: price
// }

console.log(newProduct)

console.log("+++++++++++++++++++++++")
//arreglos
const profileUser=["maria","cocha",34,true,{ciudad:"quito"}]

const skills=["front","back"]


//AGREGAR
// push agrega al final
profileUser.push(skills)
console.log(profileUser)

//unshift agrega al inicio
profileUser.unshift(skills)
console.log(profileUser)

console.log("--------")


//ELIMINAR
//pop elimina el ultimo y el shift elimina el primero
profileUser.pop()
profileUser.shift()

console.log(profileUser)

console.log("- M E T O D O S -")
const perfilU=["martha","lopes",15]

//BUSQUEDA
const findOne=perfilU.find((e)=>e =="juan")

const findTwo=perfilU.find((e)=>e =="martha")

//uso .find() para string

//muestra los elemntos diferetes del valor puesto puede ser string u numero
const newData=perfilU.filter((e)=>e != "peter") 




console.log(findOne)
console.log(findTwo)
console.log(newData)



