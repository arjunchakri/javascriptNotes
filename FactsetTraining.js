session JS: 
-----
class Person{
	let first;
  var second;
	constructor(first,second, gender="M"){
  	setFirst(first);
    this.second = second;
    this.gender = gender;
  }
  set setFirst(value){first = value};
}

var object = new Person("sherlock","cumberbatch","M");
object.first = "mod"
console.log(object.first);
--------
var foo = (a) => {
	var b = 2;
        if(true){
            let c = 3;
            const MY_CONST = 3.14;
            const MY_CONST = 42;//ERROR
        }

        console.log(c);//UNDEFINED

        for(let i = 0; i < 10; i++) {
               // do something with list[i]
        }
        console.log(i);//UNDEFINED
}
---
HOISTING in js

CLOUSURES in js

function sayHello2(name) {
	var text = 'Hello ' + name; // Local variable
	var say = function() { console.log(text); }
	return say;
}
var sayHello2Bob = sayHello2('Bob');
var sayHello2Bob1 = sayHello2('haha');
sayHello2Bob();	 //Hello Bob
sayHello2Bob1();     //Hello haha

PROTOTYPE in js
INHERITANCE(ES5)
function Vehicle(name, color) {
this.name = name;
this.color = color;
}

Vehicle.prototype.print = function() {
console.log('Name: ' + this.name);
console.log('Color: ' + this.color);
};
function Car(name, color) {
	Vehicle.call(this, name, color);
}
Car.prototype = new Vehicle();
var bmw = new Car('bmw', 'red');
bmw.print();




------------------------
=> TYPESCRIPT:

tsconfig.json
app.ts:

// ts vs js:
// 
// types
// default params
// arrow fun(avai from es15)
// overloaded funs
// funtion types


TYPECHECKING:
let mystr : string = "sherlocked";
//mystr = 40;       ->compile time error
function returnnum(){
    return 10;
}
//mystr = returnnum();      ->compile time error


//return type
function getAllSeries() : Array<any>{
    let series = [
        {title:"Breaking Bad", type: category1.action, available:true},
        {title:"Friends", type: category1.sitcom, available:true},
        {title:"Suits", type:  category1.drama, available:true}
    ];
    return series;
}

//enums
enum category{action,sitcom,drama};     //0,1,2
enum category1 {action="action",sitcom="comedy",drama="drama"};     //type string

//arrays
let arr : Array<string> = ['abc','def'];
let arr1 : Array<any> = [10,true,'abc','def'];

//tuple
let tuple :[number,string] = [100,"hundred"];


function originalFunction(a:string, b : boolean, c: number) {
    return "string : " + a + "boolean : " +  b + "number : " + c;
}

let assignedFunction : (a:string, b : boolean, c: number) => string;
assignedFunction = originalFunction;
//now
console.log(assignedFunction("sherlocked",true,221));

let assignment2 : (a:string, b : boolean, c: number) => string;
assignment2 = (a:string, b : boolean, c: number) =>{ 
    return "string : " + a + "boolean : " +  b + "number : " + c;
};
console.log(assignment2("sherlocked",true,221));

//***default and optional params
function optionalparams(a:number,b:number = 10,c1?:number= 10,d?:number= 10){
    return a+b+c1+d;    
}


//rest or multiple params
function restParams(id : string, ...seriesOfIds: number[]) : Array<any>{
    let arr : Array<any> = seriesOfIds;
    return arr;
}

YARN
NPM

factset.io


------------------------------
nodeJS:
asynchronous execution:
a) Main.js
'use strict';
// Step 1: Import the mymath module which is defined in file mymath.js.
const mymath = require("./mymath");
// Step 2: Make sure the mymath module in mymath.js exports the sum() function.

// Step 3: Invoke the sum() function using the mymath module.

//or var sum = myMath.sum; sum(...)
mymath.Sum(10, (err, result) => {
    console.log(err ? 'Error: ' + err.message : 'Sum is: ' + result);
});

mymath.Sum(-1,  (err, result) => {
    console.log(err ? 'Error: ' + err : 'Sum is: ' + result);
});

// Step 4: Run with command: node main.js


------------------------------
b)mymath.js
'use strict';

function Sum(n, callback) {
    if (n < 0) {
        callback('Negative numbers not allowed');
        return;
    }

    setTimeout(() => callback(null, n*(n+1)/2), 5000);
}

// Step 1: Export the sum function from this module.
module.exports.Sum = Sum; 


>>node main.js

------------------------------
c) reading content from url using request-module
'use strict';
// Step 1: Fix package.json to include author name.

// Step 2: Use npm to install the 'request' module (https://github.com/mikeal/request)
//         (that's "npm install --save request)

