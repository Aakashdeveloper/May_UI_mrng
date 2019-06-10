function robot(name){
    this.name = name;
    this.legs =2;
    this.color = 'white'
}

function human(name){
    this.name = name;
    this.hands = 2
}

human.prototype = new robot()

var pepper = new robot('pepper');
var andrew = new human('Andrew')