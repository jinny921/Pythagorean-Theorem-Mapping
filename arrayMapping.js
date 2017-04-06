var input = [
  { x: 3, y: 4 }, // 9 + 16 = 25
  { x: 12, y: 5 }, // 144 + 25 = 169
  { x: 8, y: 15 } // 64 + 225 = 289
];


  var result = input.map(function(item, i) {
    const {x, y} = item;
    const sumSqr = Math.sqrt(x*x + y*y);
    return sumSqr;
  });


//will return [5, 13, 17]

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);


//x^2 + y^2 = z^2

// input = [{ x: 3, y: 4 }, { x: 12, y: 5 }, { x: 8, y: 15 }]

