// Classe para chamar o Json.
function json(){
	var qtd;
	var retorno;

	// Resgatar valores.
	json.prototype.resgatarValores = function(){
		$('#resultado').html('Carregando dados...');

		// Estrutura de resultado.
		$.getJSON('file.json', function(data){
			this.qtd = data.length;
			this.retorno = '';

			for (i = 0; i < this.qtd; i++){
				this.retorno += 'ID: ' + data[i].id + '<br />';
				this.retorno += 'Nome: ' + data[i].nome + ' - ';
				this.retorno += 'Cidade: ' + data[i].inicio + '<br /><br />';
			}

			$('#resultado').html(this.retorno);
		});

	}

}

// Objeto.
var obj = new json();
obj.resgatarValores();
