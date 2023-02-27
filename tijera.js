let compu = '';
let juegoCompu = '';

let winAudio = new Audio('./sound/win.wav');
let loseAudio = new Audio('./sound/lose.wav');
let clickAudio = new Audio('./sound/click.wav');
let wrongAudio = new Audio('./sound/wrong.wav');

const rootStyle = document.documentElement.style;

// 0 piedra, 1 papel, 2 tijera

function juego(user, compu) {
	document.querySelector('#mensaje').style.animation = '';
	compu = Math.floor(Math.random() * 3);
	// mensaje
	if (compu == 0) juegoCompu = 'PC: Piedra 🗿';
	if (compu == 1) juegoCompu = 'PC: Papel 📜';
	if (compu == 2) juegoCompu = 'PC: Tijera ✂';

	// comprobacion del juego
	if (user == compu) {
		crearMensaje('Empate 😐');
		wrongAudio.play();
		rootStyle.setProperty('--bg', '#ffd900');
	} else if (user == 0 && compu == 2) {
		crearMensaje('Ganaste 🤑');
		rootStyle.setProperty('--bg', '#008321');
		winAudio.play();
	} else if (user == 1 && compu == 0) {
		crearMensaje('Ganaste 😎');
		rootStyle.setProperty('--bg', '#008321');
		winAudio.play();
	} else if (user == 2 && compu == 1) {
		crearMensaje('Ganaste 😌');
		rootStyle.setProperty('--bg', '#008321');
		winAudio.play();
	} else {
		crearMensaje('Perdiste 😥');
		loseAudio.play();
		rootStyle.setProperty('--bg', '#ff0800');
		document.querySelector('#mensaje').style.animation = 'tiembla .04s';
	}
}

// Mensaje
function crearMensaje(msg) {
	const mensaje = document.querySelector('#mensaje');
	mensaje.insertAdjacentHTML(
		'afterbegin',
		`
    <div class='mensaje'>
        ${msg} <br>
        ${juegoCompu}
    </div>`
	);
}
