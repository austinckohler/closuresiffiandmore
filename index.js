const shoe = {
  brand: "Nike",
  shoe: "Jordan's",
  color: "white",
};

let Store = function (brand, shoe, color) {
  this.brand = brand;
  this.shoe = shoe;
  this.color = color;
};
// ES 2015 way
// class Store {
//     constructor(brand, shoe, color) {
//         this.brand = brand;
//         this.shoe = shoe;
//         this.color = color;
//     }
// }
Store.prototype.brandAndAge = function () {
  console.log(this.brand + " " + this.shoe);
};
const shoe1 = new Store("Merril", "Slip On", "brown");
const shoe2 = new Store("La Sportiva", "climber", "yellow");
const shoe3 = new Store("Nike", "runner", "grey and white");
shoe1.brandAndAge();
shoe2.brandAndAge();
shoe3.brandAndAge();

let dogs = ["rosie", "sandy", "rhoady"];
function doogAges(dogs, func) {
  let dogAge = [];
  for (let index = 0; index < dogs.length; index++) {
    dogAge.push(func(dogs[index]));
  }
  return dogAge;
}

// function ages(element) {
//   return element[0] + "is a 5";
// }

// let otherAges = doogAges(dogs, ages);
// console.log(otherAges);

function dogQuestions(dog) {
  return function (age) {
    if (dog === "rosie") {
      console.log(dog + " I am " + age + "years old");
    } else {
      console.log(dog + ", are you");
    }
  };
}

// dogQuestions("rosie")(5);
dogQuestions("sandy");
