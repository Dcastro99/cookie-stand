'use strict';

// console.log('hi');

//const profileContainer = document.getElementById('store_breakdowns');
const storeTable = document.querySelector('table tbody');
const storeTable2 = document.querySelector('table thead');
const storeTable3 = document.querySelector('table tfoot');

const hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];


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

    // let finalText = `${hourText}: ${cookiesSoldThisHour} cookies`;
    // this.averageCookiesSoldEachHourArry.push(finalText);

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

  let tdName = document.createElement('td');
  tdName.textContent = this.name;
  tr.appendChild(tdName);

  for (let i = 0; i < this.averageCookiesSoldEachHourArry.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.averageCookiesSoldEachHourArry[i].count;
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
};


function renderTableHeader() {
  let tr = document.createElement('tr');

  let empty = document.createElement('th');
  tr.appendChild(empty);

  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }
  let dailyLocationTotals = document.createElement('th');
  dailyLocationTotals.textContent = 'Daily Location Total';

  // in the table row ('tr') add another 'th';
  tr.appendChild(dailyLocationTotals);
  storeTable2.appendChild(tr);
}


function renderTableFooter(allCitiesArray) {
  let tr = document.createElement('tr');

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
