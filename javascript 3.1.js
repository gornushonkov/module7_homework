/*Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
 Данная функция не должна возвращать значение.*/
 let carModels = {
     Honda: "Accord",
     Lexus: "GS 350",
     Porshe: "Caynne",
 }

 let newCarModels = Object.create(carModels);
 newCarModels.Honda = "Civic";
 newCarModels.Lexus = "IS 250";
 newCarModels.Porshe = "911";

 logObject(newCarModels);

 function logObject(object) {
     for (let item in object) {
         if (object.hasOwnProperty(item))
         console.log(item + ": " + object[item]);
     }
 }