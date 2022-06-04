//usado para hacer transformaciones a cada uno de los elementos 
//este metodo es inmutable
//obtiene el mismo numero de elementos

const myArray = ['a','b','c','d'];
const newArray = myArray.map(item => item+'++')
console.log('myArray ',myArray);
console.log('newArray ',newArray);
