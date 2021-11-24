/* 

- let - const
- Map/ForEach/Find/Filter/Reduce
- Desestructuracion
- Operador Ternario
- Operador REST/SPREAD
- Arrow Functions
- Promesas / Asincronismo

 */

//Primitivos - Objetos

/* let a = 1
let b = a

b = 2 */

/* 
let a = {x:1}
let b = a

b.x = 2

console.log(a, b) 
*/




//const copia = arr

//slice / splice
//const copia = arr.slice(0)
//const copia2 = arr.splice(0,2)

//map

const arr = [1,2,3,4,5]
//const resultado = [[1,0],?,?,?,?]

const copia = arr.map((elemento,indice)=>{
    return elemento
})

/* 
const copia = []

arr.forEach((elemento,indice)=>{
    copia.push(elemento + 1)    
}) 
*/

//spread operator
//recorro y copio en otro array
//concat