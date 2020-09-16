//Draw an isosceles triangle
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


isosceles(4);
