// Multiply the vector {x,y} or {x,y,z} by a scalar value
function vectorMultiply({x=-28, y=-28, z=15}, scalar) {
  return { x: x*scalar, y: y*scalar, z: z*scalar };
 }
console.log(vectorMultiply({x: 1, y: 2}, 2)) // => {x: 2, y: 4, z: 0}
