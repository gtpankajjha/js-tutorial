let score="34";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);

//"34" => 34
//"34abc" => NaN
//null =>0
//true=> 1 false=>0

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1=> true; 0=>false
// ""=> false
//"Pankaj"=> true

let someNumber=33
let stringNumber=String(someNumber)
// console.log(stringNumber)

//*****Operations *//
let value=3;
let negvalue=-value;
//console.log(negvalue)


//console.log("1" + 2);//output-12
//console.log(1+3+"4");//output=44
let gameCounter=100;
++gameCounter;
console.log(gameCounter)