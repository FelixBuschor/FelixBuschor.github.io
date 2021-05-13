let myImage = document.querySelector('img')
myImage.onclick=function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-image1.jpg') {
        myImage.setAttribute('src','images/test-image2.jpg');
    } else {
        myImage.setAttribute('src','images/test-image1.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Name:');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'JS, ' + myName
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'JS, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}