// Step 3: Import the 'request' module.
const request = require('request');
// Step 4: Invoke the request function. The return code should be a stream that you can read.

var stream = request('http://www.google.com/');

// Step 5: Use the request module to output the website html to the console using stream events like:
var totaldata = "";
var counter = 0;
stream.on('data', (item) =>{
    counter++;
    console.log("data ->  " + item );
});

stream.on('end', (item) =>{
    console.log("count=   "+counter );
});
console.log("other functionality   " );



// Step 6: Run node main.js

------------------------------
d)using express-module to create a server
'use strict';
// Step 1: Install 'express'.
// Step 2: Import the express module.
const express = require('express');
// Step 2a: Create express app
const app = express();
// Step 3: Import the fs module.
const fs = require('fs');
// Step 4: Read the index.html file.
var pageContent = "page:";
fs.readFile('./index.html',function(err,data){
    pageContent += data+"";
});

// Server at a given port is created for you.
app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(pageContent);
    // Step 5: Use res.writeHead to set the status to 200 and Content-Type to text/html.
    //        https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers
    // Step 6: End the response with the content in index.html.

}).listen(9615);

// Step 7: Run your server: node main.js
// Step 8: Set your browser to:  localhost:9615 - It should be a basic 'Hello World' page.

------------------------------
Asnyc functionality:
PROMISES:
a)
<script>
var p = new Promise(function (resolve, reject){
    console.log("one");
    setTimeout(function() {resolve(2);
    }, 9);
    setTimeout(function() {reject(-1);
    }, 10);
    console.log("one");
}).then(function(args){
    console.log("2");
    setTimeout(function() {console.log("2");}, 2000);
    
}).then(function(args){
    console.log("3");
    setTimeout(function() {console.log("3");}, 1000);
    
}).then(function(args){
    console.log("4");
    setTimeout(function() {console.log("4");}, 1000);
    
});
</script>

b)
let users = [
    { id: 1, name: 'Manny'},
    { id: 2, name: 'Melissa'},
    { id: 3, name: 'Mike'}
];
                    
function fetchUserData({id, name}) {
    return new Promise(function(success, error) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xmlHttp.status == 200) {
                success(xhr.responseText);
            } else if (xhr.readyState === 4) {
                error(xhr.responseText);
            }
        }
        xhr.open("GET", 'www.user-data.com/?id=' + id + '&name=' + name); 
        xhr.send(null);
    });
}
let promises = _.map(users, user => fetchUserData(user)); // [Promise, Promise, Promise]
Promise.all(promises).then(successHandler, errorHandler);

---------------------------------------
Advanced CSS:
select all: body * {}
siblings: div-div{}
immediate siblings: div+div{}
attribute selector: [id="identifier"] {}
---TYPES
[attr^=value]	starts with
[attr$=value]	ends with
[attr*=value]	contains
[attr|=value]	
[attr~=value]	ditto


pseudo selectors:
:hover
:focus
:not(.even)	selects elements that do not match .even
:first-child	selects elements who are first children
:first-of-type	selects elements who are first children
:nth-child(n)	selects elements that are nth children
:nth-last-child(n)	selects elements that are nth last children

::before
eg: div::after{  content:"something"; }

INHERITANCE:
a) Inherited:
color
font-family
text-align
visibility
white-space

b) Not inherited:
border
display
margin
padding
width

c) Maybe
background-color
opacity

shorthand:
          div {
                border-top-width: 1px;
                border-right-width: 2px;
                border-bottom-width: 3px;
                border-left-width: 4px;
                border-style: solid;
                border-color: black;
            }
       (VS)
            div {
                border: 1px 2px 3px 4px solid black;
            }

VISIBILITY vs DISPLAY:
Visibility: hidden; 
still take up space on the DOM

Display: none; 
will collapse the element to 0x0

flexbox?

SASS: 
syntactically awesome style sheets
needs preprocessing.
eg:
a) grouping:
          .foo {
                .bar {
                    color: red;
                }
                .baz {
                    color: blue;
                }
            }

b) auto prefixer:
            div {
                display: flex;
            }
(TO)
            div {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
            }

c) Declaring variables:
$black: #000;



BEST PRACTICES:
a) CSS
Write the simplest selectors possible
Override as little as possible
Name things for what they are, not what they look like
Comment your CSS (when explanation is needed)
Avoid * and !important
b) SASS
Nest often, but not deep
Use variables for common colors, fonts, etc
Share as much as you can (mixins & placeholders)


FUNCTIONAL PROGRAMMING:
Lodash:
lab 
/**
	Steps:
	1. npm install lodash
	2. Run code: node lodash-lab.js
**/

var _ = require('lodash');

console.log('It\'s lab time');

var employeeList = [];

// Todo Write a function which takes a employee json as input and pushes it into employeeList array.

