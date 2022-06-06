const array = [1,2,3,4,5,[6,4,[2,1],7,8,9]]
const newArrayFlat = array.flat(3)
let newArray=[]
console.log('Flat method',newArrayFlat);
for(let i=0; i<array.length; i++){
    
    if(array[i].length>1){
        for(let j = 0;j<array[i].length;j++){
            newArray.push(array[i][j])
        }
    }else{
        newArray.push(array[i])
    }
}
console.log('for ',newArray);