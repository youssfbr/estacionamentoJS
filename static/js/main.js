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
		var carros = JSON.parse(localStorage.getItem('patio'));
		carros.push(carro);
		localStorage.setItem('patio2', JSON.stringify(carros));
	}
	

	e.preventDefault();
}