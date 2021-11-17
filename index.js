
function clickDice() {
    // dice 1
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    var randomimg1 = "dice" + randomNumber1 + ".png";

    var img1 = document.querySelectorAll("img")[0].setAttribute("src", randomimg1);
    // dice 2
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomimg2 = "dice" + randomNumber2 + ".png";

    var img2 = document.querySelectorAll("img")[1].setAttribute("src", randomimg2);
// title change

    function whoWin(a, b) {
        if (a > b) {
            var player1=document.querySelector("h1").innerText = "🏆Player 1 win";
        } else if (a < b){
            var player2=document.querySelector("h1").innerText = "Player 2 win🏆";
        } else {
            var draw=document.querySelector("h1").innerText = "draw";
        }
    }
    whoWin(randomNumber1, randomNumber2);
}
clickDice();









