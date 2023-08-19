var randomeNumber1 = Math.floor(Math.random() * 6) + 1;// 1-6;

var randomeDicesImages = "dice" + randomeNumber1 + ".png";// dice-img1 to dice-img2; 

var randomImageSource = "images/" + randomeDicesImages;// images/dice1.png to images/dice2.png;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomeDicesImages2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomeDicesImages2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

if (randomeNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🚩Player 1 Wins!"
}
else if (randomNumber2 > randomeNumber1) {
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!"
}
else {
    document.querySelector("h1").innerHTML = "👔 Ohhh... its a tie!";
}