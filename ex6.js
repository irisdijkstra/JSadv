const number = 100
const string = "Jay"

let obj1 = {
  value: "a"
}

let obj2 = {
  value: "b"
}

let obj3 = obj2; //referenced copy (non-primitive)

function change(number, string, obj1, obj2) {
    number = number * 10;
    string = "Pete";
    obj1 = obj2; // doesnt change object (global ex.cont needed)
    obj2.value = "c"; // changes value (primitive)
}

change(number, string, obj1, obj2);

//Guess the outputs here before you run the code:
console.log(number); // 100
console.log(string); // Jay
console.log(obj1.value); // "a"

obj1 = obj2;
console.log(obj1.value); // "c"
