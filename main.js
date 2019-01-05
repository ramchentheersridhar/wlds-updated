// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCcYwaVES6_16vyzlANDK1ynzkKDw4IOQM",
  authDomain: "llds-2d8b9.firebaseapp.com",
  databaseURL: "https://llds-2d8b9.firebaseio.com",
  projectId: "llds-2d8b9",
  storageBucket: "",
  messagingSenderId: "523669237975"
};
firebase.initializeApp(config);
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var prodno = getInputVal('productno');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var password = getInputVal('pswd');
  var repassword = getInputVal('rpswd');

  // Save message
  saveMessage(name, prodno, email, phone, password, repassword);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,prodno,email,phone,password,repassword){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    prodno:productno,
    email:email,
    phone:phone,
    password:pswd,
    repassword:rpswd
  });
}

//hello Function

function hello(){
  windows.alert("Hello world");
}

//node installation
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
