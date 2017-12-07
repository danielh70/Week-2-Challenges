class Car{
  constructor(){
    this.wheels = 4;
    this.lights = "off";
    this.blinker = "off";
    this.speed = 0;
  }
  lightsOn(){
    this.lights = "on";
    console.log("Lights are "+ this.lights);
  }
  lightsOff(){
    this.lights = "off";
    console.log("Lights are "+ this.lights);
  }
  leftBlinker(){
    this.blinker = "on";
    console.log("Left blinker is "+ this.blinker);
    this.blinker = "off";
  }
  rightBlinker(){
    this.blinker = "on";
    console.log("Lights are "+ this.blinker);
    this.blinker = "off";
  }
  getInfo(){
    console.log(this.wheels+", "+this.lights+", "+this.year+", "+this.speed+"km/h,")
  }
}

class Tesla extends Car{
  constructor(){
    super()
    this.year="2003";
    this.model="Tesla";
    listOfYears.push(parseInt(this.year));
    listOfYears.sort();
    listOfModels.push(this.model);
    listOfModels.sort();
    console.log(listOfModels.concat(listOfYears));
  }
  accelerate() {
    this.speed += 10;
    console.log("Increased speed to " + this.speed + "km/h");
  }
  brake() {
    this.speed -= 7;
    console.log("Decreased speed to " + this.speed + "km/h");
  }
}


class Tata extends Car{
  constructor(){
    super()
    this.year="1935";
    this.model="Tata";
    listOfYears.push(parseInt(this.year));
    listOfYears.sort();
    listOfModels.push(this.model);
    listOfModels.sort();
    console.log(listOfModels.concat(listOfYears));
  }
  accelerate() {
    this.speed += 2;
    console.log("Increased speed to " + this.speed + " km/h");
  }
  brake() {
    this.speed -= 1.25;
    console.log("Decreased speed to " + this.speed + " km/h");
  }
}


class Toyota extends Car{
  constructor(){
    super()
    this.year="1950";
    this.model="Toyota";
    listOfYears.push(parseInt(this.year));
    listOfYears.sort();
    listOfModels.push(this.model);
    listOfModels.sort();
    console.log(listOfModels.concat(listOfYears));
  }
  accelerate() {
    this.speed += 7;
    console.log("Increased speed to " + this.speed + " km/h");
  }
  brake() {
    this.speed -= 5;
    console.log("Decreased speed to " + this.speed + " km/h");
  }
}

var listOfModels = [];
var listOfYears = [];
var myCar = new Car()
var myTesla = new Tesla()
var myTata = new Tata()
var myToyota = new Toyota()



// var garage = [myTesla, myTata, myToyota];
// var carYear = [];
//
// function getYear(year) {
//   let mYear = parse.Int(this.year)
//   carYear.push(carYear[mYear]);
// }
