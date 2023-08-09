const {test} = require('./test-util');

module.exports = eva => {
  // Plus operator
  test(eva, `(+ 1 5)`, 6);
  test(eva, `(+ (+ 3 2) 5)`, 10);

  // Minus operator
  test(eva, `(- 9 2)`, 7);
  test(eva, `(- 2 9)`, -7);
  test(eva, `(- (- 18 3) 6)`, 9);

  // Multiply operator
  test(eva, `(* 7 3)`, 21);
  test(eva, `(* (* 3 2) 4)`, 24);

  // Division operator
  test(eva, `(/ 9 3)`, 3);
  test(eva, `(/ 9 2)`, 4.5);
  test(eva, `(/ (/ 18 3) 2)`, 3);
  test(eva, `(/ (/ 18 4) 3)`, 1.5);
}