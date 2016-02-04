'use strict';
//Object Constructor for creating product objects
function Product (productName, filePath, clicks, timesDisplayed) {
  this.productName = productName;
  this.filePath = filePath;
  this.clicks = 0;
  this.timesDisplayed = 0;
}

//Create instances
var bag = new Product('bag', 'IMG/bag.jpg');
var banana = new Product('banana', 'IMG/banana.jpg');
var boots = new Product('boots', 'IMG/boots.jpg');
var chair = new Product('chair', 'IMG/chair.jpg');
var cthulhu = new Product('cthulhu', 'IMG/cthulhu.jpg');
var dragon = new Product('dragon', 'IMG/dragon.jpg');
var pen = new Product('pen', 'IMG/pen.jpg');
var scissors = new Product('scissors', 'IMG/scissors.jpg');
var shark = new Product('shark', 'IMG/shark.jpg');
var sweep = new Product('sweep', 'IMG/sweep.png');
var unicorn = new Product('unicorn', 'IMG/unicorn.jpg');
var usb = new Product('usb', 'IMG/usb.gif');
var watercan = new Product('water can', 'IMG/water-can.jpg');
var wineglass = new Product('wine glass', 'IMG/wine-glass.jpg');

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

//Declare global variables to store the random numbers generated within the randomMaker function
var randomNumLeft, randomNumCenter, randomNumRight;
//Calls imageMaker function to initially set a group of images when browser window loads
imageMaker();

var clickData = localStorage.getItem('clickPersist');
if (clickData) {
  totalClicks = parseInt(localStorage.getItem('clickPersist'));
} else {
  var totalClicks = 0;
}

// Creating a function to handle click on left product window
function handleClickOnProductLeft() {
  if (totalClicks > 0) {
    productsList = JSON.parse(localStorage.getItem('chartPersist'));
    totalClicks = parseInt(localStorage.getItem('clickPersist'));
  }
  productsList[randomNumLeft].clicks++;
  console.log('Left was clicked');
  imageMaker();
  totalClicks += 1;
  console.log('The total number of clicks is ' + totalClicks);
  localStorage.setItem('chartPersist',JSON.stringify(productsList));
  localStorage.setItem('clickPersist',totalClicks);
  if (totalClicks === 15) {
    displayResults();
  }
}
// Creating a function to handle click on center product window
function handleClickOnProductCenter() {
  if (totalClicks > 0) {
    productsList = JSON.parse(localStorage.getItem('chartPersist'));
    totalClicks = parseInt(localStorage.getItem('clickPersist'));
  }
  productsList[randomNumCenter].clicks++;
  console.log('Center was clicked');
  imageMaker();
  totalClicks += 1;
  console.log('The total number of clicks is ' + totalClicks);
  localStorage.setItem('chartPersist',JSON.stringify(productsList));
  localStorage.setItem('clickPersist',totalClicks);
  if (totalClicks === 15) {
    displayResults();
  }
}
// Creating a function to handle click on right product window
function handleClickOnProductRight() {
  if (totalClicks > 0) {
    productsList = JSON.parse(localStorage.getItem('chartPersist'));
    totalClicks = parseInt(localStorage.getItem('clickPersist'));
  }
  productsList[randomNumRight].clicks++;
  console.log('Right was clicked');
  imageMaker();
  totalClicks += 1;
  console.log('The total number of clicks is ' + totalClicks);
  localStorage.setItem('chartPersist',JSON.stringify(productsList));
  localStorage.setItem('clickPersist',totalClicks);
  if (totalClicks === 15) {
    displayResults();
  }
}

//Generates a random integer
function randoMaker() {
  var randomNumber = Math.floor(Math.random() * productsList.length);
  return randomNumber;
}

//Function to create a set of 3 different images on the screen and log how many times the image displayed
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

var button = document.getElementById('button');
var clearLS = document.getElementById('clearLSbutton');
var resetPage = document.getElementById('reset');
var pElUnhide = document.getElementById('admin');
//Function that displays results after total number of clicks is reached
function displayResults() {
  button.removeAttribute('hidden');
  clearLS.removeAttribute('hidden');
  resetPage.removeAttribute('hidden');
  pElUnhide.removeAttribute('hidden');
}

//Event listener for when the 'click for results' button is clicked
button.addEventListener('click', handleButtonClicked);
var handleLSClear = function () {
  console.log('Clearing local storage');
  localStorage.clear();
};
clearLS.addEventListener('click',handleLSClear);
resetPage.addEventListener('click', reloadPage);

//Function to generate chart
function chartMaker() {
  var products = [];
  for (var i = 0; i < productsList.length; i++) {
    products.push(productsList[i].productName);
  }
  var clicks = [];
  for (var i = 0; i < productsList.length; i++) {
    clicks.push(productsList[i].clicks);
  }
  var timesDisplayed = [];
  for (var i = 0; i < productsList.length; i++) {
    timesDisplayed.push(productsList[i].timesDisplayed);
  }
  var data = {
    labels: products,
    datasets: [
      {
        fillColor: 'rgba(220,220,220,0.5)',
        strokeColor: 'rgba(220,220,220,0.8)',
        highlightFill: 'rgba(220,220,220,0.75)',
        highlightStroke: 'rgba(220,220,220,1)',
        data: clicks //clicks
      },
      {
        fillColor: 'rgba(151,187,205,0.5)',
        strokeColor: 'rgba(151,187,205,0.8)',
        highlightFill: 'rgba(151,187,205,0.75)',
        highlightStroke: 'rgba(151,187,205,1)',
        data: timesDisplayed //timesDisplayed
      }
    ]
  };
  var chart = document.getElementById('canvas').getContext('2d');
  new Chart(chart).Bar(data);
}

var results = document.getElementById('results');
// Function to handle button click
function handleButtonClicked() {
  console.log('Results button works!');
  chartMaker();
}

function reloadPage() {
  window.location.reload();
}
