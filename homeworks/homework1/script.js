// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
//  найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами:
// increment и decrement. Метод increment должен увеличивать значение счетчика на 1,
// а метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
  let count = 0;
  return {
    increment: () => {
      return (count += 1);
    },
    decrement: () => {
      return (count -= 1);
    },
  };
}

let count = createCounter();
console.log(count.increment());
console.log(count.increment());
console.log(count.increment());
console.log(count.decrement());

// 3) Напишите рекурсивную функцию findElementByClass,
// которая принимает корневой элемент дерева DOM и название класса в качестве аргументов
// и возвращает первый найденный элемент с указанным классом в этом дереве.

const task3 = () => {
  const findElementByClass = (rootElement, searchedClass) => {
      if (rootElement.hasChildNodes()) {
          if (rootElement.querySelector(searchedClass)) {
              return rootElement.querySelector(searchedClass);
          } else {

              [...rootElement.children].forEach((element) => findElementByClass(element, searchedClass));
          }
          return null;
      }
  }
  console.log(findElementByClass(document.querySelector('body'), '.twoPointTwo'));
}

task3();
