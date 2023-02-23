// declaração das varáveis no js na qual vão receber o id do HTML
const turnOn = document.getElementById('turnOn');
const  turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp')

function lampOn() {
	if (!isLampBroken() ) {
	lamp.src = './img/ligada.jpg';
	}
}

function lampOff() {
	if (!isLampBroken() ) {
	lamp.src = './img/desligada.jpg'
	}
}

function concertlamp () {
	lamp.src = './img/desligada.jpg'
}

function lampBreak () {
	lamp.src = './img/quebrada.jpg'
} 
//função para verifica se a lampada está quebrada ou nÕ
function isLampBroken () {
	return lamp.src.indexOf('quebrada') > -1
	
}

//eventos que ocorreram
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBreak)
concertLamp.addEventListener('click', concertlamp);