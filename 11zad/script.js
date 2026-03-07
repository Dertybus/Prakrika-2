// 1.1 — при загрузке меняем текст параграфа
document.getElementById("demo").innerHTML = "Привет Иван Иванов, это JavaScript!";

// 1.4 — функция из внешнего файла (п. 1.3)
function changeText() {
  document.getElementById("demo").innerHTML = "Функция Иван Иванов сработала!";
}

// 1.5 — вывод в консоль при загрузке
console.log("Страница загружена для Иван Иванов!");

// 1.6 — переменные и типы данных
let name = "Иван";
const age = 25;
let isStudent = true;
console.log(name, age, isStudent);

var fruits = ["яблоко", "банан", "апельсин"];
console.log("Первый элемент:", fruits[0], "Последний:", fruits[fruits.length - 1]);

var person = { firstName: "Иван", lastName: "Иванов", age: 25 };
console.log("firstName:", person.firstName);

// 1.7 — арифметика
var a = 10, b = 3;
console.log("a+b:", a + b, "a-b:", a - b, "a*b:", a * b, "a/b:", a / b, "a%b:", a % b);
a += 5; b -= 1; console.log("после += и -=:", a, b);
a *= 2; b /= 2; console.log("после *= и /=:", a, b);

// 1.8 — логические операторы
var x = 15, y = 20;
console.log("x>y:", x > y, "x<y:", x < y, "x==y:", x == y, "x!==y:", x !== y);
console.log("x<20 && y>10:", x < 20 && y > 10);

// 1.9 — динамическая типизация
var value = 100;
console.log("typeof value (число):", typeof value);
value = "Сто";
console.log("typeof value (строка):", typeof value);
