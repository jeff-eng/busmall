"use strict";
//Object Constructor for creating product objects
function Product (productName, filePath, clicks, timesDisplayed) {
  this.productName = productName;
  this.filePath = filePath;
  this.clicks = 0;
  this.timesDisplayed = 0;
}

//Create instances
var bag = new Product('bag', 'img/bag.jpg');
var banana = new Product('banana', 'img/banana.jpg');
var boots = new Product('boots', 'img/boots.jpg');
var chair = new Product('chair', 'img/chair.jpg');
var cthulhu = new Product('cthulhu', 'img/cthulhu.jpg');
var dragon = new Product('dragon', 'img/dragon.jpg');
var pen = new Product('pen', 'img/pen.jpg');
var scissors = new Product('scissors', 'img/scissors.jpg');
var shark = new Product('shark', 'img/shark.jpg');
var sweep = new Product('sweep', 'img/sweep.png');
var unicorn = new Product('unicorn', 'img/unicorn.jpg');
var usb = new Product('usb', 'img/usb.gif');
var watercan = new Product('water can', 'img/water-can.jpg');
var wineglass = new Product('wine glass', 'img/wine-glass.jpg');

//Put instances of objects into an array
var productsList = [bag, banana, boots, chair, cthulhu, dragon, pen, scissors, shark, sweep, unicorn, usb, watercan, wineglass];

//Assigning variable names to each product displayed
var productLeft = document.getElementById('productLeft');
var productCenter = document.getElementById('productCenter');
var productRight = document.getElementById('productRight');

//Create an event listener that responds to the click on an image, then records the click to the object and then starts a function that randomly displays another set of images.
productLeft.addEventListener('click', handleClickOnProductLeft);
productCenter.addEventListener('click', handleClickOnProductCenter);
productRight.addEventListener('click', handleClickOnProductRight);

// productRight.src = productsList[0].filePath;

//Declare global variables to store the random numbers generated within the randomMaker function
var randomNumLeft, randomNumCenter, randomNumRight;
//Calls imageMaker function to initially set a group of images when browser window loads
imageMaker();
//Initialize total clicks to zero
var totalClicks = 0;

// Creating a function to handle click on left product window
function handleClickOnProductLeft() {
  productsList[randomNumLeft].clicks++;
  console.log('Left was clicked');
  imageMaker();
  totalClicks += 1;
  console.log('The total number of clicks is ' + totalClicks);
  if (totalClicks === 15) {
    displayResults();
  }
}

// Creating a function to handle click on center product window
function handleClickOnProductCenter() {
  productsList[randomNumCenter].clicks++;
  console.log('Center was clicked');
  imageMaker();
  totalClicks += 1;
  console.log('The total number of clicks is ' + totalClicks);
  if (totalClicks === 15) {
    displayResults();
  }
}

// Creating a function to handle click on right product window
function handleClickOnProductRight() {
  productsList[randomNumRight].clicks++;
  console.log('Right was clicked');
  imageMaker();
  totalClicks += 1;
  console.log('The total number of clicks is ' + totalClicks);
  if (totalClicks === 15) {
    displayResults();
  }
}

//Reusable function to creates a random integer
function randoMaker() {
  var randomNumber = Math.floor(Math.random() * productsList.length);
  return randomNumber;
}

//Function to create a set of 3 unique images on the screen and log how many times the image displayed
function imageMaker() {
  randomNumLeft = randoMaker();
  console.log(randomNumLeft);
  randomNumCenter = randoMaker();
  while(randomNumLeft === randomNumCenter) {
    randomNumCenter = randoMaker();
  }
  console.log(randomNumCenter);
  randomNumRight = randoMaker();
  while(randomNumRight === randomNumLeft || randomNumRight === randomNumCenter) {
    randomNumRight = randoMaker();
  }
  console.log(randomNumRight);
  productLeft.src = productsList[randomNumLeft].filePath;
  productsList[randomNumLeft].timesDisplayed++;
  productCenter.src = productsList[randomNumCenter].filePath;
  productsList[randomNumCenter].timesDisplayed++;
  productRight.src = productsList[randomNumRight].filePath;
  productsList[randomNumRight].timesDisplayed++;
}

//Declare button variable so it can be used multiple times
var button = document.getElementById('button');

//Function that displays results after total number of clicks is reached
function displayResults() {
  button.removeAttribute('hidden');
}

//Event listener for when the 'click for results' button is clicked
button.addEventListener('click', handleButtonClicked);

//Function to handle
function handleButtonClicked() {

}
