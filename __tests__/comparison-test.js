const assert = require('assert');
const testUtil = require('./test-util');

module.exports = eva => {
  // < less than operator
  testUtil.test(eva, `(< 1 5)`, true);
  testUtil.test(eva, `(< 5 1)`, false);

  // <= less than or equal operator
  testUtil.test(eva, `(<= 1 5)`, true);
  testUtil.test(eva, `(<= 5 1)`, false);

  // > greater than operator
  testUtil.test(eva, `(> 1 5)`, false);
  testUtil.test(eva, `(> 5 1)`, true);

  // >= greater than or equal operator
  testUtil.test(eva, `(>= 1 5)`, false);
  testUtil.test(eva, `(>= 5 1)`, true);

  // = equal operator
  testUtil.test(eva, `(= 1 5)`, false);
  testUtil.test(eva, `(= 5 5)`, true);
}