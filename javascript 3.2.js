/*Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет
 есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/
 function carVipAuto (query, object) {
    for (let item in object)
    if (item === query) return true;

    return false;
}

let models = {
    Honda: "Accord",
    Lexus: "GS 350",
    Porshe: "Caynne",
}

 console.log(carVipAuto ("Honda", models))