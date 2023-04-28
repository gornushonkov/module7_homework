/*Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.*/
//Electric
function Electric(name) {
    this.name = name;
    this.model= String();
    this.active = false;
    this.wattage = 0;
}
Electric.prototype.turnOn = function (){
    this.active = true;
}
Electric.prototype.turnOff = function (){
    this.active = false;
}
//Lamp
Lamp.prototype = new Electric("Лампа");
function Lamp(model, wattage) {
    this.model;
    this.mode = 1;
    this.wattage = wattage;
}
Lamp.prototype.setMode = function (mode) {
    this.mode = mode;
    this.wattage *= mode;
}

//Notebook
Notebook.prototype = new Electric("Ноутбук");
function Notebook(model, wattage) {
    this.model = model;
    this.wattage = wattage;
    this.workload = 1;
}
Notebook.prototype.setWorkload = function (workload) {
    this.workload = workload;
    this.wattage *= workload;
}
//Instances
const lamp1 = new Lamp("GP Lighting", 50);
const lamp2 = new Lamp("Osram", 30);
const lenovo = new Notebook("Lenovo", 100);
const asus = new Notebook("Asus", 90);

lamp1.turnOn();
lamp2.turnOn();
lamp2.setMode(2);
lenovo.turnOff();
asus.turnOn();
asus.setWorkload(3);

console.log(getWattage([lamp1, lamp2, lenovo, asus]));

function getWattage(devices) {
    let answer = "В розетку включены: \n";
    let wattage = 0;

    devices.forEach((element) => {
        if (element.active) {
            answer += element.name + " \"" + element.model + "\" (" + element.wattage + " Вт)\n";
            wattage += element.wattage;
        }
    });

    answer += "Потребляемая мощность: " + wattage + " Вт.";

    return answer;
}