const {test} = require('./test-util');

module.exports = eva => {
  // < less than operator
  test(eva, `(< 1 5)`, true);
  test(eva, `(< 5 1)`, false);

  // <= less than or equal operator
  test(eva, `(<= 1 5)`, true);
  test(eva, `(<= 5 1)`, false);

  // > greater than operator
  test(eva, `(> 1 5)`, false);
  test(eva, `(> 5 1)`, true);

  // >= greater than or equal operator
  test(eva, `(>= 1 5)`, false);
  test(eva, `(>= 5 1)`, true);

  // = equal operator
  test(eva, `(= 1 5)`, false);
  test(eva, `(= 5 5)`, true);
}