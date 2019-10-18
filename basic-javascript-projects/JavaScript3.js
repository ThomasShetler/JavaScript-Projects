function sub() {
    var subb = 4-2;
    document.getElementById("subtract").innerHTML = "4-2 =" + subb;
}
function add() {
    var addd = 4+2;
    document.getElementById("addition").innerHTML = "4+2 =" + addd;
}
function mul() {
    var mull = 4*8;
    document.getElementById("multiplication").innerHTML = "4*8=" + mull;
}
function div() {
    var divv = 48/8;
    document.getElementById("division").innerHTML = "48/8=" + divv;
}
function mulop(){
    var math = (1+3)*10/2-5;
    document.getElementById("muloph").innerHTML = "1 plus 3 times 10 divided by 2 minus 5 = " + math;
}
function remain(){
    var remainn = 25%6;
    document.getElementById("remainder").innerHTML="when you divide 26 by 6 you have a remainder of: " + remainn;

}
function unary(){
    var x = 10;
    document.getElementById("unaryh").innerHTML="the unary operator is the negative operator so if we say -10 the - sign is the operator like so: " + -x;
}

function incre() {
    var x = 5;
    x++;
    document.getElementById("increh").innerHTML="the result of incrementing 5 is: " + x;
}

function decre() {
    var x = 5;
    x--;
    document.getElementById("decreh").innerHTML="the result of decrementing 5 is: " + x;
}

function rand(){
   
    document.getElementById("randh").innerHTML="get a number between 0-100, that number is: " + (Math.random()*100);

}
function ron(){
    document.getElementById("round").innerHTML="round the number 5.29 to the nearest single digit: " + (Math.round(5.29));
}