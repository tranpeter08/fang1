const orders = require('./orders');

const test1 = [
  'aad xxx xxx xxx',
  'aaa xxx xxx xxx',
  'aab xxx xxx xxx',
  'xxx xxx xxx xxa',
  'xxx xxx xxx xxb',
  'xxx cxx xxx xxx',
  'ios 433 347 009',
  'oip 000 000 000',
  'err 123 aaa 444',
  'aaa aaa aaa aaz',
  'zzz zzz zzz zza'
];

const sol1 = [
  'aaa aaa aaa aaz',
  'xxx cxx xxx xxx',
  'xxx xxx xxx xxa',
  'xxx xxx xxx xxb',
  'aaa xxx xxx xxx',
  'aab xxx xxx xxx',
  'aad xxx xxx xxx',
  'zzz zzz zzz zza',
  'ios 433 347 009',
  'oip 000 000 000',
  'err 123 aaa 444'
]

const test2 = [
  'aaa 999 999 999',
  'aaf zzz zzz zzz',
  'aac aaa aaa aaa',
  'dsd 000 111 222',
  'aab aaa aaa aaa',
  'aaa bbb bbb ccc',
  'ddd 123 123 123',
  'aaa ccc bbb bbb'
];

const sol2 = [
  "aab aaa aaa aaa",
  "aac aaa aaa aaa",
  "aaa bbb bbb ccc",
  "aaa ccc bbb bbb",
  "aaf zzz zzz zzz",
  "aaa 999 999 999",
  "dsd 000 111 222",
  "ddd 123 123 123"
];

const test3 = [
  'wda dfu too eow',
  'kkj dfu too eow',
  'fvg 231 431 837',
  'ffe fiw qop sip',
  'fqo fiw pok sip',
  'ios 433 347 009'
];

const sol3 = [
  "kkj dfu too eow",
  "wda dfu too eow",
  "fqo fiw pok sip",
  "ffe fiw qop sip",
  "fvg 231 431 837",
  "ios 433 347 009"
];

describe('orders', () => {
  it('sorts the orders', () => {
    expect(orders(test1)).toEqual(sol1);
    expect(orders(test2)).toEqual(sol2);
    expect(orders(test3)).toEqual(sol3);
  });
});