var marks = [10,23,45,6,78,4]

var java = ["d","DF","dfge","rg"]
var java1 = [3,5,6,7,3,5,7]
var java2 = [true, false, false ,true]

var javascript = [3,4,"fd","fg",true, false,4,5,7,"dsf"]
var javascript = [3,4,"fd","fg",true, false,4,5,7,"dsf"]
undefined
javascript.length
10
javascript[0]
3
javascript[1]
4
javascript[10]
undefined
javascript[9]
"dsf"
javascript[javascript.lenght-1]
undefined
javascript[javascript.length-1]
"dsf"


/*
push => add at the end
pop => take out from the last
shift => take out from the begining
unshift => add  at the begining
*/

var city = ["London", "newyork", "delhi", "amsterdam", "Sydeny"]

undefined
city.slice(1)
(4) ["newyork", "delhi", "amsterdam", "Sydeny"]
var city = ["London", "newyork", "delhi", "amsterdam", "Sydeny"]

undefined
city.slice(3,4)
["amsterdam"]
city.splice(2,0,'Oakland','Vancover')
[]
city
(7) ["London", "newyork", "Oakland", "Vancover", "delhi", "amsterdam", "Sydeny"]
city.splice(4,1,'Mumbai')
["delhi"]
city
(7) ["London", "newyork", "Oakland", "Vancover", "Mumbai", "amsterdam", "Sydeny"]
city.splice(3,3,'Vanice')
(3) ["Vancover", "Mumbai", "amsterdam"]
city
(5) ["London", "newyork", "Oakland", "Vanice", "Sydeny"]
city.splice(3,1,'Delhi', 'Davos', 'Zurich')
["Vanice"]
city
(7) ["London", "newyork", "Oakland", "Delhi", "Davos", "Zurich", "Sydeny"]

// Es6 destructuring assignment
var a , b 
undefined
[a,b]=[1,2]
(2) [1, 2]
a
1
b
2


var city = ["London", "newyork", "Oakland", "Delhi", "Davos", "Zurich", "Sydeny"]
undefined
city.indexOf("newyork")
1
city.indexOf("davos")
-1
city.indexOf("Davos")
4
city.indexOf("mumbai")
-1
city.indexOf("pearth")
-1

