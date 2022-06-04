const words = ["old", "new", "modern", "antique"];

const moreThanThreeWords = words.filter((word) => word.length > 3);
console.log("words", words);
console.log("New words", moreThanThreeWords);
//filter to an array of objects by delivered property
const orders = [
  { customerName: "Nicolas", total: 60, delivered: true },
  { customerName: "Zulema", total: 120, delivered: false },
  { customerName: "Santiago", total: 180, delivered: true },
  { customerName: "Valentina", total: 240, delivered: true },
  { customerName: "Zuñiga", total: 20, delivered: true },
];

const ordesDontDelivered = orders.filter(
  (order) => order.delivered && order.total >= 100
);
//console.log(ordesDontDelivered)
const filterByName = (query) => {
  return orders.filter((item) => item.customerName.includes(query));
};
console.log(filterByName("Zu"));
const array = ["dkdji", "kdlfejo", "a", "b"];
function solution(array) {
  // Tu código aquí 👈
  return array.filter((item) => item.length >= 4);
}
console.log(solution(array));
