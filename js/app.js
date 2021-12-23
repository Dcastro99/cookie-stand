'use strict';

// console.log('hi');

const profileContainer = document.getElementById('store_breakdowns');


let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];


let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  averageCookiesSoldEachHourArry: [],
  getRandomCustomers: function() {
    // 'this' references the object. anything defined on the object itself can use 'this'.
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calCookiesPerHour: function(){
    for (let i = 0; i < hours.length; i++) {
      let hourText = hours[i];
      console.log(hours[i]);

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
  },

  render: function() {
    this.calCookiesPerHour();
    console.log(this.averageCookiesSoldEachHourArry);

    let header = document.createElement('h1');
    header.textContent = `The Hourly AVG for ${this.name} was:`;
    profileContainer.appendChild(header);

    let ul = document.createElement('ul');

    for (let i = 0; i < this.averageCookiesSoldEachHourArry.length; i++) {
      let object = this.averageCookiesSoldEachHourArry[i];
      // object.hour // hour text
      // object.count // cookies sold

      let textElement = document.createElement('p');

      let endingText = ' cookie';
      if (object.count > 1) {
        endingText += 's';
      }

      textElement.textContent = object.hour + ' : ' + object.count + endingText;

      // let numToShow = this.averageCookiesSoldEachHourArry[i];
      let li  = document.createElement('li');
      li.appendChild(textElement);

      // li.textContent = numToShow;
      ul.appendChild(li);
    }

    if (this.dailyTotal > 0) {
      let totalElement = document.createElement('li');
      totalElement.textContent = 'Total: ' + this.dailyTotal;
      ul.appendChild(totalElement);
    }

    profileContainer.appendChild(ul);
  }
};

seattle.render();

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  dailyTotal: 0,
  averageCookiesSoldEachHourArry: [],
  getRandomCustomers: function() {
    // 'this' references the object. anything defined on the object itself can use 'this'.
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calCookiesPerHour: function(){
    for (let i = 0; i < hours.length; i++) {
      let hourText = hours[i];
      console.log(hours[i]);

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
  },

  render: function() {
    this.calCookiesPerHour();
    console.log(this.averageCookiesSoldEachHourArry);

    let header = document.createElement('h1');
    header.textContent = `The Hourly AVG for ${this.name} was:`;
    profileContainer.appendChild(header);

    let ul = document.createElement('ul');

    for (let i = 0; i < this.averageCookiesSoldEachHourArry.length; i++) {
      let object = this.averageCookiesSoldEachHourArry[i];
      // object.hour // hour text
      // object.count // cookies sold

      let textElement = document.createElement('p');

      let endingText = ' cookie';
      if (object.count > 1) {
        endingText += 's';
      }

      textElement.textContent = object.hour + ' : ' + object.count + endingText;

      // let numToShow = this.averageCookiesSoldEachHourArry[i];
      let li  = document.createElement('li');
      li.appendChild(textElement);

      // li.textContent = numToShow;
      ul.appendChild(li);
    }

    if (this.dailyTotal > 0) {
      let totalElement = document.createElement('li');
      totalElement.textContent = 'Total: ' + this.dailyTotal;
      ul.appendChild(totalElement);
    }

    profileContainer.appendChild(ul);
  }
};

tokyo.render();

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  dailyTotal: 0,
  averageCookiesSoldEachHourArry: [],
  getRandomCustomers: function() {
    // 'this' references the object. anything defined on the object itself can use 'this'.
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calCookiesPerHour: function(){
    for (let i = 0; i < hours.length; i++) {
      let hourText = hours[i];
      console.log(hours[i]);

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
  },

  render: function() {
    this.calCookiesPerHour();
    console.log(this.averageCookiesSoldEachHourArry);

    let header = document.createElement('h1');
    header.textContent = `The Hourly AVG for ${this.name} was:`;
    profileContainer.appendChild(header);

    let ul = document.createElement('ul');

    for (let i = 0; i < this.averageCookiesSoldEachHourArry.length; i++) {
      let object = this.averageCookiesSoldEachHourArry[i];
      // object.hour // hour text
      // object.count // cookies sold

      let textElement = document.createElement('p');

      let endingText = ' cookie';
      if (object.count > 1) {
        endingText += 's';
      }

      textElement.textContent = object.hour + ' : ' + object.count + endingText;

      // let numToShow = this.averageCookiesSoldEachHourArry[i];
      let li  = document.createElement('li');
      li.appendChild(textElement);

      // li.textContent = numToShow;
      ul.appendChild(li);
    }

    if (this.dailyTotal > 0) {
      let totalElement = document.createElement('li');
      totalElement.textContent = 'Total: ' + this.dailyTotal;
      ul.appendChild(totalElement);
    }

    profileContainer.appendChild(ul);
  }
};

dubai.render();

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  dailyTotal: 0,
  averageCookiesSoldEachHourArry: [],
  getRandomCustomers: function() {
    // 'this' references the object. anything defined on the object itself can use 'this'.
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calCookiesPerHour: function(){
    for (let i = 0; i < hours.length; i++) {
      let hourText = hours[i];
      console.log(hours[i]);

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
  },

  render: function() {
    this.calCookiesPerHour();
    console.log(this.averageCookiesSoldEachHourArry);

    let header = document.createElement('h1');
    header.textContent = `The Hourly AVG for ${this.name} was:`;
    profileContainer.appendChild(header);

    let ul = document.createElement('ul');

    for (let i = 0; i < this.averageCookiesSoldEachHourArry.length; i++) {
      let object = this.averageCookiesSoldEachHourArry[i];
      // object.hour // hour text
      // object.count // cookies sold

      let textElement = document.createElement('p');

      let endingText = ' cookie';
      if (object.count > 1) {
        endingText += 's';
      }

      textElement.textContent = object.hour + ' : ' + object.count + endingText;

      // let numToShow = this.averageCookiesSoldEachHourArry[i];
      let li  = document.createElement('li');
      li.appendChild(textElement);

      // li.textContent = numToShow;
      ul.appendChild(li);
    }

    if (this.dailyTotal > 0) {
      let totalElement = document.createElement('li');
      totalElement.textContent = 'Total: ' + this.dailyTotal;
      ul.appendChild(totalElement);
    }

    profileContainer.appendChild(ul);
  }
};

paris.render();

let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  dailyTotal: 0,
  averageCookiesSoldEachHourArry: [],
  getRandomCustomers: function() {
    // 'this' references the object. anything defined on the object itself can use 'this'.
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calCookiesPerHour: function(){
    for (let i = 0; i < hours.length; i++) {
      let hourText = hours[i];
      console.log(hours[i]);

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
  },

  render: function() {
    this.calCookiesPerHour();
    console.log(this.averageCookiesSoldEachHourArry);

    let header = document.createElement('h1');
    header.textContent = `The Hourly AVG for ${this.name} was:`;
    profileContainer.appendChild(header);

    let ul = document.createElement('ul');

    for (let i = 0; i < this.averageCookiesSoldEachHourArry.length; i++) {
      let object = this.averageCookiesSoldEachHourArry[i];
      // object.hour // hour text
      // object.count // cookies sold

      let textElement = document.createElement('p');

      let endingText = ' cookie';
      if (object.count > 1) {
        endingText += 's';
      }

      textElement.textContent = object.hour + ' : ' + object.count + endingText;

      // let numToShow = this.averageCookiesSoldEachHourArry[i];
      let li  = document.createElement('li');
      li.appendChild(textElement);

      // li.textContent = numToShow;
      ul.appendChild(li);
    }

    if (this.dailyTotal > 0) {
      let totalElement = document.createElement('li');
      totalElement.textContent = 'Total: ' + this.dailyTotal;
      ul.appendChild(totalElement);
    }

    profileContainer.appendChild(ul);
  }
};

lima.render();
