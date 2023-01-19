"use strict";

(function () {
  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function () {
      return this.name + ' ' + this.surname;
    };
  }

  function Seat(number, category) {
    this.number = number || Math.floor(Math.random() * 90) + 10;
    this.category = category || 'e';
    this.getData = function () {
      return this.number + ', ' + this.category.toUpperCase();
    };
  }

  function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
    this.getData = function () {
      return this.seat.getData() + ', ' + this.person.getData();
    };
  }

  function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.passengers = [];
    this.addPassenger = function (passenger) {
      this.passengers.push(passenger);
    };
    this.getData = function () {
      var output = '';
      output += this.date + ', ' + this.relation + '\n';
      for (var i = 0; i < this.passengers.length; i++) {
        output += '\t' + this.passengers[i].getData() + '\n';
      }
      return output;
    };
  }

  function Airport(name) {
    this.name = name;
    this.flights = [];
    this.addFlight = function (flight) {
      this.flights.push(flight);
    };
  }

  function createFlight(relation, date) {
    return new Flight(relation, date);
  }
  function createPassenger(name, surname, number, category) {
    var person = new Person(name, surname);
    var seat = new Seat(number, category);
    return new Passenger(person, seat);
  }
  var airport = new Airport('Nikola Tesla');
  var flight1 = createFlight('Belgrade - New York', 'Oct 25 2017');
  var flight2 = createFlight('Barcelona - Belgrade', 'Nov 11 2017');
  var passenger1 = createPassenger('John', 'Snow', 1, 'b');
  var passenger2 = createPassenger('Cersei', 'Lannister', 2, 'b');
  var passenger3 = createPassenger('Daenerys', 'Targaryen', 14, 'e');
  var passenger4 = createPassenger('Tyrion', 'Lannister');

  flight1.addPassenger(passenger1);
  flight1.addPassenger(passenger2);
  flight2.addPassenger(passenger3);
  flight2.addPassenger(passenger4);

  airport.addFlight(flight1);
  airport.addFlight(flight2);

  console.log(airport.getData());

})();
