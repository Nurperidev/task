// Задание №1
// Создайте объект в переменной programmer. Дайте объекту имя,
// фамилию, возраст, язык программирования и зарплату. Выведите каждое свойство объекта по очереди в консоль.
// let programmer = {
//   name: "joon",
//   lastname: "snow",
//   age: "23",
//   programming: "Javsscript",
//   salary: "20000",
// };
// console.log(programmer.name);
// console.log(programmer.lastname);

// console.log(programmer.age);
// console.log(programmer.programming);
// console.log(programmer.salary);
// ПИСАТЬ КОД ЗДЕСЬ

// Задание №2
// Запросите у пользователя ввести два числа и верните ему сумму этих двух чисел.
// Если сумма больше 10 и в то же время меньше 20 то, умножьте на 5. Если же сумма больше 20 и меньше 50, то разделите на 3.
// Иначе прибавьте 10.
// Для решения используйте функции: prompt и parseInt или опертаор +.
// Ответ может быть и десятичным числом, и выведите это конечное число.
// Например:
// let firstNum = prompt("Введите первое число");
// let secondNum = prompt("Введите второе число");
// let sum = firstNum + secondNum;
// if (sum > 10 && sum < 20) {
//   sum *= 5;
// } else if (sum > 20 && sum < 50) {
//   sum /= 3;
// } else sum += 10;

// alert(`Результат: ${sum}`);

// ПИСАТЬ КОД ЗДЕСЬ

// Задание №3
// Создайте программу, которая выводит пирамиду из чисел, например:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
for (let i = 1; i <= 4; i++) {
  let res = "";
  for (let j = 0; j < i; j++) {
    res += i + " ";
  }
  console.log(res);
}
