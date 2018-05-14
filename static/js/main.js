document.getElementById('formulario').addEventListener('submit', cadastraVeiculo);

function cadastraVeiculo(e) {
	var modeloCarro = document.getElementById('modeloCarro').value;	
	var placaCarro = document.getElementById('placaCarro').value;	
	var time = new Date();

	carro = {
		modelo: modeloCarro,
		placa: placaCarro,
		hora: time.getHours(),
		minutos: time.getMinutes()
	}

	if (localStorage.getItem('patio2') === null) {
		var carros = [];
		carros.push(carro);
		localStorage.setItem('patio2', JSON.stringify(carros));
	} else {
		var carros = JSON.parse(localStorage.getItem('patio2'));
		carros.push(carro);
		localStorage.setItem('patio2', JSON.stringify(carros));
	}
	
	mostraPatio();

	e.preventDefault();
}

function mostraPatio() {
	var carros = JSON.parse(localStorage.getItem('patio2'));
	var carrosResultado = document.getElementById('resultados');

	carrosResultado.innerHTML = '';

	for (var i = 0; i < carros.length; i++) {
		var modelo = carros[i].modelo;
		var placa = carros[i].placa;
		var hora = carros[i].hora;
		var minutos = carros[i].minutos;

		carrosResultado.innerHTML += '<tr><td>' + modelo +
								'</td><td>' + placa +
								'</td><td>' + hora + ' : ' + minutos +
								'</tr>';
	}
}