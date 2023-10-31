// 4 ways of doing the API calls

// 1. XMLHTTPRequest
// 2. fetch
// 3. Axios
// 4. JQuery

// 1. XMLHTTPRequest
//  Is the browser bult in object
//Default HTTPRequest return the data in text format we need to convert into JSON by using the JSON.Parse()

// console.log(window);
// console.log(window.XMLHttpRequest);

// const request = new XMLHttpRequest();
// request.open("GET", "https://jsonplaceholder.typicode.com/users1/");
// request.send();
// request.onload = () => {
//   //   console.log(request);
//   if (request.status == 200) {
//     console.log(JSON.parse(request.response));
//   } else {
//         console.log(`error code is  ${request.status}`);
//   }
// };

// fetchAPI
// it is work as a smilar manner but it is straight forward interfece by using promises
//this is also a browser built in API not calling as a object method kind of thing
//fetch as property of window global  object we can use it directly without window also
//Error handling is the drawback of fetch API call

//Template
// fetch("url")
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json);
//   });

// first approch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log(response);
//     console.log(response.status);
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json);
//   });

//second approch

// async function getUsers() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   return data;
// }
// getUsers().then((response) => {
//   console.log(response);
// });

//Axios- third party JS library
//it work in both browser and node.js
//this is also promised based HTTPrequest
// To add the axios library we need add the cdn link of axios in index.html page it make axios is the global object of window

// axios.get("https://jsonplaceholder.typicode.com/users").then(
//   (response) => {
//     console.log(response.data);
//   },
//   (err) => console.log(err)
// );

// JQuery

$(document).ready(function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    type: "GET",
    success: function (result) {
      console.log("result is ", result);
    },
    error: function (err) {
      console.log(err);
    },
  });
});
