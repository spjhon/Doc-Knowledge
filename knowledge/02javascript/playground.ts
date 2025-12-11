

function* clock( max=Infinity) {
for(let count = 1; count <= max; count++) { // regular for loop

yield count; // yield the counter
}
}

let intervalo = clock(3)

console.log(intervalo.next().value)
console.log(intervalo.next().value)
console.log(intervalo.next().value)
console.log(intervalo.next().value)
console.log(intervalo.next().value)
console.log(intervalo.next().value)