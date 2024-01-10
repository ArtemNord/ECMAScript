// Задание 1 (тайминг 20 минут)
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]

function mergeArrays(array1, array2) {
  const array = [...array1, ...array2];
  return array;
}

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5)); // Ожидаемый
// результат: [1, 2, 3, 4, 5]

// function removeDuplicates(...args) {  // ver1
//   return args.filter((item, id) => args.indexOf(item) == id);
// }

function removeDuplicates(...args) {
  const setArgs = new Set(args); // ver2
  console.log(setArgs);
  return [...setArgs];
}

// Задание 2 (Чистые функции 25минут)

// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

function getEvenNumbers(array) {
  return array.filter((num) => num % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

function calculateAverage(array) {
  return array.reduce((acc, item) => acc + item, 0) / array.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5, 6, 7, 8]));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

function capitalizeFirstLetter(string) {
  // 1.11 time
  const arr = string.split(" ");
  const arr2 = arr.map((item) => {
    return item[0].toUpperCase() + item.slice(1);
  });
  return arr2.join(" ");
}

console.log(
  capitalizeFirstLetter("качестве аргумента и возвращает новую строку")
);

// Задание 3 (Замыкания 20 минут)

// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

const createCalculator = (incomingNumber) => {
  return {
    add: (arg) => {
      incomingNumber += arg;
    },
    subtract: (arg) => {
      incomingNumber -= arg;
    },
    getNumber: () => {
      return incomingNumber;
    },
  };
};

let addres = createCalculator(1);
addres.add(2);
console.log(addres.getNumber());

// Задание 4 (Лексический контекст 15 минут)

// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:

function createGreeting(name) {
  return () => {
    console.log(`Hello, ${name}`);
  };
}

const greeting = createGreeting("John");
greeting(); // Ожидаемый результат: "Hello, John!"

// Задание 5 (тайминг 15 минут)
// 1. Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid("password")); // Ожидаемый результат:
// false;
// console.log(isPasswordValid("secret")); // Ожидаемый результат: true

function createPasswordChecker(passwordLength) {
  return (password) => {
    return password.length < passwordLength;
  };
}

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid("password")); // Ожидаемый результат: false
console.log(isPasswordValid("secret")); // Ожидаемый результат: true

// Задание 6 (Рекурсия 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)

function sumDigits(num) {
  if (num < 10) {
    return num;
  }
  return (num % 10) + sumDigits(Math.trunc(num / 10));
}

console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)
