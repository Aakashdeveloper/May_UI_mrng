// literal
var country = {name:'India', capital:'Delhi', population:239748787}

country
{name: "India", capital: "Delhi", population: 239748787}
country.name
"India"
country.capital
"Delhi"
country.population
239748787
country.climate="Hot"
"Hot"
country
{name: "India", capital: "Delhi", population: 239748787, climate: "Hot"}
country.population= 1000000000
1000000000
country
{name: "India", capital: "Delhi", population: 1000000000, climate: "Hot"}
delete country.climate
true
country
{name: "India", capital: "Delhi", population: 1000000000}
country['name']
"India"
country['states']=30
30
country
{name: "India", capital: "Delhi", population: 1000000000, states: 30}
delete country['population']
true


var country = {name:'India', capital:'Delhi', population:239748787
                , state:['MP','UP','AP']}

///////////////
Constructor

var car = new Object()
car.name= "Merc";
car.color= 'silver';
car.price= 98787098


var country = {name:'India', capital:'Delhi', population:239748787}
var out = []
for (a in country){
    out.push(country[a])
}


var country = {name:'India', capital:'Delhi', population:239748787}
var city = [
        {name:'Delhi', capital:'Delhi', pincode: 110060},
        {name:'Maharastra', capital:'Mumbai', pincode: 110060},
        {name:'Hp', capital:'Shimla', pincode: 110060},
        {name:'Harayan', capital:'Chandigarh', pincode: 110060},
]

[name,capital,pincode,'Delhi','Delhi',110060, 'Maharastra', 'Mumbai',110060 ]

city[0]
{name: "Delhi", capital: "Delhi", pincode: 110060}
city[0].name
"Delhi"
city[0]['name']
"Delhi"

var lastName = 'abc'
var bob = {
    firstName:"bob",
    age:'23',
    summary: function(){
        return "Hi " +  this.firstName + this.lastname + " your age is "+ this.age
    }
}