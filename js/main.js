$( document ).ready(function(){
	$('#postBox').hide();
	$('#loginFacebook').hide();
	$('#divGrupo').hide();
	$('#divEmail').hide();
	
	$('#isGrupo').change(function(){
		var exibeGrupo = document.getElementById("isGrupo").checked;
		if(exibeGrupo == true){
			$('#divGrupo').show();
		}else{
			$('#divGrupo').hide();
		}
		
	});
	
	$('#isEmail').change(function(){
		var exibeEmail = document.getElementById("isEmail").checked;
		if(exibeEmail == true){
			$('#divEmail').show();
		}else{
			$('#divEmail').hide();
		}
		
	});
});


function limparTudo(){
	$('#postMessage').val("");
	$('#postGroupId').val("");
	$('#mailEnderecos').val("");
}

function publicar() {
	var grupoId = $('#postGroupId').val();
	var mensagem = $('#postMessage').val();
	var url = "";
	var tituloUrl = "";
	var descricaoUrl = "";
	var imagem = "";
	var destino = '/feed';
	var parametros = {};
	if(grupoId != ""){
		destino = '/' + $('#postGroupId').val() + '/feed/';
	}
	if(mensagem != ""){ parametros.message = mensagem;}
	if(url != ""){parametros.link = url;}
	if(tituloUrl != ""){parametros.name = tituloUrl;}
	if(descricaoUrl != ""){parametros.caption = descricaoUrl;}
	if(imagem != ""){parametros.picture = imagem;}
	
	FB.api(
	  destino,
	  'POST',
	  parametros,
	  function(response) {
		if(response.error == null){
			
			$('#msg-sucesso').html("Sua mensagem foi publicada com sucesso!");
		}else{
			$('#msg-erro').html("O facebook retornou um erro: " +  response.error.message);
		}
	  }
	);
}

function enviarEmail(){
	var destinatario = $('#mailDestinatario').val();
	$http({
		url: 'php/enviar.php',
		method: 'POST',
		data: {
			'nome': $scope.usuario.nome,
			'email': $scope.usuario.email,
			'mensagem': $scope.usuario.mensagem,
		},
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}).
	success(function (data) {
		$scope.success = true;
		//exemplo de retorno: alert(data['email']);
		$scope.error = false;
		$scope.usuario = {};
	}).
	error(function (data) {
		$scope.error = true;
		$scope.success = false;
		
	}); 
		
}

function msg(tipo, texto){
	if(tipo=="erro"){
		$('#msg-erro').html("<div class='alert alert-danger alert-dismissible' role='alert'>"+
			"<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"+
			texto +
		"</div>");
	} else {
		$('#msg-sucesso').html("<div class='alert alert-success alert-dismissible' role='alert'>"+
			"<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"+
			texto +
		"</div>");
	}


}

/*Id Grupo para teste: 1597232953824967 (Bola pesada)*/