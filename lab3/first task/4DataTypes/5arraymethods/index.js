//Translate border-left-width to borderLeftWidth
function camelize(str) {
    return str
      .split('-') 
      .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); 
}

//Filter range
function filterRange(arr, a, b) {
    
    return arr.filter(item => (a <= item && item <= b));
}
  
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
  
alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

//Filter range "in place"
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
let arr2 = [5, 3, 8, 1];
  
filterRangeInPlace(arr2, 1, 4); 
  
alert( arr2 ); // [3, 1]

//Sort in decreasing order
let arr3 = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr3 );

//Copy and sort array
function copySorted(arr) {
    return arr4.slice().sort();
}
  
let arr4 = ["HTML", "JavaScript", "CSS"];
  
let sorted = copySorted(arr4);

alert( sorted );
alert( arr4 );

//Create an extendable calculator
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split2 = str.split2(' '),
        a = +split2[0],
        op = split2[1],
        b = +split2[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}

//Map to names
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // John Smith

//Sort users by age
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let arr5 = [ pete, john, mary ];
  
sortByAge(arr5);
  
alert(arr5[0].name); // John
alert(arr5[1].name); // Mary
alert(arr5[2].name); // Pete


//Get average age
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 29 };
  
let arr6 = [ john, pete, mary ];
  
alert( getAverageAge(arr6) ); // 28

//Filter unique array members
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
}
  
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
alert( unique(strings) ); // Hare, Krishna, :-O


//Create keyed object from array

function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
}
let users2 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];
  
let usersById = groupById(users2);