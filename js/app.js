'use strict';

const storeTable = document.querySelector('table tbody');
const storeTable2 = document.querySelector('table thead');
const storeTable3 = document.querySelector('table tfoot');
const cityForm = document.querySelector('form');
const hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

function createNewElement(elName,textCon,append){
  let newEL = document.createElement(elName);
  newEL.textContent = textCon;
  append.appendChild(newEL);
}

function City(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotal = 0;
  this.averageCookiesSoldEachHourArry = [];
}

City.prototype.getRandomCustomers = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};
// 'this' references the object. anything defined on the object itself can use 'this'.

City.prototype.calCookiesPerHour = function() {

  for (let i = 0; i < hours.length; i++) {
    let hourText = hours[i];
    // console.log(hours[i]);
    let customesThisHour = this.getRandomCustomers();
    // this is one hours sold amount:
    let cookiesSoldThisHour = Math.ceil(customesThisHour * this.avg);

    this.dailyTotal += cookiesSoldThisHour;

    let obj = {
      hour: hourText,
      count: cookiesSoldThisHour,
    };

    this.averageCookiesSoldEachHourArry.push(obj);
  }
};

City.prototype.renderTableRow = function() {

  let tr = document.createElement('tr');
  storeTable.appendChild(tr);

  createNewElement('td',this.name,tr);

  for (let i = 0; i < this.averageCookiesSoldEachHourArry.length; i++) {

    createNewElement('td',this.averageCookiesSoldEachHourArry[i].count,tr);
  }
  createNewElement('td',this.dailyTotal,tr);
};


function renderTableHeader() {
  let tr = document.createElement('tr');

  let empty = document.createElement('th');
  tr.appendChild(empty);

  for (let i = 0; i < hours.length; i++) {
    createNewElement('th',hours[i],tr);
  }
  let dailyLocationTotals = document.createElement('th');
  dailyLocationTotals.textContent = 'Daily Location Total';

  // in the table row ('tr') add another 'th';
  tr.appendChild(dailyLocationTotals);
  storeTable2.appendChild(tr);
}


function renderTableFooter(allCitiesArray) {
  let totalRow = document.getElementById('totalRow');
  if (totalRow) {
    totalRow.remove();
  }
  let tr = document.createElement('tr');
  tr.id = 'totalRow';
  let empty = document.createElement('td');
  empty.textContent = 'Totals';
  tr.appendChild(empty);
  let grandTotal = 0;


  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('td');
    // totals counter:
    let totalsPerHour = 0;

    // i equals the hour (6 am for example)
    for (let j = 0; j < allCitiesArray.length; j++) {
      // j equals the index of the city in the cities array
      let city = allCitiesArray[j];

      // this would be the count in seattle at 6 am for example
      totalsPerHour += city.averageCookiesSoldEachHourArry[i].count;
    }

    th.textContent = totalsPerHour;
    grandTotal += totalsPerHour;
    tr.appendChild(th);
  }
  let grandTotals = document.createElement('td');
  grandTotals.textContent = grandTotal;

  // in the table row ('tr') add another 'th';
  tr.appendChild(grandTotals);
  storeTable3.appendChild(tr);
}

renderTableHeader();

let allCities = [];

function handleSubmit(event){
  event.preventDefault();
  let name = event.target.cityName.value;
  let min = +event.target.min.value;
  let max = +event.target.max.value;
  let avg = +event.target.avg.value;
  let newCity = new City(name,min,max,avg);
  newCity.calCookiesPerHour();
  newCity.renderTableRow();
  allCities.push(newCity);
  renderTableFooter(allCities);
  document.querySelector('form').reset();
}


let seattle = new City('Seattle', 23, 65, 6.3);
allCities.push(seattle);

let tokyo = new City('Tokyo', 3, 24, 1.2);
allCities.push(tokyo);

let dubai = new City('Dubai', 11, 38, 3.7);
allCities.push(dubai);

let paris = new City('Paris', 20, 38, 2.3);
allCities.push(paris);

let lima = new City('Lima', 2, 16, 4.6);
allCities.push(lima);


for (let i = 0; i < allCities.length; i++) {
  let city = allCities[i];
  city.calCookiesPerHour();
  city.renderTableRow();
}

renderTableFooter(allCities);
cityForm.addEventListener('submit', handleSubmit);
