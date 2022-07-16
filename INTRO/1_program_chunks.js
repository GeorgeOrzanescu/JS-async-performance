var XMLHttpRequest = require("xhr2");

function ajax() {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  httpRequest.send();

  //console.log(httpRequest.response);
  console.log("Inside ajax request function!");
  return httpRequest.response;
}

const responseData = ajax();
console.log("response data for ajax ");
console.log(responseData); // will be null or undefined

// Simplest way of "waiting" for the response is to use a
// callback fuction

function ajax_withCallback(callback) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  httpRequest.send();

  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
      callback(httpRequest.response);
    }
  };
  console.log("Inside ajax request function with callback!");
}

function displayResData(data) {
  console.log(data);
}

ajax_withCallback(displayResData);
