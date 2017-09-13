var Animal = require('./Animal');

// Dog inherits from Animal
function Dog(obj) {
  if (!obj || typeof obj !== 'object') {
    obj = {};
  }
  Animal.call(this, obj.name);

  this.age = obj.age !== undefined ? obj.age : null;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(this.name + ' barks.');
}

module.exports = Dog;
