const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];
//find the first element and return it, if doesn't exist return undefined
rta = products.find(item => item.id === '🥞') 
console.log(rta); 
rtaIndex = products.findIndex( item => item.id === '🥞')
console.log(rtaIndex);