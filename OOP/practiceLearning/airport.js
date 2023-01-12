'use strict';

(function () {
  function Person(name, surname) {
    this.name = name;
    this.surname = surname;

    this.getData = function () {
      return this.name + " " + this.surname;
    };
  }

  function Seat(number, category) {
    this.number = number || Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    this.category = category || "e";

    this.getData = function () {
      return this.number + " " + this.category;
    };
  }

  function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;

    this.getData = function () {
      return this.seat.getData() + " " + this.person.getData();
    };
  }

  function Flight(relation, date, passengers) {
    this.relation = relation;
    this.date = date;
    this.passengers = passengers || [];

    this.addPassenger = function (passenger) {
      this.passengers.push(passenger);
    };

    this.getData = function () {
      var passengerData = "";
      this.passengers.forEach(function (passenger) {
        passengerData += "\n" + passenger.getData();
      });

      return this.date + ", " + this.relation + passengerData;
    };
  }


  function Airport(name, flights) {
    this.name = "Nikola Tesla";
    this.flights = flights || [];

    this.addFlight = function (flight) {
      this.flights.push(flight);
    };


  }

  function createFlight(relation, date) {
    return new Flight(relation, date);
  }

  function createPassenger(name, surname, number, category) {
    let person = new Person(name, surname);
    let seat = new Seat(number, category);
    return new Passenger(person, seat);
  }


  var person1 = new Person("John", "Snow");
  var seat1 = new Seat(1, "b");
  var passenger1 = new Passenger(person1, seat1);

  var person2 = new Person("Cersei", "Lannister");
  var seat2 = new Seat(2, "e");
  var passenger2 = new Passenger(person2, seat2);

  var flight = new Flight("Belgrade - Paris", "2022-12-29");
  flight.addPassenger(passenger1);
  flight.addPassenger(passenger2);

  console.log(flight.getData());

  var flight = createFlight("Belgrade - New York", "2022-12-29");
  console.log(flight); // Output: Flight

  var passenger = createPassenger("John", "Snow", 10, "b");
  console.log(passenger); // Output: Passenger

  var airport = new Airport();
  airport.addFlight(flight1);
  airport.addFlight(flight2);

  var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
  flight1.addPassenger(passenger1);
  flight1.addPassenger(passenger2);
  var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");
  flight2.addPassenger(passenger3);
  flight2.addPassenger(passenger4);

  var passenger1 = createPassenger("John", "Snow", 1, "b");
  var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
  var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
  var passenger4 = createPassenger("Tyrion", "Lannister");

})();
