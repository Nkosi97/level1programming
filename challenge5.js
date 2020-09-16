//Combine two arrays

const num1 = ['11','22','33'];
const num2 = ['1','2','3'];

const combinedArray = []

combinedArray.push(num1[0], num2[0], num1[1], num2[1], num1[2], num2[2])

console.log(combinedArray);


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
