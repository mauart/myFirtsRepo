/*
 LET CLASS

  console.log("Hello World (from webpack)");
  let a="This is a let variable";
  console.log(a);

  {
    let a="goodbye";
    console.log("a inside scope:",a);
  }
  {
    let salary=9000;
    console.log(salary);
  }
  console.log(salary);
*/

/*
CONST IasdLIKE FINAL
  const a=a5;
  a=5-3;
  console.log(a);

const array=[1,2,3];
array.push(4);
console.log(array);
*/
/*
PRINT VARIABLES INSIDE STRING
var a="Hello";
var b="World";
var c=a+" "+b;
console.log(c);

let d=`Hello ${b}`;
console.log(d);

let e=`${a} World`;
*/
/*
ELIPSOIDE LIKE JAVA
function butter(...z)
{
  let a=[1,2,3]
  return [...a,...z];
}
console.log(butter(4,5,6));
*/
/*
ARRAY DESCTRUCTION ASSIGMENT
let c=[100,200];
let [a,b]=c;
console.log(a,b);

let fellowship=["Frodo","Gandalf","Aragorn"];
let [hobbit,wizard,ranger]=fellowship;
console.log(hobbit,wizard,ranger);
*/

/*
Object DESCTRUCTION ASSIGMENT
let magical=false;
let power=2;

let wizard={magical:true,power:10};
({magical,power}=wizard);
console.log(magical,power);
*/
/*

ARROW FUNCTION
function blastoff()
{
  console.log("3...2...1...Blast Off")
}
blastoff();

setTimeout(function()
{
  console.log("3...2...1...Blast off");
},1000)


setTimeout(()=>
{
  console.log("3...2...1...Blast off");
},1000);
¨*/
/*
const blastoff=()=>{console.log("3...2...1...Blast off"+(14400-(2700+1400+3000+1700)));}
blastoff();

let points=[10,20,30];
//const addOne=(element)=>{return element+1;};

points=points.map(element =>element+2);
console.log(points);

let isPassing=(grade)=>
{
  return grade>=70;
}
let scores=[90,86,98,61,52,100,70,68,69,85,91];
let passing=scores.filter(isPassing);
console.log(passing);

let scores=[90,86,98,61,52,100,70,68,69,85,91];
let passing=scores.filter(element=>element>=70);
console.log(passing);
*/
/*
IMPORT MODULES FROM ANOTHER JS
import {students,total} from "./students"
console.log(students,total);
*/
/*
Import FUNCTIONS
import {add,multiply,minus,divide} from "./calculator.js"
console.log(add(5,4));
console.log(multiply(3,4));
console.log(minus(5,3));
console.log(divide(15,3));
*/

import Entity from "./Entity";
class Hobbit extends Entity
{
  constructor(name,height)
  {
    super(name,height);
  }
}
let hobbit =new Hobbit("Frodo sssssshhihiggins",4.4);
console.log(hobbit);
console.log(hobbit.greet());
console.log("jad");
