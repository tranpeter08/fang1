'use strict';
const orders = (arr) => {
  const priority = [];
  const reg = [];
  const others = [];

  const regD = /^([0-9]){3}([0-9]){3}([0-9]){3}$/;
  const regW = /^([a-z]){3}\s([a-z]){3}\s([a-z]){3}$/i;

  while (arr.length) {
    const order = arr.shift();
    const label = order.slice(4);

    if (regD.test(label)) {
      reg.push(order);
    } else if (regW.test(label)) {
      priority.push(order);
    } else {
      others.push(order);
    }
  }

  priority.sort((a, b) => {
    const labelA = a.slice(4);
    const labelB = b.slice(4);
    const idA = a.slice(0, 3);
    const idB = b.slice(0, 3);

    if (labelA < labelB || labelA === labelB && idA < idB) {
      return -1;
    }
  });

  return [...priority, ...reg, ...others];
}

module.exports = orders;