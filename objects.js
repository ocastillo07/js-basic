function car(brand, model, year){
  this.marca = brand;
  this.modelo = model;
  this.annio = year;
}

// var newCar = new car('Tesla', 'Model 3', 2020);
var cars = [];
var carBrands = ['Toyota', 'Honda', 'Mazda', 'Kia', 'Tesla'];
var toyotaModels = ['Avalon', 'Camry', 'Corolla', 'Tacoma', 'Pryus'];
var hondaModels = ['Accord', 'Civic', 'CRV', 'HRV', 'Odyssey'];
var mazdaModels = ['3', 'CX-5', 'MX-5', 'CX-3', 'CX-30'];
var kiaModels = ['Sportage', 'Rio', 'Forte', 'Soul', 'Stinger'];
var teslaModels = ['Model 3', 'Model S', 'Model Y', 'Model X', 'Model 4'];

// Populate
for(let i = 0 ; i < 20 ; i++){
  var index = randomNumber = Math.floor(Math.random() * 5)
  var brand = carBrands[index];
  var model;

  switch (index){
    case 0: 
      model = toyotaModels[Math.floor(Math.random() * 5)]
      break;
    case 1:
      model = hondaModels[Math.floor(Math.random() * 5)]
      break;
    case 2:
      model = mazdaModels[Math.floor(Math.random() * 5)]
      break;
    case 3:
      model = kiaModels[Math.floor(Math.random() * 5)]
      break;
    case 4:
      model = teslaModels[Math.floor(Math.random() * 5)]
      break;
    default:
      console.log('Error')
  }
  var year = 2011 + Math.floor(Math.random() * 10)
  cars.push(new car(brand, model, year));
}

// Print
for(let i = 0 ; i < cars.length ; i++){
  console.log(cars[i]);
}