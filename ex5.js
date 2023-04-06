// How would you compare two objects if they are pointing to a
// different location in memory but still have the same properties?

var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eq = user1 == user2;
console.log(eq); // gives false

// my solution
console.log((JSON.stringify(user1) === JSON.stringify(user2))) // true
// objects are non-primitive and therefore not comparible with == or ===,
// by stringifying them we are able to compare them (strings are primitives)
console.log(typeof JSON.stringify(user2)) // string
