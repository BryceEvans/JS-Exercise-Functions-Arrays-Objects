// ⭐️ Example Challenge start ⭐️

/**
 * ### Challenge `exampleFunction`
 * 
 * @instructions
 * This function should be able to take two numbers as arguments
 * and return the result of adding them up.
 * 
 * For example, if we invoke `exampleFunction` passing 5 and 3,
 * the returned value should be 8.
*/
function exampleFunction(num1, num2) {
  return num1 + num2;
}

// ⭐️ Example Challenge end ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇

/**
 * ### Challenge `makePersonObject`
 * 
 * @instructions
 * This function should take an id, a name and an email as arguments,
 * and return an object with `id`, `name` and `email` properties.
 * 
 * For example, if we invoke `makePersonObject`
 * passing 5, 'Leia' and 'leia@leia.com' as arguments,
 * the returned value should look like:
 * {
 *   id: 5,
 *   name: "Leia",
 *   email: "leia@leia.com",
 * }
*/
function makePersonObject(id, name, email) {
  return {
    id: id,
    name: name,
    email: email
  }
}

/**
 * ### Challenge `getName`
 * 
 * @instructions
 * This function takes as its only argument
 * an object containing a `name` property,
 * and return a string that reads `Hello, my name is {name}`,
 * where `{name}` is the name stored in the object.
 * 
 * For example, if we invoke `getName`
 * passing { id: 1, name: 'Leia', email: 'leia@leia.com` } as the argument,
 * the returned value should look like `Hello, my name is Leia`.
*/

function getName(personObj) {
  // console.log(personObj.name)
  let x = `Hello, my name is ${personObj.name}`
  return x;
}

/**
 * ### Challenge `makeSmartPerson`
 * 
 * @instructions
 * This function takes a single `name` argument and returns an object.
 * The returned object has the following characteristics:
 *     It has a `name` property that contains the argument passed in.
 *     It has a `sum` method that takes two numbers as arguments
 *         and returns the result of adding them together.
 *     It has a `speak` method that takes no arguments
 *         and returns a string like `Hello, my name is {name}`.
 *         where `{name}` is the name passed into `makeSmartPerson`.
*/
function makeSmartPerson(nameString) {
  /* code here */
  // console.log(nameString)
  let myObj = {
    name: nameString,
    sum: function(x,y) {
      return x + y
    },
    speak: function() {
      return `Hello, my name is ${myObj.name}`
    }
  }
  return myObj;
}

/**
 * ### Challenge `getCarInfoByIndex`
 * 
 * @instructions
 * getCarInfoByIndex takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired index in the array.
 * getCarInfoByIndex returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getCarInfoByIndex is invoked with the inventory and the number 0,
 * it will return `This is a Lincoln Navigator`.
*/
function getCarInfoByIndex(arg1, arg2) {
  // console.log(arg1)
  // console.log(arg2)
  /* code here */
  return `This is a ${arg1[arg2].car_make} ${arg1[arg2].car_model}`
}

/**
 * ### Challenge `getLastCarInfo`
 * 
 * @instructions
 * getLastCarInfo takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getLastCarInfo returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getLastCarInfo is invoked passing the inventory inside /data/inventory.js,
 * it will return `This is a Lincoln Town Car`.
*/
function getLastCarInfo(arg1) {
  /* code here */
  // console.log(arg1.length)
  return `This is a ${arg1[arg1.length-1].car_make} ${arg1[arg1.length-1].car_model}`
}

/**
 * ### Challenge `getCarInfoById`
 * 
 * @instructions
 * getCarInfoById takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired car id (see how each car has its own unique id).
 * getCarInfoById returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getCarInfoById is invoked with the inventory and the number 1,
 * it will return `This is a Lincoln Navigator`.
*/
function getCarInfoById(inventory, id) {
  /* code here */
  // console.log(inventory)
  // console.log(id)
  for (let i=0; i < inventory.length; i++) {
    // console.log(i)
    // console.log(inventory[i])
    // console.log('this is the id: ', inventory[i].id)
    if (inventory[i].id == id) {
      return `this is a ${inventory[i].car_make} ${inventory[i].car_model}`
    }
  }
}

