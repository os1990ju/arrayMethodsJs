const numbers = [1, 5, 4, 7, 1, 5, 5];

// contar los elementos que se repitan en el array y mostrar resultados en un objeto

let rta = numbers.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item]++;
  }
  return obj;
}, {});
console.log(rta);

const alumnos = [
  { name: "Oscar", level: "medium" },
  { name: "Andres", level: "High" },
  { name: "Francia", level: "High" },
  { name: "Josue", level: "low" },
  { name: "Santiago", level: "High" },
];

rta2 = alumnos
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item]++;
    }
    return obj;
  }, {});
console.log(rta2)