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
      let arg1 = exp[1];
      if(isExpression(exp[1])) {
        const eva = new Eva();
        arg1 = eva.eval(exp[1]);
      }

      let arg2 = exp[2];
      if(isExpression(exp[2])) {
        const eva = new Eva();
        arg2 = eva.eval(exp[2]);
      }
      return arg1 + arg2;
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

function isExpression(exp) {
  return Array.isArray(exp);
}

//-----------------------------------
// Tests:

const eva = new Eva();

assert.strictEqual(eva.eval(1), 1);
assert.strictEqual(eva.eval('"hello"'), 'hello');

assert.strictEqual(eva.eval(['+', 1, 5]), 6);
assert.strictEqual(eva.eval(['+', ['+', 3, 2], 5]), 10);

console.log('All assertions passed!')