function insertData( employeeData ) {
	// code here
	_.forEach(employeeData, function(value,key){
		employeeList[key] = value;
	})	
}

// TODO Insert below employee data into employeeList by calling insertData

/**
 id    name                     college            age  qualification     
 1600 	Hannah Baker 			 Harvard    		23   MS
 1601 	Justin   				 Stanford  		    23   MS
 1602 	Jessica  		 		 MIT  				23   MS
 1603 	Marcus  				 Harvard  			23   MS
 1604 	Bryce 			 		 Cornell		    23   MS
 1605 	Clay 			 		 Columbia 			23   MS
 1606 	Tony  			 		 Harvard 		    23   MS
 */

var employeeData = [
	{id:1600, name:"Hannah Baker", college:"Harvard", age:23, qualification:"MS"},     
	{id:1601, name:"Justin", college:"Stanford", age:23, qualification:"MS"},
	{id:1602, name:"Jessica", college:"MIT", age:23, qualification:"MS"},
	{id:1603, name:"Marcus", college:"Harvard", age:23, qualification:"MS"},
	{id:1604, name:"Bryce", college:"Cornell", age:23, qualification:"MS"},
	{id:1605, name:"Clay", college:"Columbia", age:23, qualification:"MS"},
	{id:1606, name:"Tony", college:"Harvard", age:23, qualification:"MS"}
];
insertData(employeeData);

// TODO Write a function to print all employee in the above format.

function printAllEmployee() {
	//code here
	//Hint : _.forEach
	_.forEach(employeeList, function(value){
		console.log(value);
	})
}
//printAllEmployee();


// TODO Write a function which returns an array of json object with id only as a field.
// eg :  [{id:1600}, {id:1601}]

function displayAllIds() {
	// code here
	var temp = [];
	var i=0;
	_.forEach(employeeList, function(value){
		temp[i++] = {
			id:value.id
		}
	});
	console.log(temp);
}
//displayAllIds();


// TODO Write a function which return all employee name as string separated by comma.
// eg :  Hannah Baker, Justin

function displayAllEmployeeName () {
	// code here
	// _.forEach(employeeList, function(value){
	// 	console.log(value.name);
	// });
	// or
	var nameList = _.map(employeeList, 'name');
	var nameAsStr = _.join(nameList,',');
	console.log(nameAsStr);
		
}
//displayAllEmployeeName();

// TODO Write a function which returns an array of employee details from Harvard college.

function getEmployeeWithCollege(collegeName) {
	// code here
	_.forEach(_.filter(employeeList,{'college':collegeName}), function(value){
		console.log(value.name);
		})
	//or
	
}
//getEmployeeWithCollege('Harvard');


// TODO Write a function to return an array of college name

function collegeList(){
	// code here
	var nameList = _.uniq(_.map(employeeList, 'college'));
	console.log(nameAsStr);
}
//collegeList();



// TODO Write a function to find index of employee with id 16817

function findIndex( id ) {
	// code here
	console.log(_.findIndex(employeeList, {'id': id}));
}
findIndex(16817);

// TODO Write a function to sort employee details by name alphabetically.

function sortEmployeeName() {
	// code here
	console.log(_.sortBy(employeeList, 'name'));
			
}
//sortEmployeeName();

// TODO Write a function to remove all employee from Harvard college

function removeEmployeeWithGivenId( id ) {
	
	// code here
	console.log(_.remove(employeeList, function(employee){
		if(employee.id === id){
			return employee;		
		}
	}));

}
//removeEmployeeWithGivenId(1601);

// TODO Write a function to divide all employees in group of 3 for dance competition.

function danceTeam() {
	// code here
	console.log(_.chunk(employeeList, 3));
	
}


// TODO Write a function to group all employees with same college.
/**
 output = {
		'Harvard':[]// all employee from Harvard
		'Stanford':[]// all employee from Stanford	
	}
 */

function groupByCollege() {
	// code here
	console.log(_.groupBy(employeeList, 'college'));
	
}


// TODO Write a function which return all employee name as string seperated by comma in alphabetical order without creating any variables.

function employeeNameAlphabetically(){
	// code here
	console.log(_.join(_.map(_.sortBy(employeeList, 'name`'),'name'),','))
		
}

// TODO Write a function which return all employee name as string seperated by comma in alphabetical order without creating any variables.

function employeeNameAlphabetically(){
	
	// code here
		
}



JQUERY:

JSON Operations:
var responseString = '{"result":{"price":"$98.34"}}';
var responseObject = $.parseJSON(resultString);
$('.price').text(responseObject.result.price);

Selectors:
$('#idOfElement');
$('.classOfElement');
$('[href="http://www.factset.com/"]'); // <a href="http://www.factset.com/">
$('#header .price'); // <div id="header"> <div class="price">

