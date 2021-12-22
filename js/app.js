'use strict';

// console.log('hi');

const profileContainer = document.getElementById('store breakdowns');


let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', 'Total',];

let cookies = [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 59, 875];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  averageCookiesSoldEachHourArry: [],
  // getRandomCustomers: function() {
    
  //   return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 
  // }
 
  render: function () {
    for (let i = 0; i < this.averageCookiesSoldEachHourArry.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${this.name}`;
      ul.appendChild(li);
    }
  }

};

let div = document.createElement('div');


let ul = document.createElement('ul');
div.appendChild(ul);


// console.log(seattle.getRandomCustomers());
seattle.render();

