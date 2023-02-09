let nome = ["fulanis", "beltane", "chicano"]
let tam = nome.length

console.log(tam)
console.log(nome)

//-----------------------------------------------------------

let categories = ["futebol", "basquete", "volei"]
console.log(categories.join(";")) // transforms array into string using chosen separator
categories.pop() // removes the last item from the array
console.log(categories)
categories.push("natação") // add item
console.log(categories)

let pos = categories.indexOf("basquete")// shows the position in the array
console.log(pos)

categories.push("bocha")
let novo = categories.splice(pos, 1)//  split into two arrays
console.log(novo)
console.log(categories)

categories.sort()// alphabetical order
console.log(categories)

categories.reverse()// z to a
console.log(categories)

//--------------------------------------------------------------

console.log(Math.floor(0.95)) //rounds numbers up
console.log(Math.ceil(0.15)) //rounds numbers down
console.log(Math.round(0.40))//rounds according to decimal point

console.log(Math.random())// random number
console.log(Math.floor(Math.random()*100)) //rounds random numbers up (between 0 and 100)