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
console.log(rta2);

//count by ranges in an array
const numbersArray = [2, 1, 5, 7, 7, 8, 9, 10, 10, 6, 6, 5, 4, 2, 1];
console.log(
  numbersArray.reduce(
    (obj, item) => {
      if (item <= 5) {
        obj["1-5"]++;
      } else if (5 < item && item < 9) {
        obj["6-8"]++;
      } else {
        obj["9-10"]++;
      }
      return obj;
    },
    { "1-5": 0, "6-8": 0, "9-10": 0 }
  )
);
