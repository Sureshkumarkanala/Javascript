//Default value is used when absecence of the value
//we never pass the 'undefined'

// function div(m, n) {
//   console.log(n); //undefined
//   console.log(m); //undefined
//   return m / n;
// }
// div();
// console.log(div()); //NaN

// function add(x, y) {
//   return x + y;
// }
// console.log(add(5)); //NaN

// function multiply(a, b = 10) {
//   console.log(b); //if we paseed null we will get 'null' in console
//   return a * b;
// }
// console.log(multiply(2, 5));
// console.log(multiply(2)); //we not pass the value of b so default value is taken as 10
// console.log(multiply(2, null)); //0
// console.log(multiply(2, undefined)); //it will take default value

// using default parameter ganerate the emp id

// function employeeid(id) {
//   this.id = id;
// }

// function ganetareEmployeeId() {
//   return Math.floor(Math.random() * 999);
// }
// function tagEmployee(employee = new employeeid(ganetareEmployeeId())) {
//   //above line we are passing the employee ganerator function as a default parameter

//   // function tagEmployee(employee) {
//   //here we get the employee id if we didn't get we need mention default id
//   //   console.log(employee);
//   employee.dept = "Development"; //with out 'return' we will get undefined
//   return employee;
// }

// const employee = new employeeid(ganetareEmployeeId());
// console.log(tagEmployee(employee));

//Revision

function employeeid(id) {
  this.id = id;
}
function EmployeeGanerateId() {
  return Math.floor(Math.random() * 999);
}

function tagEmployeeid(employee = new employeeid(EmployeeGanerateId())) {
  employee.dept = "Dev";
  return employee;
}

const employee = new employeeid(EmployeeGanerateId());
console.log(tagEmployeeid(employee));
