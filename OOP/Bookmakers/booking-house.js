"use strict";

(function () {
  // Country Class
  class Country {
    constructor(name, odds, continent) {
      this.name = name;
      this.odds = odds;
      this.continent = continent;
    }
  }

  // Person Class
  class Person {
    constructor(name, surname, dateOfBirth) {
      this.name = name;
      this.surname = surname;
      this.dateOfBirth = dateOfBirth;
    }

    getFullInfo() {
      return `${this.name} ${this.surname} (${this.dateOfBirth.toLocaleDateString()})`;
    }
  }


  // Player Class
  class Player {
    constructor(person, betAmount, country) {
      this.person = person;
      this.betAmount = betAmount;
      this.country = country;
    }

    getPlayerInfo() {
      const expectedWinAmount = this.betAmount * this.country.odds;
      return `${this.country.name}, ${expectedWinAmount} eur, ${this.person.getFullInfo()}`;
    }
  }


  // Address Class
  class Address {
    constructor(country, city, postalCode, street, number) {
      this.country = country;
      this.city = city;
      this.postalCode = postalCode;
      this.street = street;
      this.number = number;
    }

    getFullAddress() {
      return `${this.street} ${this.number}, ${this.postalCode} ${this.city}, ${this.country}`;
    }
  }


  // Betting Place Class
  class BettingPlace {
    constructor(address, players = []) {
      this.address = address;
      this.players = players;
    }

    addPlayer(player) {
      this.players.push(player);
    }

    getBettingPlaceInfo() {
      let totalBetAmount = 0;
      for (const player of this.players) {
        totalBetAmount += player.betAmount;
      }

      return `${this.address.street}, ${this.address.postalCode} ${this.address.city}, Total bet amount: ${totalBetAmount} eur`;
    }
  }


  // Betting House Class
  class BettingHouse {
    constructor(competition) {
      this.competition = competition;
      this.bettingPlaces = [];
      this.numberOfPlayers = 0;
    }
  }

  var Continent = Object.freeze({
    EU: "EU",
    AS: "AS",
    AF: "AF",
    SA: "SA",
    NA: "NA",
    AU: "AU"
  });


  function createPlayer(person, betAmount, country) {
    return new Player(person, betAmount, country);
  }

  function createBettingPlace(address) {
    return new BettingPlace(address);
  }




})();

