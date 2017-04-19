/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "C:\\Users\\MAURICIODAVIDARTEAGA\\es6";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Entity2 = __webpack_require__(1);

var _Entity3 = _interopRequireDefault(_Entity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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
CONST IS LIKE FINAL
  const a=5;
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

var Hobbit = function (_Entity) {
  _inherits(Hobbit, _Entity);

  function Hobbit(name, height) {
    _classCallCheck(this, Hobbit);

    return _possibleConstructorReturn(this, (Hobbit.__proto__ || Object.getPrototypeOf(Hobbit)).call(this, name, height));
  }

  return Hobbit;
}(_Entity3.default);

var hobbit = new Hobbit("Frodo sssssshhihiggins", 4.4);
console.log(hobbit);
console.log(hobbit.greet());
console.log("jad");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entity = function () {
  function Entity(name, height) {
    _classCallCheck(this, Entity);

    this.name = name;
    this.height = height;
  }

  _createClass(Entity, [{
    key: "greet",
    value: function greet() {
      console.log("Hi I'm " + this.name + " from middle earth");
    }
  }]);

  return Entity;
}();

exports.default = Entity;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);