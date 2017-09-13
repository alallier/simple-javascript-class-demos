var Animal = require('./Animal');

class Dog extends Animal {
  constructor(obj) {
    if (!obj || typeof obj !== 'object') {
      obj = {};
    }

    super(obj.name);

    this.age = obj.age !== undefined ? obj.age : null;
  }

  speak() {
    console.log(this.name + ' barks.');
  }
}

module.exports = Dog;