Filters for selectors:
:first
$('.tile:first');

:odd
$('table tr:odd');

:gt
$('table tr:gt(1)');

:eq
$('.menu > li:eq(2)');

:visible
$('.tile:visible');


COMPARISION:
.js:
var priceElement =
      document.getElementById('price');
priceElement.innerText = priceValue;
priceElement.style.color = 'green';
// creating new element
var link = document.createElement('a');
link.href = 'http://www.factset.com';
link.innerText = 'FactSet';
document.body.appendChild(link);

jquery:
var $price = $('#price');
$price.text(priceValue);
$price.css('color', 'green');
// creating new element
$( document.createElement('a') )
  .attr('href', 'http://www.factset.com')
  .text('FactSet')
  .appendTo('body');

------
Actions in JQuery:

Changing attribute
$('a.facsetLink').attr('href', 'http://www.factset.com/');

Get or Set html
$('h1').html('Hello World');
$('h1').html() === 'Hello World'; // true

Add Class, Remove Class
$('li.menu-item.active').removeClass('active');
$('li.menu-item').eq('3').addClass('active');

Change css
$('h1').css('background', 'gray');

create a link to website
var $link1 = $( '<a href="http://www.factset.com">FactSet</a>');

var $link2 = $( '<a/>' ).text('FactSet').attr('href', 'http://www.factset.com');

var $link3 = $( '<a/>', {
  text: 'FactSet',
  href: 'http://www.factset.com'
});

EVENT LISTENER:
Handling a click event

// using .on('click', handler())
$('button').on('click', function () {
  alert('You clicked a button!');
});

//click, mouseover, mousemove, keydown, keyup

MOUSE LISTENER: 
//event.pageX, event.pageY
// the dom will follow mouse within the div.

var $welcomeSpan = $('<span></span>')
                      .css('position', 'absolute')
                      .text('Welcome!')
                      .appendTo('body');

$(document).on('mousemove', function (event) {
  $welcomeSpan.css({
    left: event.pageX + 10,
    top: event.pageY + 10,
  })
});


Preventing default behavior of an event 
//event.preventDefault()

// submitting for via ajax
$('form .submit').on('click', function (event) {
  event.preventDefault();
  console.log('Will submit via Ajax!');
});

// blocking links
$('a').on('click', function (event) {
  if ($(this).attr('href').indexOf('factset.com') === -1) {
    event.preventDefault();
    console.log('Link is blocked!');
  }
});


Custom events:
Use .trigger('eventName') to trigger events on jQuery objects

$( "#list a" ).trigger('click');

// You can also trigger custom event, with params
$( '#foo' ).on('custom', function (event, param1, param2) {
  console.log(param1, param2);
});

$( '#foo' ).trigger('custom', ['value1', 'value2']);





#include <iostream>
#include<string>
using namespace std;

// class MemoryOverflow {
// public:
// 	char *name;
// 	MemoryOverflow(int n) {
// 		name = new char[n];
// 		// strcpy(name, n1);
// 	}

//     // //to solve memory overflow
//     // ~MemoryOverflow(){
//     //     //delete[] name;
//     // }
// };

// int main() {
// 	while (1) {
// 		MemoryOverflow m(10000);
// 		// cout << m.name;
// 	}
// }

// template <typename T>
// class SmartPointer{
//   private:
//     T pointer;
//   public:
//     SmartPointer(T *p){
//         pointer = p;
//     }

//     T & operator *(){
//         return pointer;
//     } 

//     T 

// };



// template <typename T>
// class Stack{
//   private:
//     vector<T> elements;
//   public:
//     void push(T const &element) {
//         elements.push(element);
//     }
//     void pop(){
//         if (!empty()){
//             elements.pop();
//             return;
//         }
//         cout << "Stack empty";
//         return;
//     }
//     T top() const{
//         if (!empty())
//             return elements.top();
//         cout << "Stack empty";
//         return null;
//     }
//     bool empty() const{
//         return elements.empty();
//     }
// };

    // template <typename T, typename U>
    // class Tuple
    // {
    //   public:
    //     T key;
    //     U value;
    //     Tuple(T key1, U value1)
    //     {
    //         key = key1;
    //         value = value1;
    //     }
    // };

    // template <typename T>
    // class BinarySearch
    // {
    //   public:
    //     int startBinarySearch(T elementToBeSearched, T elements[]) //returns index of matched
    //     {
    //         int a = 0, b = elements.length() - 1;
    //         int mid = (a + b) / 2;
    //         while (a < b)
    //         {

    //         }
    //     }

    //     T stack[];
    //     void push(T const& a){
    //         elems[top().indexOf() + 1 ] = a;
    //     }

    // };