/**
 * ### Challenge `sortCarInventory`
 * 
 * @instructions
 * sortCarInventory takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * sortCarInventory returns an inventory that is sorted by car_model, ascending [A-Z].
*/
function sortCarInventory(inventory) {
  /* code here */
  // console.log(inventory)
  // let keysSorted = Object.keys(...inventory).sort()
  // console.log(keysSorted)
  // let copyOfInventory = [...inventory]

  // copyOfInventory.sort(function(a, b){return a.car_year - b.car_year})
  // console.log(copyOfInventory)

  // copyOfInventory.sort(function(a,b) {
  //   var x = a.car_model.toLowerCase();
  //   var y = b.car_model.toLowerCase();
  //   if (x < y) {return -1;}
  //   if (x > y) {return 1;}
  //   return 0;
  // });

  // console.log(copyOfInventory)

  inventory.sort(function(a,b) {
    var x = a.car_model.toLowerCase();
    var y = b.car_model.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  // console.log(inventory)
  return inventory
}

/**
 * ### Challenge `getModelYears`
 * 
 * @instructions
 * We need the years from every car in the inventory!
 * getModelYears takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getModelYears returns an array containing all the 'car_year's in the inventory.
*/
function getModelYears(/* code here */) {
  /* code here */

}

/**
 * ### Challenge `getOlderCars`
 * 
 * @instructions
 * We need a utility to find older cars!
 * getOlderCars takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired max year.
 * getOlderCars returns an array containing all the cars
 * with a `car_year` which is at most the given desired max year,
 * in the same order as they appear in the original inventory.
*/
function getOlderCars(/* code here */) {
  /* code here */
}

/**
 * ### Challenge `getGermanCars`
 * 
 * @instructions
 * We need a utility to find German cars!
 * getGermanCars takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getGermanCars returns an array containing all the cars
 * made by either `Audi` or `Mercedes-Benz` or `Volkswagen` or `BMW`,
 * in the same order as they appear in the original inventory.
*/
function getGermanCars(/* code here */) {
  /* code here */
}

/**
 * ### Challenge refactor to arrow functions
 * 
 * @instructions
 * Create arrow function versions of the following commented-out functions:
 * 
 * const sum = function (a, b) {
 *   return a + b
 * }
 * 
 * const addFive = function(num) {
*    return num + 5
 * }
 *
 * const argTimesTwo = function (num) {
 *   return num * 2
 * }
*/
const sum = (x,y) => { return x + y; }; // code here!
const addFive = (num) => { return num + 5; }; // code here!
const argTimesTwo = (num) => { return num * 2; }; // code here!

/**
 * ### Challenge `carMaker`
 * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * This function takes a single odometer argument (a number) and returns an object.
 * The returned object has the following characteristics:
 *     it has an `odometer` property that contains the argument passed in.
 *     it has a `drive` method that takes a distance as its argument, and
 *         (1) causes the odometer in the object to be increased by the distance,
 *         (2) returns the updated value of the `odometer`.
*/
function carMaker(/* code here */) {
  /* code here */
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (exampleFunction) { module.exports.exampleFunction = exampleFunction }
  if (makePersonObject) { module.exports.makePersonObject = makePersonObject }
  if (getName) { module.exports.getName = getName }
  if (makeSmartPerson) { module.exports.makeSmartPerson = makeSmartPerson }
  if (carMaker) { module.exports.carMaker = carMaker }
  if (getCarInfoByIndex) { module.exports.getCarInfoByIndex = getCarInfoByIndex }
  if (getLastCarInfo) { module.exports.getLastCarInfo = getLastCarInfo }
  if (getCarInfoById) { module.exports.getCarInfoById = getCarInfoById }
  if (sortCarInventory) { module.exports.sortCarInventory = sortCarInventory }
  if (getModelYears) { module.exports.getModelYears = getModelYears }
  if (getOlderCars) { module.exports.getOlderCars = getOlderCars }
  if (getGermanCars) { module.exports.getGermanCars = getGermanCars }
  if (sum) { module.exports.sum = sum }
  if (addFive) { module.exports.addFive = addFive }
  if (argTimesTwo) { module.exports.argTimesTwo = argTimesTwo }
}
