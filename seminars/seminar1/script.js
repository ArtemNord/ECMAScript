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
    item[0].toUpperCase() + item.slice(1);
  });
  return arr2.join(" ");
}

console.log(
  capitalizeFirstLetter("качестве аргумента и возвращает новую строку")
);
