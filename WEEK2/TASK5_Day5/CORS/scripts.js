// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
var url_string = 'https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';
// // Open a new connection, using the GET request on the URL endpoint
var proxy="https://cors-anywhere.herokuapp.com/";


fetch(proxy+url_string)
  .then(res=>res.json())
  .then(data=>console.log(data));


request.open('GET',proxy+url_string , true)
request.send();
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data);
}





