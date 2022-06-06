const animals = ['dog','cat', 'rabbit','hen']
console.log(animals.includes('dog'));

function solution(words, query) {
    // Tu código aquí 👈 
   rta = words.filter(item => item.includes(query))
   return rta;
}; 
console.log(solution(["ana", "santi", "nico", "anastasia"], "co"))