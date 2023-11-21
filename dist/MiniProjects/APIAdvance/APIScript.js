console.log("types of API calls");

// 0   UNSENT             Client has been created. open() not called yet

// 1   OPENED              open() has been called

// 2   HEADERS_RECEIVED    send () has been called, and headers and status are available

// 3   LOADING              Downloading; responseText holds the partial data

// 4    DONE                The operation is completed.

function XMLApicall() {
  console.log("XML Request");
  const requesturl = "https://api.github.com/users/sureshkumarkanala";
  const xhr = new XMLHttpRequest();
  console.log(xhr.readyState);
  xhr.open("GET", requesturl);
  xhr.onreadystatechange = function () {
    const state = xhr.readyState;
    if (state == 1) {
      console.log("OPENED");
    } else if (state == 2) {
      console.log("HEADERS_RECEIVED");
    } else if (state == 3) {
      console.log("LOADING DATA");
    } else if (xhr.readyState == 4) {
      console.log(this.responseText);
      const data = JSON.parse(this.responseText);
      let username = data.login;
      console.log(username);
    }
  };
  xhr.send();
}

// function fetchApicall() {
//   console.log("Fetch API call");
//   fetch("https://api.github.com/users/sureshkumarkanala")
//     .then((response) => {
//       let data = response;
//       console.log("API response is", data);
//       console.log("API URL is ", data.body);
//       return data.headers;
//     })
//     .then((details) => {
//       console.log("details is ", details);
//     });
// }
