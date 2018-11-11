var c = document.getElementById( "mon_canvas" );
var ctx = c.getContext("2d");

//E
ctx.beginPath();      // Début du chemin
ctx.strokeStyle = "black";
ctx.lineWidth = "3";
ctx.moveTo(50,100);
ctx.lineTo(50,400);
ctx.moveTo(50,100);
ctx.lineTo(160,100);
ctx.moveTo(50,240);
ctx.lineTo(160,240);
ctx.moveTo(50,400);
ctx.lineTo(160,400);
ctx.stroke();
ctx.closePath();

//2
ctx.beginPath();
ctx.lineWidth="12";
ctx.strokeStyle="#EA5222";
ctx.moveTo(160,100);
ctx.bezierCurveTo(620,-170,200,360,110,480);   //bezierCurveTo( cp1x, cp1y, cp2x, cp2y, destx, desty )
ctx.stroke();

ctx.beginPath();      // Début du chemin
ctx.strokeStyle="#EA5222";
ctx.lineWidth = "10";
ctx.moveTo(110,480);
ctx.quadraticCurveTo(300,420,300,430);
ctx.stroke();
ctx.closePath();

//N
ctx.beginPath();      // Début du chemin
ctx.strokeStyle = "black";
ctx.lineWidth = "3";
ctx.moveTo(367,100);
ctx.lineTo(367,400);
ctx.moveTo(367,100);
ctx.lineTo(550,400);
ctx.lineTo(550,100);
ctx.moveTo(50,400);
ctx.lineTo(160,400);
ctx.stroke();
ctx.closePath();

//Texte
var text = 'Ecole du Numérique';
ctx.font = "20pt Verdana";
ctx.fillStyle = "grey";
ctx.fillText(text,367,430);

var text = 'du Noyonnais';
ctx.font = "20pt Verdana";
ctx.fillStyle = "grey";
ctx.fillText(text,367,460);

//Losanges
ctx.beginPath();      // Début du chemin
ctx.moveTo(645,110);
ctx.lineTo(630,120);
ctx.lineTo(630,135);
ctx.lineTo(645,145);
ctx.lineTo(660,135);
ctx.lineTo(660,120);
ctx.lineTo(645,110);
ctx.closePath();
ctx.fillStyle = "#EBEBEB";
ctx.fill();

ctx.beginPath();      // Début du chemin
ctx.moveTo(630,140);
ctx.lineTo(615,150);
ctx.lineTo(615,165);
ctx.lineTo(630,175);
ctx.lineTo(645,165);
ctx.lineTo(645,150);
ctx.lineTo(630,140);
ctx.closePath();
ctx.fillStyle = "#DBDADB";
ctx.fill();

ctx.beginPath();      // Début du chemin
ctx.moveTo(645,170);
ctx.lineTo(630,180);
ctx.lineTo(630,195);
ctx.lineTo(645,205);
ctx.lineTo(660,195);
ctx.lineTo(660,180);
ctx.lineTo(645,170);
ctx.closePath();
ctx.fillStyle = "#EA4E1A";
ctx.fill();

ctx.beginPath();      // Début du chemin
ctx.moveTo(665,140);
ctx.lineTo(650,150);
ctx.lineTo(650,165);
ctx.lineTo(665,175);
ctx.lineTo(680,165);
ctx.lineTo(680,150);
ctx.lineTo(665,140);
ctx.closePath();
ctx.fillStyle = "#595656";
ctx.fill();

ctx.beginPath();      // Début du chemin
ctx.moveTo(630,200);
ctx.lineTo(615,210);
ctx.lineTo(615,225);
ctx.lineTo(630,235);
ctx.lineTo(645,225);
ctx.lineTo(645,210);
ctx.lineTo(630,200);
ctx.closePath();
ctx.fillStyle = "#878787";
ctx.fill();

ctx.beginPath();      // Début du chemin
ctx.moveTo(665,200);
ctx.lineTo(650,210);
ctx.lineTo(650,225);
ctx.lineTo(665,235);
ctx.lineTo(680,225);
ctx.lineTo(680,210);
ctx.lineTo(665,200);
ctx.closePath();
ctx.fillStyle = "#ECECEC";
ctx.fill();

//Petits losanges
ctx.beginPath();      // Début du chemin
ctx.moveTo(710,160);
ctx.lineTo(705,165);
ctx.lineTo(705,170);
ctx.lineTo(710,175);
ctx.lineTo(715,170);
ctx.lineTo(715,165);
ctx.lineTo(710,160);
ctx.closePath();
ctx.fillStyle = "#EA4E1A";
ctx.fill();

ctx.beginPath();      // Début du chemin
ctx.moveTo(690,175);
ctx.lineTo(685,180);
ctx.lineTo(685,185);
ctx.lineTo(690,190);
ctx.lineTo(695,185);
ctx.lineTo(695,180);
ctx.lineTo(690,175);
ctx.closePath();
ctx.fillStyle = "#878787";
ctx.fill();
