// 指定された値の個数 (paizaランク D 相当)
// https://paiza.jp/works/mondai/sequence_search_problems/sequence_search_problems_search_value_step0

function solve(input) {
  let [, array, num] = input.trim().split('\n');
  array = array.split(' ');

  let count = array.filter(function (x) {
    return x == num;
  }).length;

  return count;
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
