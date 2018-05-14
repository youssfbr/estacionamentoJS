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

	console.log(carro);

	e.preventDefault();
}