dice = Math.floor((Math.random() * 6 + 1));
dice2 = Math.floor((Math.random() * 6 + 1));

if(dice === 1){
    document.firstElementChild.lastElementChild.querySelectorAll("div img")[0].src = "images/dice1.png"
}
else if(dice === 2){
    document.firstElementChild.lastElementChild.querySelectorAll("div img")[0].src = "images/dice2.png"
}
else if(dice === 3){
    document.firstElementChild.lastElementChild.querySelectorAll("div img")[0].src = "images/dice3.png"
}
else if(dice === 4){
    document.firstElementChild.lastElementChild.querySelectorAll("div img")[0].src = "images/dice4.png"
}
else if(dice === 5){
    document.firstElementChild.lastElementChild.querySelectorAll("div img")[0].src = "images/dice5.png"
}
else
{
    document.firstElementChild.lastElementChild.querySelectorAll("div img")[0].src = "images/dice6.png"
}


if(dice2 === 1){
    document.firstElementChild.lastElementChild.querySelectorAll("div img")[1].src = "images/dice1.png"
}
else if(dice2 === 2){
    document.firstElementChild.lastElementChild.querySelectorAll("div img")[1].src = "images/dice2.png"
}
else if(dice2 === 3){
    document.firstElementChild.lastElementChild.querySelectorAll("div img")[1].src = "images/dice3.png"
}
else if(dice2 === 4){
    document.firstElementChild.lastElementChild.querySelectorAll("div img")[1].src = "images/dice4.png"
}
else if(dice2 === 5){
    document.firstElementChild.lastElementChild.querySelectorAll("div img")[1].src = "images/dice5.png"
}
else
{
    document.firstElementChild.lastElementChild.querySelectorAll("div img")[1].src = "images/dice6.png"
}

if(dice > dice2)
{
    document.firstElementChild.lastElementChild.firstElementChild.innerText = "Player 1 Wins!"
}
else if (dice < dice2)
{
    document.firstElementChild.lastElementChild.firstElementChild.innerText = "Player 2 Wins!"
}
else
{
    document.firstElementChild.lastElementChild.firstElementChild.innerText = "Tie!"
}