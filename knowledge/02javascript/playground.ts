// Una función generadora que produce (yields) el conjunto de primos de un dígito (base 10).
function* oneDigitPrimes() { // Invocar esta función no ejecuta el código,
    yield 2; // sino que solo devuelve un objeto generador. Llamar
    yield 3; // al método next() de ese generador ejecuta
    yield 5; // el código hasta que una sentencia yield proporciona
    yield 7; // el valor de retorno para el método next().
}

// Cuando invocamos la función generadora, obtenemos un generador
let primes = oneDigitPrimes();

console.log(primes.next().value)
console.log(primes.next().value)