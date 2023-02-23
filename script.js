// ******************************Hoisting******************************

var a = 10;

console.log(a);

// ************* result = 10 *****************

// ------------------------------

var a = undefined;

console.log(a);

var a = 50;

// ************* result = undefined *****************

// ------------------------------

var a = "khan";

console.log(a);

a = "Ahmed";

// ************* result = khan *****************

// -------------------Let and Const Variable------------------

let name = "Faraz";

console.log(name);

// ************* result = Faraz *****************

// ---------------------------------

console.log(naam);

let naam = "Faraz";

// ************* result = Uncaught ReferenceError *****************


let number = 100;

number = 200;

console.log(number);

// ************************ result = 200 ************************


let number = 100;

console.log(number);

number = 200;

// ************************ result = 100 ************************

const num = 60;

console.log(num);

// ************************ result = 60 ************************


const num = 60;

num = 50;

console.log(num);

// ***************** result = Uncaught TypeError *******************

console.log(num);

const num = 60;

// ***************** result = Uncaught ReferenceError *******************

const number = 100;

console.log(number);

number = 200;

// ***************** result = 100 *******************
// ***************** result = Uncaught TypeError *******************



// -----------------------Function Hoisting------------------------


// 1) Function Declaration


function sum(a,b)
{
    return a + b;
}

console.log(sum(5,5));


// ***************** result = 10 *******************


// **************************

console.log(sum(5,5));

function sum(a,b)
{
    return a + b;
// }

// ***************** result = 10 *******************

// *********************************

var sum = function sum(a,b)
{
    return a + b;
}

console.log(sum(5,78));



// ************************result = 83************************

console.log(sum(54,78));

var sum = function sum(a,b)
{
    return a + b;
// }

// ************************result = Uncaught TypeError************************


var sum = function sum(a,b)
{
    return a + b;
}

console.log(sum(54,78))

// ************************result = 132************************

const sum = (a,b)=>
{
    return a + b;
}

console.log(sum(5,8))

// ************************result = 13************************

console.log(sum(5,8))

const sum = (a,b)=>
{
    return a + b;
}

// ************************result = Uncaught ReferenceError************************



// ******************************Lexical Scoping********************************

var a = "Assalam-o-Alaikum, Guys";

function one()
{
    var b = "How are you.."
    Two()

    function Two()
    {
        var c = "My name is Mohammad Faraz";
        console.log(a+b+c);
    }
}

one();


// ********************************Using Strict Mode********************************

"use strict"

function add(a,b)
{
    var sum = a + b;
    console.log(sum)
}

add(2,5)


// ----------------------------------------------


"use strict"

function add(a)
{
    var sum = a + 25;
    console.log(sum);
}

add(2,5)

// ************************result = 27************************


// ********************************Pass by Value********************************

let a = 100;

let b = a;

console.log(a);

console.log(b);

// ----------------------------------

let a = 100;

let b = a;

b = b + 50;

console.log(a);

console.log(b);


// ********************************Pass by Reference********************************

let obj1 = {
    name:"Mohammad",
    price:5000,
}

let obj2 = {
    name:"Faraz",
    price:15000,
}

console.log(obj1);

console.log(obj2);

// -------------------------------------------------

let obj3 = {
    name:"Mohammad",
    price:5000,
}

let obj4 = obj3;

obj3.address = "Karachi";

console.log(obj3);
console.log(obj4);


// -------------------------------------------------

let arr1 = ["Karachi","Lahore",12,true];

let arr2 = arr1;

arr2.unshift(100);

console.log(arr1);

console.log(arr2);


// -------------------------------------------------


let arr1 = ["Karachi","Lahore",12,true];

let arr2 = [].concat(arr1);

arr2.unshift(100);

console.log(arr1);

console.log(arr2);



// ***********************************ForEach Loop***********************************

let arr = ["Lahore",150,true,"Karachi","Aslam",false,80];


for(let x = 0 ; x < arr.length; x++)
{
    console.log(arr[x]);
}


arr.forEach(function(currentValue,index){
    console.log(index + " " + currentValue );
})


// -----------------------------------------------------------------------

let arr = [100,200,300,400,500,600,700,800];


arr.forEach(function(ele,index,arr){
    console.log(arr[index] + 100 );
})


// ***********************************String Methods***********************************

let firstName = "Mohammad";

console.log(`${firstName}`.startsWith('M'));

console.log(`${firstName}`.startsWith('m'));

console.log(`${firstName}`.endsWith('d'));

console.log(`${firstName}`.endsWith('D'));

console.log(`${firstName}`.includes('oh'));

console.log(`${firstName}`.repeat(5));

console.log(`${firstName}`.substring(1,2));


// ***********************************Object Destructuring***********************************

let objOne = {
    name: "Mohammad",
    age:22,
    degree: "Bachelors",
    address: "Karachi",
    hobbies: {
        first:"reading",
        second:"programming"
    }
}

let {name:myname,age,degree,address,hobbies} = objOne;

console.log(`My name is ${myname}. I am ${age} years old and I am a ${degree} student. I lived in ${address}. I am making ${hobbies.second}`);



// ***********************************Array Destructuring***********************************

let arr4 = ["Lahore",89,false,"Islamabad"]

let [city,num1,num2,cityOne] = arr4;

console.log(city);
console.log(num1);
console.log(num2);
console.log(cityOne);

// ***********************************Spread Operator***********************************


let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

arr1 = [...arr1,...arr2,...arr3];

console.log(arr1);


// ***********************************Math Object***********************************

let number = 5.84;

let number2 = -5.84;

let data = "Faraz";

console.log(Math.sign(number));

console.log(Math.sign(number2));

console.log(Math.sign(data));

// -------------------------------------------------


var number5 = 45.2184;

console.log(Math.trunc(number5));


// ***********************************Fetch Api***********************************

fetch('https://fakestoreapi.com/products').then((apiData)=>{
    return apiData.json();
}).then((actualData)=>{
    
    document.getElementById('One').innerHTML = actualData[1].category;
    document.getElementById('Two').innerHTML = actualData[1].description;
    const image = document.getElementById('four');
    document.getElementById('five').innerHTML = actualData[1].price;
    document.getElementById('six').innerHTML = actualData[1].title;
    image.src = actualData[1].image;

    // -----------------------------------------------------------------------

    document.getElementById('ra').innerHTML = actualData[2].category;
    document.getElementById('za').innerHTML = actualData[2].description;
    const image2 = document.getElementById('fa');
    document.getElementById('fr').innerHTML = actualData[2].price;
    document.getElementById('sr').innerHTML = actualData[2].title;
    image2.src = actualData[2].image;

}).catch((err)=>{
    console.log(err)
})

