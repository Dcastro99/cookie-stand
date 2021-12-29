'use strict';

// console.log('hi');

const profileContainer = document.getElementById('store_breakdowns');
const storeTable = document.querySelector('table');

const hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];


class City {
  constructor(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.dailyTotal = 0;
    this.averageCookiesSoldEachHourArry = [];
  }

  getRandomCustomers() {
    // 'this' references the object. anything defined on the object itself can use 'this'.
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

  calCookiesPerHour() {
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
  }

  renderTableRow() {
    const tr = document.createElement('tr');
    storeTable.querySelector('tbody').appendChild(tr);
    const tdName = document.createElement('td');
    tdName.textContent = this.name;
    tr.appendChild(tdName);

    for (let i = 0; i < this.averageCookiesSoldEachHourArry.length; i++) {
      const td = document.createElement('td');
      td.textContent = this.averageCookiesSoldEachHourArry[i].count;
      tr.appendChild(td);
    }
    const td = document.createElement('td');
    td.textContent = this.dailyTotal;
    tr.appendChild(td);
  }
}

function renderTableHeader() {
  const tr = document.createElement('tr');

  const empty = document.createElement('th');
  tr.appendChild(empty);

  for (let i = 0; i < hours.length; i++) {
    const th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }
  const dailyTotals = document.createElement('th');
  dailyTotals.textContent = 'Daily Location Total';

  // in the table row ('tr') add another 'th';
  tr.appendChild(dailyTotals);

  // instead of being super specific when getting the `storeTable` element from jquery, we are getting the whole table, 
  // then being specific about which part of the table we want
  storeTable.querySelector('thead').appendChild(tr);

}


function renderTableFooter(allCitiesArray) {
  const tr = document.createElement('tr');

  const empty = document.createElement('td');
  empty.textContent = 'Totals';
  tr.appendChild(empty);
  let grandTotal = 0;

  // hours = ['6am'];
  // allCitiesArray = [{seattle, averageCookiesSoldEachHourArry[{hour: 6am, count: 5}]}]
  //
  // when looping over hours, index 0 = 6am. (i) 
  // at six am, we are then looping over the cities.
  // allCitiesArray at index 0 is the seattle city object. (j)
  // the seattle city object has an array called averageCookiesSoldEachHourArry which is an array of objects.
  // the object inside of the averageCookiesSoldEachHourArry has an hour value, and a count value.
  // the index 0 in the averageCookiesSoldEachHourArry is { hour: '6am', count: 5 }
  // so averageCookiesSoldEachHourArry[i] corresponds to the count of the hour in seattle at 6 am

  for (let i = 0; i < hours.length; i++) {
    const th = document.createElement('td');
    // totals counter:
    let totalsPerHour = 0;

    // i equals the hour (6 am for example)
    for (let j = 0; j < allCitiesArray.length; j++) {
      // j equals the index of the city in the cities array
      const city = allCitiesArray[j];

      // this would be the count in seattle at 6 am for example
      totalsPerHour += city.averageCookiesSoldEachHourArry[i].count;
    }

    th.textContent = totalsPerHour;
    grandTotal += totalsPerHour;
    tr.appendChild(th);
  }
  const dailyTotals = document.createElement('td');
  dailyTotals.textContent = grandTotal;

  // in the table row ('tr') add another 'th';
  tr.appendChild(dailyTotals);

  // instead of being super specific when getting the `storeTable` element from jquery, we are getting the whole table, 
  // then being specific about which part of the table we want
  storeTable.querySelector('tfoot').appendChild(tr);
}

// let seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   dailyTotal: 0,
//   averageCookiesSoldEachHourArry: [],
//   getRandomCustomers: function() {
//     // 'this' references the object. anything defined on the object itself can use 'this'.
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calCookiesPerHour: function(){
//     for (let i = 0; i < hours.length; i++) {
//       let hourText = hours[i];
//       // console.log(hours[i]);

//       let customesThisHour = this.getRandomCustomers();

//       // this is one hours sold amount:
//       let cookiesSoldThisHour = Math.ceil(customesThisHour * this.avg);

//       this.dailyTotal += cookiesSoldThisHour;

//       // let finalText = `${hourText}: ${cookiesSoldThisHour} cookies`;
//       // this.averageCookiesSoldEachHourArry.push(finalText);

//       let obj = {
//         hour: hourText,
//         count: cookiesSoldThisHour,
//       };

//       this.averageCookiesSoldEachHourArry.push(obj);
//     }
//   },

//   render: function() {
//     this.calCookiesPerHour();
//     // console.log(this.averageCookiesSoldEachHourArry);

//     let header = document.createElement('h1');
//     header.textContent = `The Hourly AVG for ${this.name} was:`;
//     profileContainer.appendChild(header);

//     let ul = document.createElement('ul');

//     for (let i = 0; i < this.averageCookiesSoldEachHourArry.length; i++) {
//       let object = this.averageCookiesSoldEachHourArry[i];
//       // object.hour // hour text
//       // object.count // cookies sold

//       let textElement = document.createElement('p');

//       let endingText = ' cookie';
//       if (object.count > 1) {
//         endingText += 's';
//       }

//       textElement.textContent = object.hour + ' : ' + object.count + endingText;

//       // let numToShow = this.averageCookiesSoldEachHourArry[i];
//       let li  = document.createElement('li');
//       li.appendChild(textElement);

//       // li.textContent = numToShow;
//       ul.appendChild(li);
//     }

//     if (this.dailyTotal > 0) {
//       let totalElement = document.createElement('li');
//       totalElement.textContent = 'Total: ' + this.dailyTotal;
//       ul.appendChild(totalElement);
//     }

//     profileContainer.appendChild(ul);
//   },

//   renderTableRow: function () {
//     let tr = document.createElement('tr');
//     storeTable.appendChild(tr);
//     let tdName = document.createElement('td');
//     tdName.textContent = this.name;
//     tr.appendChild(tdName);
//     for (let i = 0; i < this.averageCookiesSoldEachHourArry.length; i++) {
//       let td = document.createElement('td');
//       td.textContent = this.averageCookiesSoldEachHourArry[i].count;
//       tr.appendChild(td);
//     }
//   };
// };

// this is just making the UL with the li
// seattle.render();

renderTableHeader();

const allCities = [];

const seattle = new City('Seattle', 23, 65, 6.3);
allCities.push(seattle);

const tokyo = new City('Tokyo', 3, 24, 1.2);
allCities.push(tokyo);

const dubai = new City('Dubai', 11, 38, 3.7);
allCities.push(dubai);

const paris = new City('Paris', 20, 38, 2.3);
allCities.push(paris);

const lima = new City('Lima', 2, 16, 4.6);
allCities.push(lima);



// other cities go here

for (let i = 0; i < allCities.length; i++) {
  const city = allCities[i];
  city.calCookiesPerHour();
  city.renderTableRow();
}

renderTableFooter(allCities);

// run seattle array (plus) tokyo array = totals



// let tokyo = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   dailyTotal: 0,
//   averageCookiesSoldEachHourArry: [],
//   getRandomCustomers: function() {
//     // 'this' references the object. anything defined on the object itself can use 'this'.
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calCookiesPerHour: function(){
//     for (let i = 0; i < hours.length; i++) {
//       let hourText = hours[i];
//       // console.log(hours[i]);

//       let customesThisHour = this.getRandomCustomers();

//       // this is one hours sold amount:
//       let cookiesSoldThisHour = Math.ceil(customesThisHour * this.avg);

//       this.dailyTotal += cookiesSoldThisHour;

//       // let finalText = `${hourText}: ${cookiesSoldThisHour} cookies`;
//       // this.averageCookiesSoldEachHourArry.push(finalText);

//       let obj = {
//         hour: hourText,
//         count: cookiesSoldThisHour,
//       };

//       this.averageCookiesSoldEachHourArry.push(obj);
//     }
//   },

//   render: function() {
//     this.calCookiesPerHour();
//     // console.log(this.averageCookiesSoldEachHourArry);

//     let header = document.createElement('h1');
//     header.textContent = `The Hourly AVG for ${this.name} was:`;
//     profileContainer.appendChild(header);

//     let ul = document.createElement('ul');

//     for (let i = 0; i < this.averageCookiesSoldEachHourArry.length; i++) {
//       let object = this.averageCookiesSoldEachHourArry[i];
//       // object.hour // hour text
//       // object.count // cookies sold

//       let textElement = document.createElement('p');

//       let endingText = ' cookie';
//       if (object.count > 1) {
//         endingText += 's';
//       }

//       textElement.textContent = object.hour + ' : ' + object.count + endingText;

//       // let numToShow = this.averageCookiesSoldEachHourArry[i];
//       let li  = document.createElement('li');
//       li.appendChild(textElement);

//       // li.textContent = numToShow;
//       ul.appendChild(li);
//     }

//     if (this.dailyTotal > 0) {
//       let totalElement = document.createElement('li');
//       totalElement.textContent = 'Total: ' + this.dailyTotal;
//       ul.appendChild(totalElement);
//     }

//     profileContainer.appendChild(ul);
//   }
// };

// tokyo.render();

// let dubai = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   dailyTotal: 0,
//   averageCookiesSoldEachHourArry: [],
//   getRandomCustomers: function() {
//     // 'this' references the object. anything defined on the object itself can use 'this'.
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calCookiesPerHour: function(){
//     for (let i = 0; i < hours.length; i++) {
//       let hourText = hours[i];
//       // console.log(hours[i]);

//       let customesThisHour = this.getRandomCustomers();

//       // this is one hours sold amount:
//       let cookiesSoldThisHour = Math.ceil(customesThisHour * this.avg);

//       this.dailyTotal += cookiesSoldThisHour;

//       // let finalText = `${hourText}: ${cookiesSoldThisHour} cookies`;
//       // this.averageCookiesSoldEachHourArry.push(finalText);

//       let obj = {
//         hour: hourText,
//         count: cookiesSoldThisHour,
//       };

//       this.averageCookiesSoldEachHourArry.push(obj);
//     }
//   },

//   render: function() {
//     this.calCookiesPerHour();
//     // console.log(this.averageCookiesSoldEachHourArry);

//     let header = document.createElement('h1');
//     header.textContent = `The Hourly AVG for ${this.name} was:`;
//     profileContainer.appendChild(header);

//     let ul = document.createElement('ul');

//     for (let i = 0; i < this.averageCookiesSoldEachHourArry.length; i++) {
//       let object = this.averageCookiesSoldEachHourArry[i];
//       // object.hour // hour text
//       // object.count // cookies sold

//       let textElement = document.createElement('p');

//       let endingText = ' cookie';
//       if (object.count > 1) {
//         endingText += 's';
//       }

//       textElement.textContent = object.hour + ' : ' + object.count + endingText;

//       // let numToShow = this.averageCookiesSoldEachHourArry[i];
//       let li  = document.createElement('li');
//       li.appendChild(textElement);

//       // li.textContent = numToShow;
//       ul.appendChild(li);
//     }

//     if (this.dailyTotal > 0) {
//       let totalElement = document.createElement('li');
//       totalElement.textContent = 'Total: ' + this.dailyTotal;
//       ul.appendChild(totalElement);
//     }

//     profileContainer.appendChild(ul);
//   }
// };

// dubai.render();

// let paris = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   dailyTotal: 0,
//   averageCookiesSoldEachHourArry: [],
//   getRandomCustomers: function() {
//     // 'this' references the object. anything defined on the object itself can use 'this'.
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calCookiesPerHour: function(){
//     for (let i = 0; i < hours.length; i++) {
//       let hourText = hours[i];
//       // console.log(hours[i]);

//       let customesThisHour = this.getRandomCustomers();

//       // this is one hours sold amount:
//       let cookiesSoldThisHour = Math.ceil(customesThisHour * this.avg);

//       this.dailyTotal += cookiesSoldThisHour;

//       // let finalText = `${hourText}: ${cookiesSoldThisHour} cookies`;
//       // this.averageCookiesSoldEachHourArry.push(finalText);

//       let obj = {
//         hour: hourText,
//         count: cookiesSoldThisHour,
//       };

//       this.averageCookiesSoldEachHourArry.push(obj);
//     }
//   },

//   render: function() {
//     this.calCookiesPerHour();
//     // console.log(this.averageCookiesSoldEachHourArry);

//     let header = document.createElement('h1');
//     header.textContent = `The Hourly AVG for ${this.name} was:`;
//     profileContainer.appendChild(header);

//     let ul = document.createElement('ul');

//     for (let i = 0; i < this.averageCookiesSoldEachHourArry.length; i++) {
//       let object = this.averageCookiesSoldEachHourArry[i];
//       // object.hour // hour text
//       // object.count // cookies sold

//       let textElement = document.createElement('p');

//       let endingText = ' cookie';
//       if (object.count > 1) {
//         endingText += 's';
//       }

//       textElement.textContent = object.hour + ' : ' + object.count + endingText;

//       // let numToShow = this.averageCookiesSoldEachHourArry[i];
//       let li  = document.createElement('li');
//       li.appendChild(textElement);

//       // li.textContent = numToShow;
//       ul.appendChild(li);
//     }

//     if (this.dailyTotal > 0) {
//       let totalElement = document.createElement('li');
//       totalElement.textContent = 'Total: ' + this.dailyTotal;
//       ul.appendChild(totalElement);
//     }

//     profileContainer.appendChild(ul);
//   }
// };

// paris.render();

// let lima = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   dailyTotal: 0,
//   averageCookiesSoldEachHourArry: [],
//   getRandomCustomers: function() {
//     // 'this' references the object. anything defined on the object itself can use 'this'.
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calCookiesPerHour: function(){
//     for (let i = 0; i < hours.length; i++) {
//       let hourText = hours[i];
//       // console.log(hours[i]);

//       let customesThisHour = this.getRandomCustomers();

//       // this is one hours sold amount:
//       let cookiesSoldThisHour = Math.ceil(customesThisHour * this.avg);

//       this.dailyTotal += cookiesSoldThisHour;

//       // let finalText = `${hourText}: ${cookiesSoldThisHour} cookies`;
//       // this.averageCookiesSoldEachHourArry.push(finalText);

//       let obj = {
//         hour: hourText,
//         count: cookiesSoldThisHour,
//       };

//       this.averageCookiesSoldEachHourArry.push(obj);
//     }
//   },

//   render: function() {
//     this.calCookiesPerHour();
//     // console.log(this.averageCookiesSoldEachHourArry);

//     let header = document.createElement('h1');
//     header.textContent = `The Hourly AVG for ${this.name} was:`;
//     profileContainer.appendChild(header);

//     let ul = document.createElement('ul');

//     for (let i = 0; i < this.averageCookiesSoldEachHourArry.length; i++) {
//       let object = this.averageCookiesSoldEachHourArry[i];
//       // object.hour // hour text
//       // object.count // cookies sold

//       let textElement = document.createElement('p');

//       let endingText = ' cookie';
//       if (object.count > 1) {
//         endingText += 's';
//       }

//       textElement.textContent = object.hour + ' : ' + object.count + endingText;

//       // let numToShow = this.averageCookiesSoldEachHourArry[i];
//       let li  = document.createElement('li');
//       li.appendChild(textElement);

//       // li.textContent = numToShow;
//       ul.appendChild(li);
//     }

//     if (this.dailyTotal > 0) {
//       let totalElement = document.createElement('li');
//       totalElement.textContent = 'Total: ' + this.dailyTotal;
//       ul.appendChild(totalElement);
//     }

//     profileContainer.appendChild(ul);
//   }
// };

// lima.render();
