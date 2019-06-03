var first = [1,2,3]
var second = ['a','b','c', ...first, 'd']

// console.log(second)

var arr = [2,3,6,7,3,1]
var min = Math.min(...arr)

// console.log(min)


var name='john'
var out = [...name];

// console.log(out)


var marks = [2,5,7,9]
var output = marks.map((a)=>{return a*2})
var output1 = marks.map(Math.sqrt)
// console.log(output)
// console.log(output1)

var age = [10,32, 23,15]

/*function checkAge(age){
    return age >= 18
}*/

//const checkAge = (age) => { return age >= 18}
var valid = age.filter((age) => { return age >= 18})
// console.log(valid)

var a = [0,1,2,3]
var outmap = a.map((a) => {return a*1})
var outfil = a.filter((a) => {return a*1})
console.log('>>>>>map', outmap)
console.log('>>>>>filter', outfil)