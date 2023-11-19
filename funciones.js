function declarada(){
    console.log("funcion declarada")
}

declarada()

const expresada = function(){
    console.log("funcion expresada")
}

expresada()

//funcion anonima
console.log(
    function(){
        console.log("hola")
    }
)

//funcion autoejecutada
console.log(
    function(){
        return "repuesta"
    }()
)

// (function(){
//     console.log("mail")
// }())

function hello (dato1,dato2="Angular"){
    console.log(dato1+" "+dato2)
}

hello('js')

//se imprimen los valores conemplados dentro del args
const   precioFinal=function(a,b,...args){
    console.log(args)
}

precioFinal(10,20,40,67,89,44)


function hola(){
    return "hola js"
}

console.log(hola())



