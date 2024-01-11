// const arr = [3, 5, 10, 12, 3];

// function max(param1, param2, ...rest) {
//   if (param1 > param2) {
//     console.log(param1);
//   } else {
//     console.log(param2);
//   }
//   console.log(rest);
// }

// console.log(max(...arr));

let count = 0;

const upCount = (params) => {
  let params = 3;
  return count + params;
};

console.log(upCount());
// console.log(params); - не можем получить переменную из функции
