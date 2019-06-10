var bob = new Object();
bob.age = 10;
bob.color= "white"
bob.setAge = function(newAge){
    bob.age = newAge;
}

var tony = new Object();
tony.age = 10;
tony.color= "white"
tony.setAge = function(newAge){
    tony.age = newAge;
}

let createAge = function(newAge){
    this.age= newAge
}

var bob = new Object();
bob.age = 10;
bob.color= "white"
bob.setAge = createAge

var tony = new Object();
tony.age = 10;
tony.color= "white"
tony.setAge = createAge


let customer = {
    name: 'Gimmy',
    lname: 'ojk',
    id : 86868,
    fullName: function(){
        return this.name+ " "+this.lname
    }
}


function database(){
    this.add = function(a,b) { return a+b},
    this.sub = function(a,b) { return a-b},
    this.addToData = function(table, name) { 
        console.log(`Select * from ${table} where name = ${name}`)
    }
}

var sum = new database();
sum.add(1,2)
sum.addToData('Student', 'Yuib')


/////////////////
var city1 = {
    description: function(){
        return this.cityname + " is a city of "+this.country
    }
}


var city2 = {
    cityname:"London",
    country:'UK'
}

city1.description.call(city2)



var city1 = {
    description: function(){
        return this.cityname + " is a city of "+this.country
    }
}


var city2 = {
    cityname:"London",
    country:'UK'
}

city1.description.apply(city2)



var city1 = {
    description: function(a,b){
        return this.cityname + " is a city of "+this.country+' , '+a+' , '+b
    }
}


var city2 = {
    cityname:"London",
    country:'UK'
}

var city3 ={
    nnnn :['r','f','r']
}

city1.description.apply(city2, ['London Eye', 'Capital'])