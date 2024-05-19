function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function printResult(x, y, fn) {
  console.log(`result : ${fn(x, y)}`);
}

printResult(10, 5, sum);
printResult(10, 5, sub);
printResult(10, 5, mul);
printResult(10, 5, div);
