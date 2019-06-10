function language(name, country){
    this.name = name;
    this.country = country
}

var hindi = new language('HINDI', 'INDIA')



class language1{
    constructor(name, country){
        this.name = 'KKKK';
        this.country = country
    }
}

var hindi = new language1('HINDI', 'INDIA')


class Mage extends language1 {
    constructor(name, country, country2){
        super(name ,country)


        this.country2 = country2
    }
}