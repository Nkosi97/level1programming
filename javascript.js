//Greeting Function
function hello() {

console.log("Hello"+ " " +"Tshepo!")

}

hello()

//Check if a number is even
function evenOrOdd(num){

if(num % 2 === 0){
    
    return "even";
}
    return "odd";
}
console.log(evenOrOdd(4));

//Draw a square

var dimension = 2;
var edge = '#';

for (var i = 1; i <= dimension; i++) {
    if (i === 1 || i === dimension) {
        printline = Array(dimension + 1).join(edge);
    } 

    console.log(printline);
}

var dimension = 4;
var edge = '#';

for (var i = 1; i <= dimension; i++) {
    if (i === 1 || i === dimension) {
        printline = Array(dimension + 1).join(edge);
    }
    
    console.log(printline);
}
//Draw a right handed triangle

for(var i = 2; i>=1; i--){
  var str = "";
  for(var j = i; j<=2; j++){
    str += "#"
  }
  console.log(str);
}

for(var i = 4; i>=1; i--){
  var str = "";
  for(var j = i; j<=4; j++){
    str += "#"
  }
  console.log(str);
}

//Draw an isosceles triangle
var x = 2;
generateIsoscelesTriangle(x);

function generateIsoscelesTriangle(x) {
    var width = (2 * x) -1; 
    var midpoint = Math.floor(width / 2); 
    let level = ''; 

    for(var i = 0; i < x; i++) { 
    level = '';
    for(var j = 0; j < width; j++) {
      if(j < midpoint-i || j > midpoint+i) {
          level += ' ';
      } else {
          level += '#';
      }
    }
    console.log(level);
}
}


var x = 4;
generateIsoscelesTriangle(x);

function generateIsoscelesTriangle(x) {
    var width = (2 * x) -1; 
    var midpoint = Math.floor(width / 2); 
    let level = ''; 

    for(var i = 0; i < x; i++) { 
        level = '';
        for(var j = 0; j < width; j++) {
            if(j < midpoint-i || j > midpoint+i) {
                level += ' ';
            } else {
                level += '#';
            }
        }
        console.log(level);
    }
}

//Find the longest string

function longest(str) {
  let words = str.split(" ");
  let size = 0;
  let max = [""];
  
  for (let i = 0; i < words.length; i++) {
  if (words[i].length >= size) {
    size = words[i].length;
    
    if (max[max.length - 1].length < words[i].length) {
        max = [];
        max.push(words[i]);
    } else {
        max = [...max, words[i]];
    }
  }
  }
  
  return [...max];
  }
  
  console.log(longest("the quick brown fox ate my chickens"));

function longest(str) {
let words = str.split(" ");
let size = 0;
let max = [""];

for (let i = 0; i < words.length; i++) {
if (words[i].length >= size) {
  size = words[i].length;

  if (max[max.length - 1].length < words[i].length) {
      max = [];
      max.push(words[i]);
  } else {
      max = [...max, words[i]];
  }
}
}

return [...max];
}

console.log(longest("once upon a time"));

// // //Combine two arrays

const num1 = ['11','22','33'];
const num2 = ['1','2','3'];

const combinedArray = []

combinedArray.push(num1[0], num2[0], num1[1], num2[1], num1[2], num2[2])

console.log(combinedArray);

//Frame some text
function printFrame(arr) {
    function fill (str, length, char) {
        return (str.length < length) ? fill(str + char, length, char) : str;
    }
    let size = arr.map((str) => {
            return str.length;
})
.reduce((a, b) => {
        return Math.max(a, b);
});
    let line = fill('', size + 4, '*');

    arr = arr.map((element) => {
            return '* '+ fill(element, size, ' ') + ' *';
})
    arr.unshift(line);

    arr.push(line);

    return arr.join('\n');;
}
console.log(printFrame(["Write", "good", "code", "every", "day"]));
