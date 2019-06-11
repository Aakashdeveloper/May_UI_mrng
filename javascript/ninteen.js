function calc(opt){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    if(opt === "add"){
        if(isNaN(a) !== true && isNaN(b)!== true){
            out = parseInt(a)+parseInt(b)
        }else {
            out = 'Enter Valid Input'
        }
    } else if(opt === "sub") {
        out = parseInt(a)-parseInt(b)
    } else{
        out = 'No Input'
    }
    document.getElementById('output').innerText = out
}


/*function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    if(isNaN(a) !== true && isNaN(b)!== true){
        out = parseInt(a)+parseInt(b)
        document.getElementById('output').innerText = out
    }else {
        document.getElementById('output').innerText = 'Enter Valid Input'
    }
   
}

function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    out = parseInt(a)-parseInt(b)
    document.getElementById('output').innerText = out
    
}*/