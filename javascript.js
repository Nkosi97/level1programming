//Greeting Function
function hello(x) {

console.log("Hello"+ " " + x)

}

hello('Tshepo')

console.log(" ") //Space
//Check if a number is even
function evenOrOdd(num){

if(num % 2 === 0){
    
    return "even";
}
    return "odd";
}
console.log(evenOrOdd(4));

console.log(" ")//Space
//Draw a square

var edge = '#';
function square(int){
    for (var i = 1; i <= int; i++) {
    if (i === 1 || i === int) {
        printline = Array(int + 1).join(edge);
    } 

    console.log(printline);
}
}
square(2)

console.log(" ")//Space

square(4)

console.log(" ")//Space
// //Draw a right handed triangle
function triangle(int){
    for(var i = int; i>=1; i--){
  var str = "";
  for(var j = i; j<=int; j++){
    str += "#"
  }
  console.log(str);
}
}
triangle(2)

console.log(" ")

triangle(4)

console.log(" ")//Space
// //Draw an isosceles triangle
function isosceles(rows){
    for(let i = 1; i <= rows; i++){
      let str = '';
      for(let k = 1; k <= (rows - i); k++){
        str += ' ';
      }
      for(let j = 0; j != (2 * i - 1); j++){
        str += '#';
      }
      for(let k =  i + 1; k <= rows; k++){
        str += ' ';
      }
      console.log(str);
    }
 }
 isosceles(2);
console.log(" ")//Space

isosceles(4);

console.log(" ")//Space

// //Find the longest string

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

  console.log(" ")//Space

console.log(longest("once upon a time"));


console.log(" ")//Space
// // // //Combine two arrays

const num1 = ['11','22','33'];
const num2 = ['1','2','3'];

const combinedArray = []

combinedArray.push(num1[0], num2[0], num1[1], num2[1], num1[2], num2[2])

console.log(combinedArray);

// console.log(" ")//Space
// //Frame some text
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
