//StrictMode
// Global variable
function foo() {
  bar = 1;
}

foo();
console.log(bar); // 1

// Local variable
function foo() {
  var bar = 1; // bar chỉ có hiệu lực bên trong function
  console.log(bar); // 1
}

foo();
console.log(bar); // ReferenceError: bar is not defined
