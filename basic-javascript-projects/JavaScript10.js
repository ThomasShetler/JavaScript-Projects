function dislang(){
    var lang = document.getElementById("getter").value;
    var srg = lang.length;
    document.getElementById("length").innerHTML = srg;
}

var instruments = ["Guitar", "Drums", "Panio"];
var constant = "";
var y;
 function forloop() {
 for (y = 0; y < instruments.length; y++) {
    content += instruments[y] + "<br>";
 }
 document.getElementById("list_of_insurments").innerHTML = content;
}
function constant_function(){
    const Musical_Instrument = {type:"guitar", brand:"Fender",color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price ="$900";
    document.getElementById("constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;

}
const x = 10;
x = 7;
document.write(x);
var y = 7;
document.write(y);
{let y = 33;
document.write("<br>"+y);
}
document.write("<br>"+ y);
//yo this is comment
function myFunction(name) {
    return "Hello " + name;
  }
  document.getElementById("demo").innerHTML = myFunction("John");
  let car = {
    make:"doge",
    model: '1',
    year: '2012',
    color: "red",
    description : function() {
        return "the car is a " + this.make + this.year;
    }

   };
   document.getElementById("car-object").innerHTML = car.description();
   for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
  }
  for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
  }