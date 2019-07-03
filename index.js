

function winner() {
  var randomNumber1 = Math.floor((Math.random()*6)+1);
  var randomImgName1 = "images/dice"+randomNumber1+".png";
  var leftImage = document.querySelector(".img1");
  leftImage.setAttribute("src", randomImgName1);

  var randomNumber2 = Math.floor((Math.random()*6)+1);
  var randomImgName2 = "images/dice"+randomNumber2+".png";
  var rightImage = document.querySelector(".img2");
  rightImage.setAttribute("src", randomImgName2);

  var header = document.querySelector("h1");

  if (randomNumber1 === randomNumber2) {
    header.innerText = "It's a draw, play again!";
  } else if (randomNumber1 > randomNumber2) {
    header.innerText = "Player 1 won!";
  } else {
    header.innerText = "Player 2 won!";
  }

}

winner();
