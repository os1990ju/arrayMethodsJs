//  all elements must meet the conditions
const numbers = [40, 38, 1, 5, 35, 39];
const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 14,
  },
];
const rta = numbers.every((item) => item <= 40);
console.log(rta);
const rta2 = team.map((item) => item.age).every((item) => item <= 15);
console.log(rta2);
