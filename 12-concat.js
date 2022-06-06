const elements = [1,5,9,3,7];
const otherElements = [0,2,4,6,8];

const newArray = elements.concat(otherElements);
console.log('concat',newArray);
//concat use the spread operator
rta=[...elements,...otherElements]
console.log('...',rta);
//be carefull because if you use spread and put a string you have some inesperated behavor example
rta2 = [...elements,...'string']
//expected [1,5,9,3,7,'string'] recived [1,5,9,3,7,'s','t','r','i','n','g']
console.log(rta2);
//if you want to mutate de array 
elements.push(...otherElements)
console.log(elements);
