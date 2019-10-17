var jojo = "hi";

function changeColor(newColor) {
    var element = document.getElementById('Concatenate');
    element.style.color = newColor;

}

function myFunction() {
    var sentance = "I am learning";
    sentance += " a lot of good stuff";

    document.getElementById("Concatenate").innerHTML = sentance;
}