// es5
function add (a,b) {
    return a+b
}

add(1,2)

//es6
const add = (a,b) => { return a+b }

add(1,2)


var = 'redeclare & reassign'
let = 'reassign but cannot redeclare'
const = 'nor reassign nor redeclare'


for(i=0;i<2;i++){
    let ab = 10
    console.log(ab+i)
}

////////
// function declarations
function add (a,b) {
    return a+b
}

// function expressions
var add = function(a,b){
    return a+b
}

add(1,2)


