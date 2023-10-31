console.log("promises");

//Actually we will over came the issues in the callback that are
//  callbackhell, Inversion control by using the promises.

// Promise: promise object is a place holder for certain period of time
// untill we receive a value from a async operation.

// or

//  container for  a future value

// or

// A promise is a object representing the eventual completion or failure
// of  a async operation.

// this call back hell

// function callbackhell(val) {
//   console.log("outside");
//   setTimeout(function () {
//     console.log("inside", val);
//     setTimeout(function () {
//       console.log("Deep inside", val);
//     }, 6000);
//   }, 4000);
// }
// const val = 10;
// callbackhell(val);

const cart = ["shoes", "shirts", "pants"];

// here createorder is a API it will give the orderid and is input to the proceedToPayment API
// the both are async
// createorder(cart);
// proceedToPayment(orderId);

// function createOrder1(cart) {
//   console.log(cart);
// }
// createOrder1(cart);

// createOrder(cart, function (orderId) {
//   console.log(cart);
//   console.log("oder is created", orderId);
//   proceedToPayment(paymentId, function () {
//     console.log("payment Done");
//     proceedToDelivery(DeliveyId, function () {
//       console.log("Ready to Delivery");
//     });
//   });
// });

// const promise1 = createOrder(cart);
// console.log(promise1);

// In above ex proceedToPayment is executed by the createOrder API
//proceedToDelivery is executed by proceedToPayment API
// the above process is called Inversion control.

// Promise is not but a cart with data value in it({data:})
// this data object will hold the value which is return by createOrder.
// untill async opeation of createOrder the promise hold the ({data:undefined})
//once async opertion is completed that data will receive the value which is return by the createOrder API({data:OrderId})

//Here the Major diff between callback and promises is

// callBack:It once funtion (proceedToPayment) execution is depend on the another function/(createOrder)
// here proceedToPayment  is totally depend on the createOrder fun exection may it will cal twice like that

//promise:Here we are attaching  the one function (proceedToPayment) to the promise function.
//here proceedToPayment will call after data is filled with the promise object(menas after execution ofcreateOrder)
// and it will called one time only we have control on the program

// const promise = createOrder(cart);

// promise
//   .then(function () {
//     proceedToPayment(orderId);
//   })
//   .then(function () {
//     proceedToDelivery(paymentId);
//   });

//Real Promise y using ApI

// const GITHUB_API = "https://api.github.com/users/akshaymarch7";
//here user is a object it will capture the data which is return by the promise(fetch)
// const user = fetch(GITHUB_API);
// console.log(user);

// For every promise object have

// promise State:pending/fulfilled/Rejected
// prmoise result: response(store the value of the promise).
// promise objects are "immutable"

// user.then(function (data) {
//   console.log(data);
// });

// Promise chaining(must use the return in chaining for data flow properly)

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (summaryInfo) {
    return updateDetails(summaryInfo);
  });

// same in arrow function way

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))

  .then((paymentInfo) => showOrderSummary(paymentInfo))

  .then((summaryInfo) => updateDetails(summaryInfo));
