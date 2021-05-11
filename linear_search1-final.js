// 指定された値の位置 2 (paizaランク D 相当)
// https://paiza.jp/works/mondai/sequence_search_problems/sequence_search_problems_search_value_step2

function solve(input) {
  let [, array, num] = input.trim().split('\n');
  array = array.split(' ');

  let index = array.indexOf(num);
  let result = [];
  while (index != -1) {
    result.push(index + 1);
    index = array.indexOf(num, index + 1);
  }

  return result.join('\n');
}

// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
// console.log(solve(input));

const input = `
5
-3 2 0 -1 2
2
`;

console.log(solve(input));

// 入力例1
// 5
// -3 2 0 -1 2
// 2

// 出力例1
// 2
