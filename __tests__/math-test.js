const assert = require('assert');
const testUtil = require('./test-util');

module.exports = eva => {
  // Plus operator
  testUtil.test(eva, `(+ 1 5)`, 6);
  testUtil.test(eva, `(+ (+ 3 2) 5)`, 10);

  // Minus operator
  testUtil.test(eva, `(- 9 2)`, 7);
  testUtil.test(eva, `(- 2 9)`, -7);
  testUtil.test(eva, `(- (- 18 3) 6)`, 9);

  // Multiply operator
  testUtil.test(eva, `(* 7 3)`, 21);
  testUtil.test(eva, `(* (* 3 2) 4)`, 24);

  // Division operator
  testUtil.test(eva, `(/ 9 3)`, 3);
  testUtil.test(eva, `(/ 9 2)`, 4.5);
  testUtil.test(eva, `(/ (/ 18 3) 2)`, 3);
  testUtil.test(eva, `(/ (/ 18 4) 3)`, 1.5);
}