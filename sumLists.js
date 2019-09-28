function sumList(list1, list2, maxVal) {
  const counts = {};

  for (let [id1, val1] of list1) {
    for (let [id2, val2] of list2) {
      counts[`${id1},${id2}`] = val1 + val2;
    }
  }

  console.log(counts);
};

const test1_1 = [
  [1 ,1],
  [2, 1],
  [3,2]
];

const test1_2 = [
  [1 ,9],
  [2, 9],
  [3,1]
];

const test2_1 = [
  [1 ,9],
  [2, 1],
  [3,8]
];

const test2_2 = [
  [1 ,4],
  [2, 1],
  [3,3]
];

console.log(sumList(test1_1, test1_2, 10));
console.log(sumList(test2_1, test2_2, 10));