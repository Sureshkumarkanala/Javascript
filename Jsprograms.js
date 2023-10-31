const arr = ["ArunT", "Yamuna", "Suresh"];

function a() {
  if (a instanceof Object == true) {
    console.log("inisde the instance of fun");
  }
}
a();
console.log(a instanceof Object);

// console.log(arr);
// arr.push("Alekhya");
// console.log(arr);
// console.log(typeof arr);
// console.log(Array.isArray(arr));

// arr.push();

// //object, array inside obj,function inside obj,obj inside obj

// const empobj = {
//   id: 123,
//   firstname: "Arun",
//   lastname: "Kumar",
//   age: 33,
//   DOB: "10/10/1990",
//   address: { city: "nellore", State: "AP" },
//   skills: ["html", "css", "js"],
//   fullnamein: function () {
//     return `${this.firstname}+"template literal"+${this.lastname}`;
//   },

//   fullname: function (a, b) {
//     return a + b;
//   },
// };
// console.log(typeof empobj);
// console.log(empobj instanceof Object);

// console.log("function data from inside obj", empobj.fullnamein());
// console.log("function data from outside", empobj.fullname("Suresh", "kumar"));

// const outside = empobj.fullname("yamuna", "kumari");
// console.log(outside);

// //Destructring of a obj

// const { firstname, age, address } = empobj;
// console.log(address);

// const { skills } = empobj;
// const killset = skills;

// console.log(killset);

// //Array destrucring
// const [name1, name2, name3] = arr;
// console.log(name1);
// console.log(name2);
// console.log(name3);

// //Array of objects

// const employees = [
//   {
//     id: 101,
//     name: "Arun",
//     address: "nlr",
//     skills: ["HTML", "CSS"],
//   },
//   {
//     id: 102,
//     name: "Yamuna",
//     address: { city: "nlr1", State: "AP" },

//     skills: ["HTML", "CSS", "JS"],
//   },
//   {
//     id: 103,
//     name: "Suresh",
//     address: { city: "nlr2", State: "AP" },

//     skills: ["HTML", "JS"],
//   },
//   {
//     id: 104,
//     name: "Alekya",
//     address: { city: "nlr3", State: "AP" },
//     skills: ["HTML", "CSS", "JS", "REACTJS"],
//   },

//   {
//     id: 105,
//     name: "buddy",
//     address: { city: "nlr4", State: "AP" },
//     skills: ["HTML", "JS", "REACTJS"],
//   },
// ];

// console.log(employees);
// console.log(employees[2].skills);
// console.log(employees[2].skills[1]);
// console.log(employees[2].address.State);

// //Creatiing the JSON js obj/arr can't be access by the DB we need to change it as JSON structure
// //by using the stringify

// const employeeJSON = JSON.stringify(employees);

// console.log(employeeJSON);

// const employeeobjJSON = JSON.stringify(empobj);

// console.log("obj JSON", employeeobjJSON);

// //To Convert the JSON file in to array/obj by using the parse

// const empArr = JSON.parse(employeeJSON);
// console.log(empArr);

// const employeeobj = JSON.parse(employeeobjJSON);
// console.log(employeeobj);

// //FOR OF
// for (inddata of empArr) {
//   console.log("individual data ", inddata.id);
//   console.log("individual data ", inddata.name);
// } //FOR EACH

// empArr.forEach((element) => {
//   console.log("By using foreach using Arrow function", element.address);
// });

// console.log(empArr);
// empArr.forEach(function (element) {
//   console.log("By using foreach with function keyword", element.id);
//   if (element.id == 101) {
//     empArr.push({ id: 1001, name: "AAAA" });
//   } else {
//     empArr.push({ id: 1002, name: "YYYY" });
//   }
//   console.log(empArr);
// });

// console.log(empArr);

// const empind = empArr
//   .filter((emp) => {
//     return emp.id == 102;
//   })
//   .map((empi) => {
//     return empi.name;
//   });
// console.log(empind);

// function a(arr) {
//   const objorNot = typeof arr;
//   console.log(objorNot);

//   const AorNot = Array.isArray(arr);
//   console.log(AorNot);
//   if (AorNot == true) {
//     console.log("array as an arguement", arr);
//   } else if (objorNot == "  object") {
//     console.log("object is an Argument", arr);
//   }
// }

// a(arr);
// a(empobj);

// //Constructor of an Object Here object is "Deptdata","DeptData" and Arun and yamuna are instance of it

// function Deptdataold(Dept, JDate, Gender) {
//   (this.Dept = Dept), (this.JDate = JDate), (this.Gender = Gender);
// }

// const Arun = new Deptdataold("ECE", 10 / 10 / 2000, "M");
// console.log(Arun);

// function DeptDatanew(Dept, ODC, Seatnum, EnterDate) {
//   this.Dept = Dept;
//   this.Seatnum = Seatnum;
//   this.ODC = ODC;
//   this.EnterDate = new Date(EnterDate);
// }

// const yamuna = new DeptDatanew("Emullasion", "Serium", 110, "12/15/2001");
// console.log(yamuna);
// const suresh = new DeptDatanew("DEV", "HCL", 10, "11/20/2011");
// console.log(suresh);

// //Prototype property is used to add another property to  the Constructor obj(Added to the All the objs)

// DeptDatanew.prototype.joindate = "01/01/2000";
// DeptDatanew.prototype.salary = 100000;
// DeptDatanew.prototype.location = "HYD";
// console.log("Proto type Suresh", suresh);
// console.log("Proto type yamuna", yamuna);

// DeptDatanew.prototype.getsalary = function () {
//   return this.salary;
// };

// console.log(suresh.getsalary());

// //here we can't use arrow functions
// DeptDatanew.prototype.getjoindate = function () {
//   return this.joindate;
// };
// console.log(yamuna.getjoindate());

// DeptDatanew.prototype.getEnteryear = function () {
//   return this.EnterDate.getFullYear();
// };

// console.log("Enter year", yamuna.getEnteryear());
// console.log("Enter year", suresh.getEnteryear());

// DeptDatanew.prototype.getEnterDate = function () {
//   return this.EnterDate.getDate();
// };
// console.log(yamuna.getEnterDate());
// console.log(suresh.getEnterDate());

// DeptDatanew.prototype.getEnterMonth = function () {
//   return this.EnterDate.getMonth();
// };
// console.log(yamuna.getEnterMonth());
// console.log(suresh.getEnterMonth());
