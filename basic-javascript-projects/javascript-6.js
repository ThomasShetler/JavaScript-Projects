function Ride_Function(){
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"you are tall enough";
    document.getElementById("ride").innerHTML=Can_Ride+" to ride.";

}
function can_vote(){
    var Age, Vote;
    Age = document.getElementById("Age").value;
    Vote = (Age < 18) ? "you are too young":"you are old enough"
    document.getElementById("result").innerHTML=Vote+" to vote";
}
function vehicle(make,model,year,color){
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;

}
var jack=new vehicle("porsh","model x",2019,"red");
var jim=new vehicle("jeep","model y",2018,"blue");
var Shrek=new vehicle("Orgre Car","Swampster",1996,"green");
function myFunction() {
    document.getElementById("Key_and_Con").innerHTML = 
    "Shrek drives a "+Shrek.vehicle_color +"-colored " + Shrek.vehicle_model+" created in the year "+ Shrek.vehicle_year;
}
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
var joe=new Person("Joe", "Smith",67,"brown")  

function personfun(){
    document.getElementById("disp").innerHTML="this mans name is "+joe.firstName + joe.lastName + "they are " + joe.age;
}