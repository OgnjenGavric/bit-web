var Person = function (firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

Person.prototype.getBio = function () {
  var bio = this.firstName + " is " + this.age + ". ";
  this.likes.forEach((like) => {
    bio = bio + this.firstName + " likes " + like + ". ";
  });
  return bio;
};

Person.prototype.setName = function (fullName) {
  var names = fullName.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];
};

var me = new Person("Ognjen", "Gavric", 45, ["Studying", "Biking"]);
me.setName("Stevo Stevic");
console.log(me.getBio());

var person2 = new Person("Aco", "Gavric", 11);
console.log(person2.getBio());