var person = ['andrew', 25];
var personTwo = ['Elmonds', 26];

function troll (name, age) {
  console.log("Hi " + name + ", you are " + age);
}

troll(...personTwo);

var names = ['Mike', 'Halldor'];
var final = ['Elmonds', ...names];

console.log(final);

final.forEach(function(name) {
  console.log("Hi " + name);
});
