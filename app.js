'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//we need to create a place for our list of all locations to be placed when we create them
var allLocations = [];
//we need to define a variable that will be dynamic depending on how many cookies
var totalCookiesByHour = 0;
//totalTotal or netTotal
var netTotal = 0;

function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour) {
    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesSoldPerHour = avgCookiesSoldPerHour;
    //these are the questions we need to solve
    this.randCustByHour = [];
    this.avgCookiesSoldPerHour = [];
    this.totalCookies = 0;
    allLocations.push(this);

    //this.calcRandCustByHour = function() {
        //method go here
        //use prototypes
        //}

}
CookieStore.prototype.populateCustomers = function () {
    for (var i = 0; i < 14; i++) {
      this.customersPerHour.push(randomCustomers(this.minCustomers, this.maxCustomers)); //populatecustomers is pushing the array of 14 numbers up into customers per hour []
    }
   };
   
CookieStore.prototype.calculateCookiesPerHour = function () {
    this.populateCustomers();
    for (var i = 0; i < 14; i++) {
      this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.averageCookies));
      this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
    }
   };
//remember to call the methods in the constructor that the now prototypes available to the new objects that the constructor will make using MakeLocation
//this.calcRandCustByHour();

function makeStands() {
    new MakeLocation('First and Pike', 23, 65, 6.3);
    new MakeLocation('SeaTac Airport', 3, 24, 1.2);
    new MakeLocation('Seattle Center', 11, 38, 3.7);
    new MakeLocation('Capitol Hill', 20, 38, 2.3);
    new MakeLocation('Alki', 2, 16, 4.6);
};

makeStands();

function makeHeaderRow() {
    var cookiestands = document.getElementById('cookiedata');
    var trEl = document.createElement('tr');
    var trEl = document.createElement('th');
    trEl.appendChild(thEl);

}

//table data
var stuffForFirstRow = ["coffee", 2, 4, 6, 8, 10];
var stuffForSecondRow = ["table", 3, 5, 7, 9, 1];

//access the table element in the html
var tableEl = document.getElementById("cookiedata");

function tableRowMaker(inputArray) {
    //make a table row
    var trEl = document.createElement("tr");
    //iterate through array
    for (var i = 0; i < inputArray.length; i++) {
        var tdEl = document.createElement("td"); //create
        tdEl.textContent = inputArray[i]; //content
        trEl.appendChild(tdEl); //add cell to the row
    }
    tableEl.appendChild(trEl); //add row to the table
}
tableRowMaker(stuffForFirstRow);
tableRowMaker(stuffForSecondRow);
//consider a for loop for the hours
//create a th element
//give the th element some text content like hours [i];
//appendChild

//create a th element
//give the th element text content 'Daily Location Total'
//append child

//remember to call makeHeaderRow();

//remember to put an "empty" <th></th> element at the top of the table to push the "6am" cell over to the right.

