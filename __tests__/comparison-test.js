const assert = require('assert');

module.exports = eva => {
  // < less than operator
  assert.strictEqual(eva.eval(['<', 1, 5]), true);
  assert.strictEqual(eva.eval(['<', 5, 1]), false);

  // <= less than or equal operator
  assert.strictEqual(eva.eval(['<=', 1, 5]), true);
  assert.strictEqual(eva.eval(['<=', 5, 1]), false);

  // > greater than operator
  assert.strictEqual(eva.eval(['>', 1, 5]), false);
  assert.strictEqual(eva.eval(['>', 5, 1]), true);

  // >= greater than or equal operator
  assert.strictEqual(eva.eval(['>=', 1, 5]), false);
  assert.strictEqual(eva.eval(['>=', 5, 1]), true);

    // = equal operator
    assert.strictEqual(eva.eval(['=', 1, 5]), false);
    assert.strictEqual(eva.eval(['=', 5, 5]), true);
}