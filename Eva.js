const assert = require('assert');

/**
 * Eva interpreter
 */

class Eva {
  eval(exp) {
    if(isNumber(exp)) {
      return exp;
    }

    if(isString(exp)) {
      return exp.slice(1, -1);
    }

    if(exp[0] === '+') {
      return this.eval(exp[1]) + this.eval(exp[2]);
    }

    if(exp[0] === '-') {
      return this.eval(exp[1]) - this.eval(exp[2]);
    }

    if(exp[0] === '*') {
      return this.eval(exp[1]) * this.eval(exp[2]);
    }

    if(exp[0] === '/') {
      return this.eval(exp[1]) / this.eval(exp[2]);
    }

    throw 'Unimplemented';
  }
}

function isNumber(exp) {
  return typeof exp === 'number';
}

function isString(exp) {
  return typeof exp === 'string' && 
    exp[0] === '"' && 
    exp.slice(-1) === '"';
}

//-----------------------------------
// Tests:

const eva = new Eva();

assert.strictEqual(eva.eval(1), 1);
assert.strictEqual(eva.eval('"hello"'), 'hello');


// Plus operator
assert.strictEqual(eva.eval(['+', 1, 5]), 6);
assert.strictEqual(eva.eval(['+', ['+', 3, 2], 5]), 10);

// Minus operator
assert.strictEqual(eva.eval(['-', 9, 2]), 7);
assert.strictEqual(eva.eval(['-', 2, 9]), -7);
assert.strictEqual(eva.eval(['-', ['-', 18, 3], 6]), 9);

// Multiply operator
assert.strictEqual(eva.eval(['*', 7, 3]), 21);
assert.strictEqual(eva.eval(['*', ['*', 3, 2], 4]), 24);

// Division operator
assert.strictEqual(eva.eval(['/', 9, 3]), 3);
assert.strictEqual(eva.eval(['/', 9, 2]), 4.5);
assert.strictEqual(eva.eval(['/', ['/', 18, 3], 2]), 3);
assert.strictEqual(eva.eval(['/', ['/', 18, 4], 3]), 1.5);
assert.strictEqual(eva.eval(['/', ['/', 18, 4.5], 2]), 2);




console.log('All assertions passed!')

