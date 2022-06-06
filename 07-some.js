const numbers = [1, 4, 5, 7, 9];
const orders = [
    { customerName: "Nicolas", total: 60, delivered: false },
    { customerName: "Zulema", total: 120, delivered: false },
    { customerName: "Santiago", total: 180, delivered: false },
    { customerName: "Valentina", total: 240, delivered: false },
    { customerName: "Zuñiga", total: 20, delivered: false },
  ];
par = numbers.some((item) => item % 2 === 0);
console.log(par)

someWasDelivered = orders.some(item => item.delivered);
console.log('some was delivered',someWasDelivered)