/*
  Greetings, algorithmics!

  Today, your challenge is to figure out the number of ways to make change for a given amount of money.
  More precisely, given a number of cents and a set of coins, determine how many combinations of those coins
  sum to that number of cents.
  This is a classic algorithms problem that's common in interviews!

  Your only helper is a list of common US currency denominations.
  I didn't include half-dollars, two-dollar bills, and the like, but if you'd prefer, you can adjust
  the list of coin-values and the tests will auto-update.

  Enjoy!
*/

var coinValues = [10000, 5000, 2000, 1000, 500, 100, 50, 25, 10, 5, 1];

var makeChange = function(amount) {
  var newCoinValues = filter(coinValues, amount);
  var result = [];

  for (var i = newCoinValues.length - 1; i >= 0; i--) {
    var division, modulo, value, obj;
    value = newCoinValues[i];
    division = amount / value;
    modulo = amount % value;

    obj = {
      newCoinValues[i]..toString() : division
    }
    result.push(obj);
    if (modulo == 0)

    makeChange
  }
};

var makeChangeSub = function(array, subamount) {
  // .pop() takes last out of array and modifies array in place
  if (array.length == 0 || subamount == 0) {
    break;
  }
  var divisor = array.pop();
  var division = subamount / divisor;
  for (var i = 0; i <= division; i++) {
    newSubamount = subamount % (i * divisor);
    makeChangeSub(array, newSubamount);
  }
}

function filter(coinValues, amount) {
  var values = [];
  for (var i = coinValues.length - 1; i >= 0; i--) {
    var value = coinValues[i];
    if (value <= amount) {
      values.push(value);
    } else {
      break;
    }
  }

  return values;
}

// makeChange(1)
// => [{ '1' : 1 }]
