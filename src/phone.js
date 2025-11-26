class Phone {
  #password;

  batteryLevel = 100;

  constructor(brand, model, password) {
    this.brand = brand;
    this.model = model;
    this.#password = password;
  }

  makeCall(number) {
    this.batteryLevel -= 5;
    return `Calling ${number}`;
  }

  charge() {
    this.batteryLevel = 100;
    return 'Phone fully charged';
  }

  unlock(password) {
    return password === this.#password;
  }
}

class iPhone extends Phone {
  constructor(model, password, numberOfCameras) {
    super('Apple', model, password);
    this.numberOfCameras = numberOfCameras;
  }

  makeCall(number) {
    return `${super.makeCall(number)} using FaceTime audio`;
  }

  faceTime(name) {
    this.batteryLevel -= 10;
    return `Facetiming ${name}`;
  }
}

// TEST YOUR CODE HERE

// DO NOT REMOVE
module.exports = { Phone, iPhone };
