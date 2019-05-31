var a = 10
if(a%2 ==0 ){
    console.log('even')
}else{
    console.log('odd')
}

function isEven(a){
    var out = ''
    if(a%2 ==0 ){
        out = 'even'
    }else{
        out = 'odd'
    }
    return out
}
//

closuer

function check(){
    var azz = 10
    var out = azz+1
    return out
}

var ui = 10
function check(){
    var azz = 10
    var out = azz+1+ui
    return out
}

for(i=0;i<2;i++){
    var ab = 10
    console.log(ab+i)
}

mul(2)(3)(4)


function mul(a,b,c){
    return a*b*c
}

function mul(x){
    return function(y){
        return function(z){
            return x*y*z
        }
    }
}


//Hoasting
a = 10

add(a,a)

function add(a){
    return a+a
}

var a


///////////
var a =10
step1:
var a;
step2:
a =10
step 3:
function add(a){
    return a+a
}
step 4:
add(a)