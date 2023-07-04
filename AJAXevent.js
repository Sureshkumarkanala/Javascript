//AJAX- Asynchronous javascript and XML
//  AJAX- Helps in fetching  the data from the  remote webserver in Asynchronous way
//it will load the data in asynchronous way without page refresh
//Data can be in the form of JSON, XML

//AJAX- Methods
// Create XMLHttpRequest object
// 1.let xhr=     new XMLHttpRequest()

// 2.Create request/specifies the object with that object open() method
// open(method,url,async,username,password)-username,password-optional, async is boolean(true(async)/false(sync))

//method-GET,DELETE,UPDATE,(To send the data to the server-PUT,POST) url-server address(file location)
//3. send request to the server  send() method  with no parameter -used for GET Requests and Requesting the data from the server
//send(string)-send the data to the server by using the POST method

//4.setRequestHeader-Add a lable/value pair to the Header to be sent(Extra info related to the POST method ex: text, img , text file..)

//5.abort()-cancel the current Request in middile of the process

//6.getAllResponseHeaders()-Returns the Header information
//7.getResponseHeader()-Returns specific header information

// All above 7 or methods

//XMLHttpRequet-Properties

// 1.onload-when the request is complete and the response is fully downloaded;
// 2.onreadystatechange-Defines a function to be called when the readyState property changes  ;
// 3.onprogress-Triggers periodically  while the response is being downloaded, reports how much has been downloaded
// 4.readyState-Hold the status of the XMLHttpRequest
//    0: Request not initialized
//    1: server connection established
//    2:Request received
//    3:processing request
//    4:request finished and response is ready.

// 5.responseText-Returns the response data as a string
// 6.responseXML-returns the response data as XML data
// 7.status -
// 200 - OK;
// 403 - Forbidden;
// 404 - NotFound;

// 8.statusText-Returns the status text ("OK" or "NotFound")

// let btn = document.getElementById("btn");

// let impdata = document.getElementById("impdata");

// btn.addEventListener("click", loaddata);

// function loaddata() {
//   let xhr = new XMLHttpRequest();

//   xhr.open("GET", "AJAXText.txt", true);

//   xhr.onprogress = function () {
//     impdata.innerText = "Loading.....";
//   };
//   xhr.send();

//   xhr.onLoad = function () {
//     console.log(xhr.responseText);
//     impdata.innerText = xhr.responseText();
//   };
// }

// *************************************************************

// let btn = document.getElementById("btn");

// let impdata = document.getElementById("impdata");

// btn.addEventListener("click", loaddata);

// function loaddata() {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "AJAXjson.json", true);
//   xhr.send();
//   xhr.onprogress = function () {
//     impdata.innerText = "Loading.....";
//   };

//   xhr.onload = function () {
//     if (xhr.status == 200) {
//       let result = xhr.responseText;
//       result = JSON.parse(result);
//       console.log(result);

//       for (key in result) {
//         console.log(key);
//         impdata.innerHTML= result[key];
//       }
//     } else {
//       impdata.innerText = "file Not found";
//     }

// let str = `<table border= '2'><tr>`;

// for (key in result) {
//   str = str + `<th>${key}</th>`;
// }
// str = str + "</tr> <tr>";
// for (key in result) {
//   str = str + `<td>${result[key]}</td>`;
// }
// str = str + "</tr> </table>";
// console.log(str);
//   };
// }

// ************************************************************

// let btn = document.getElementById("btn");

// let impdata = document.getElementById("impdata");

// btn.addEventListener("click", loaddata);

// function loaddata() {
//   let xhr = new XMLHttpRequest();
//   // xhr.open("GET", "https://restcountries.com/v3.1/all", true);
//   xhr.open("GET", "https://restcountries.com/v3.1/name/Kingdom of Spain", true);
//   xhr.send();
//   xhr.onprogress = function () {
//     impdata.innerText = "Loading.....";
//   };

//   xhr.onload = function () {
//     if (xhr.status == 200) {
//       let result = xhr.responseText;
//       result = JSON.parse(result);
//       console.log(result);
//       let [country] = result;

//       impdata.innerHTML = `<img src=${country.flags.png}></img>`;
//     } else {
//       impdata.innerText = "Invalid Request";
//     }

// let str = `<table border= '2'><tr>`;

// for (key in result) {
//   str = str + `<th>${key}</th>`;
// }
// str = str + "</tr> <tr>";
// for (key in result) {
//   str = str + `<td>${result[key]}</td>`;
// }
// str = str + "</tr> </table>";
// console.log(str);
//   };
// }

// ***************************************************************************

let btn = document.getElementById("btn");

let impdata = document.getElementById("impdata");

btn.addEventListener("click", loaddata);
let cname = document.getElementById("countyname");

function loaddata() {
  console.log("cname.value", cname.value);
  if (cname.value) {
    let xhr = new XMLHttpRequest();
    let url = `https://restcountries.com/v3.1/name/${cname.value}`;

    xhr.open("GET", "https://restcountries.com/v3.1/all", true);
    // xhr.open("GET", "url", true);
    xhr.send();
    xhr.onprogress = function () {
      impdata.innerText = "Loading.....";
    };

    xhr.onload = function () {
      if (xhr.status == 200) {
        let result = xhr.responseText;
        result = JSON.parse(result);
        console.log(result);
        let [country] = result;

        impdata.innerHTML = `<img src=${country.flags.png} ></img> ${country.altSpellings}`;
      } else {
        impdata.innerHTML = "Invalid Request";
      }
    };

    // let str = `<table border= '2'><tr>`;

    // for (key in result) {
    //   str = str + `<th>${key}</th>`;
    // }
    // str = str + "</tr> <tr>";
    // for (key in result) {
    //   str = str + `<td>${result[key]}</td>`;
    // }
    // str = str + "</tr> </table>";
    // console.log(str);
  }
}
