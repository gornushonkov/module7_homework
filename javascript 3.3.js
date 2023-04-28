/*Написать функцию, которая создает пустой объект, но без прототипа.*/
function createEmptyObj() {
    return {};
}

let object = createEmptyObj();

console.log(Object.getPrototypeOf(object));