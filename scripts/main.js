// 
var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/banana.jpg') {
      myImage.setAttribute ('src','images/miniY.jpg');
    } else {
      myImage.setAttribute ('src','images/banana.jpg');
    }
}
//
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please Enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'BANANA is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'BANANA is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }