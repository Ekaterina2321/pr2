'use strict';

let name;
let admin;
name = 'Джон';
admin = name;
alert(admin);


let nameCity = prompt('Введите название города');
let year = prompt('Год образования города');
let population = prompt('Население города');
let realYear = 2024;
let result = realYear - year;

alert(`Городу ${nameCity} исполнилось ${result} лет с момента его образования. Население - ${population} человек`);


let r = prompt("Введите радиус круга");
let S = Math.PI * (r * r);
alert(`Площадь круга - ${S}`);


let num = +prompt("Введите первое число");
let num2 = +prompt("Введите второе число");

let sum = num + num2;
let raz = num - num2;
let umnoj = num * num2;
let del = num / num2;

alert(`Сумма = ${sum} , Разность = ${raz} , Произведение чисел = ${umnoj} , Деление чисел = ${del}`);