const elements = ["water", "eart", "fire"];
const separator = "--";
let elementFinal = "";
elementFinal = elements.join(separator);
console.log(elementFinal);
//use to generate a url

const title = "Curso Programación En JavaScript";
let url = title.split(" ").join("-").toLocaleLowerCase();
console.log(url);
