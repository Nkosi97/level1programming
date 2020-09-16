//Draw a square

var edge = "#";
function square(int) {
  for (var i = 1; i <= int; i++) {
    if (i === 1 || i === int) {
      printline = Array(int + 1).join(edge);
    }

    console.log(printline);
  }
}
square(2);

square(4);

// //Draw a right handed triangle
function triangle(int) {
  for (var i = int; i >= 1; i--) {
    var str = "";
    for (var j = i; j <= int; j++) {
      str += "#";
    }
    console.log(str);
  }
}
triangle(2);

triangle(4);
