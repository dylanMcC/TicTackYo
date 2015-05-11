var CurrentTurn = 1;

document.getElementById('Slot1').addEventListener("click", changeTheSquare1);
document.getElementById('Slot2').addEventListener("click", changeTheSquare2);
document.getElementById('Slot3').addEventListener("click", changeTheSquare3);
document.getElementById('Slot4').addEventListener("click", changeTheSquare4);
document.getElementById('Slot5').addEventListener("click", changeTheSquare5);
document.getElementById('Slot6').addEventListener("click", changeTheSquare6);
document.getElementById('Slot7').addEventListener("click", changeTheSquare7);
document.getElementById('Slot8').addEventListener("click", changeTheSquare8);
document.getElementById('Slot9').addEventListener("click", changeTheSquare9);

function changeTheSquare1(){
	if ('CurrentTurn' == 1){
		document.getElementById('Slot1').src = "img/B_image.jpg";
	}
}