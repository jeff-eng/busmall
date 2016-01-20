
//Object Constructor for creating product objects
function Product (productName, filePath, clicks, timesDisplayed) {
  this.productName = productName;
  this.filePath = filePath;
  this.clicks = clicks;
  this.timesDisplayed = timesDisplayed;
}

//Create instances
var bag = new Product('bag', 'img/bag.jpg', 0, 0);
var banana = new Product('banana', 'img/banana.jpg', 0, 0);
var boots = new Product('boots', 'img/boots.jpg', 0, 0);
var chair = new Product('chair', 'img/chair.jpg', 0, 0);
var cthulhu = new Product('cthulhu', 'img/cthulhu.jpg', 0, 0);
var dragon = new Product('dragon', 'img/dragon.jpg', 0, 0);
var pen = new Product('pen', 'img/pen.jpg', 0, 0);
var scissors = new Product('scissors', 'img/scissors.jpg', 0, 0);
var shark = new Product('shark', 'img/shark.jpg', 0, 0);
var sweep = new Product('sweep', 'img/sweep.png', 0, 0);
var unicorn = new Product('unicorn', 'img/unicorn.jpg', 0, 0);
var usb = new Product('usb', 'img/usb.gif', 0, 0);
var watercan = new Product('water can', 'img/water-can.jpg', 0, 0);
var wineglass = new Product('wine glass', 'img/wine-glass.jpg', 0, 0);

//Put instances of objects into an array
var productsList = [bag, banana, boots, chair, cthulhu, dragon, pen, scissors, shark, sweep, unicorn, usb, watercan, wineglass];

//Assigning variable names to each product displayed
var productLeft = document.getElementById('productLeft');
var productCenter = document.getElementById('productCenter');
var productRight = document.getElementById('productRight');

//Create an event listener that responds to the click on an image, then records the click to the object and then starts a function that randomly selects another image.  Run a loop?

// productLeft.addEventListener('click', handleClickOnProductLeft);
// productCenter.addEventListener('click', handleClickOnProductCenter);
productRight.addEventListener('click', handleClickOnProductRight);

//Declare global variables to store the random numbers generated within the function
// var globalRandomOne = randomOne;
// var globalRandomTwo = randomTwo;
// var globalRandomThree = randomThree;

// Creating a function to display a random image from the productsList array.
// function handleClickOnProductLeft() {
//   console.log('Left was clicked');
//   var randomNumOne = Math.floor(Math.random() * productsList.length);
//   console.log(randomNumOne);
//   productLeft.src = productsList[randomNumOne].filePath;
//   var randomNumTwo = Math.floor(Math.random() * productsList.length);
//   console.log(randomNumTwo);
//   productCenter.src = productsList[randomNumTwo].filePath;
//   var randomNumThree = Math.floor(Math.random() * productsList.length);
//   console.log(randomNumThree);
//   productRight.src = productsList[randomNumThree].filePath;
// }

// function handleClickOnProductCenter() {
//   console.log('Center was clicked');
//   var randomNumOne = Math.floor(Math.random() * productsList.length);
//   console.log(randomNumOne);
//   productCenter.src = productsList[randomNumOne].filePath;
//   var randomNumTwo = Math.floor(Math.random() * productsList.length);
//   console.log(randomNumTwo);
//   productLeft.src = productsList[randomNumTwo].filePath;
//   var randomNumThree = Math.floor(Math.random() * productsList.length);
//   console.log(randomNumThree);
//   productRight.src = productsList[randomNumThree].filePath;
// }
//
function handleClickOnProductRight() {
  console.log('Right was clicked');
  var randomNumOne = Math.floor(Math.random() * productsList.length);
  console.log(randomNumOne);
  productRight.src = productsList[randomNumOne].filePath;
  var randomNumTwo = Math.floor(Math.random() * productsList.length);
  productLeft.src = productsList[randomNumTwo].filePath
}

//Create a random integer
// Math.floor(Math.random() * productsList.length)
