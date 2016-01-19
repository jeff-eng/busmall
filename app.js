
//Object Constructor for creating product objects
function Product (productName, filePath, clicks) {
  this.productName = productName;
  this.filePath = filePath;
  this.clicks = clicks;
}

//Create instances
var bag = new Product('bag', 'img/bag.jpg', 0);
var banana = new Product('banana', 'img/banana.jpg', 0);
var boots = new Product('boots', 'img/boots.jpg', 0);
var chair = new Product('chair', 'img/chair.jpg', 0);
var cthulhu = new Product('cthulhu', 'img/cthulhu.jpg', 0);
var dragon = new Product('dragon', 'img/dragon.jpg', 0);
var pen = new Product('pen', 'img/pen.jpg', 0);
var scissors = new Product('scissors', 'img/scissors.jpg', 0);
var shark = new Product('shark', 'img/shark.jpg', 0);
var sweep = new Product('sweep', 'img/sweep.png', 0);
var unicorn = new Product('unicorn', 'img/unicorn.jpg', 0);
var usb = new Product('usb', 'img/usb.gif', 0);
var watercan = new Product('water can', 'img/water-can.jpg', 0);
var wineglass = new Product('wine glass', 'img/wine-glass.jpg', 0);

//Put instances of objects into an array
var productsList = [bag, banana, boots, chair, cthulhu, dragon, pen, scissors, shark, sweep, unicorn, usb, watercan, wineglass];

//Randomizer function - Use index as range of numbers being randomized
var randomizer = function() {
  
}
