const orders = [
  { customerName: "Nicolas", total: 60, delivered: true },
  { customerName: "Zulema", total: 120, delivered: false },
  { customerName: "Santiago", total: 180, delivered: true },
  { customerName: "Valentina", total: 240, delivered: true },
];

//console.log("original",orders);
//usado para limpiar datos solo lo que me interesa
const totales = orders.map((item) => item.total);
//console.log("new ",totales)

//usado para agregar elementos a un objeto evitar mutar un objeto yaque el retorna la referencia
function solution(array) {
  return array.map((item) => ({
    ...item,
    taxes: item.total * 0.19,
  }));
}
const newArray = solution(orders);

console.log("new orders", newArray);
console.log("orders", orders);
//console.log('new orders', newOrders)

const personas = [
  { nombre: "Oscar", edad: 32, anoNacimiento: 1990 },
  { nombre: "Francia", edad: 42, anoNacimiento: 1980 },
  { nombre: "Josue", edad: 2, anoNacimiento: 2019 },
];

//crear un arreglo inumtable con la nueva propiedad llamada lugar de nacimiento
function anadirPropiedadCiudad(array) {
  return array.map((persona) => ({
    ...persona,
    ciudad: "Cali",
  }));
}
newPersons = anadirPropiedadCiudad(personas);
console.log(newPersons);
