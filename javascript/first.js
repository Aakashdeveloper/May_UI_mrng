Es (EcmaScript)
Es5 => Es6
String
Number 
Boolean

var input = "Marks"
var input1 = "324"
var input2 = "true"
typeof(input)
"string"

var output = 'Marks'
var output1 = 'Marks"
var output2 = "Marks'

var marks = 23
var marks1 = 437.434
typeof(marks)
"number"
typeof(marks1)
"number"

var condition = true /false
typeof(condition)

Anything in quotes is string
Numberic value is number
True/false is boolean



/**************************
 *      Operations 
 * ************************/
var a = 10
undefined
var b = 10
undefined
a+b
20
a-b
0
a*b
100
a/b
1

var a = "Hi"
undefined
var b = " JavaScript"
undefined
a+b
"Hi JavaScript"
a-b
NaN
a*b
NaN
a/b
NaN

var a = "10"
undefined
var b = 10
undefined
a+b
"1010"
var c = 10
undefined
a+b+vc
VM552:1 Uncaught ReferenceError: vc is not defined
    at <anonymous>:1:5
(anonymous) @ VM552:1
a+b+c
"101010"
b+c+a
"2010"

string+String => string
string+number => string
number+String => string
number+number => number

var a = "10"
undefined
typeof(a)
"string"
var b = 10
undefined
a+b
"1010"
var c = 10
undefined
b+c
20
b+c+a
"2010"
a+b+c
"101010"


10+10+"10"
"2010"
"10"+10+10
"101010"
"10"+10+"10"
"101010"


string+boolean = string
boolean+boolean = number
boolean+number = number

var a = true
undefined
var b = true
undefined
a+b
2
var c = false
undefined
c+a
1
var d = "hi "
undefined
a+d
"truehi "

console.log("regerg")
VM1596:1 regerg
undefined
alert("hii")
undefined
alert("hii")
undefined
confirm("do you like it")
false
prompt("Is this ok")
"yes"
prompt("Is this ok")
null