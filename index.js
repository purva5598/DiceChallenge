alert('Refresh again for another round!');
var rno1=Math.floor(Math.random()*6)+1;
var rdimg="dice"+rno1+".png";
var rimg="images/"+rdimg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",rimg);

var rno2=Math.floor(Math.random()*6)+1;
var rimg2="images/dice"+rno2+".png";
document.querySelectorAll("img")[1].setAttribute("src",rimg2);
if (rno1>rno2){
  document.querySelector("h2").innerHTML="🚩Player 1 Wins!";
}
else if (rno1<rno2) {
  document.querySelector("h2").innerHTML="🚩Player 2 Wins! ";
}
else {
  document.querySelector("h2").innerHTML="Draw!";
}
