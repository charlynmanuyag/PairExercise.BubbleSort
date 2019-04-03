// function bubbleSort(arr) {

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // let temp = arr[j];
//         // arr[j] = arr[j + 1];
//         // arr[j + 1] = temp;
//         [arr[j], arr[j + 1]] = swap(arr[j], arr[j + 1]);
//       }
//     }
//   }
//   return arr;
// }

// function swap(a, b) {
//   return [b, a];
// }

function comparatorFunc(a, b) {
  if (a < b) {
    return -1;
  }
  if (b < a) {
    return 1;
  }
  return 0;
}

function swap(a, b) {
  return [b, a];
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      let curr = arr[j];
      let next = arr[j + 1];
      if (comparatorFunc(curr, next) === 1) {
        [arr[j], arr[j + 1]] = swap(curr, next);
      }
      // if (arr[j] > arr[j + 1]) {
      // let temp = arr[j];
      // arr[j] = arr[j + 1];
      // arr[j + 1] = temp;

      // }
    }
  }
  return arr;
}
