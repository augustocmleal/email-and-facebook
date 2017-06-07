<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="font-awesome/css/font-awesome.min.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	<script src="js/main.js"></script>
	<script src="js/facebook.js"></script>
</head>
<body>
<div id="loader" class="col-xs-144">
	<div class="col-xs-48 col-xs-offset-48 multipost-margin-top-50 text-center">
		<i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i>
	</div>
</div>
<button class="btn btn-primary btn-block" id="loginFacebook" onclick="myFacebookLogin()" >Login with Facebook</button>

<div id="postBox" class="multipost-margin-top-50">
	<div class="col-xs-72 col-xs-offset-36">
		<div class="col-xs-144">
			<div id="msg-bemVindo"></div>
		</div>
		<div class="col-xs-144">
			<div id="msg-sucesso"></div>
			<div id="msg-erro"></div>
		</div>
		
		<div class="col-xs-144 multipost-margin-bottom-30">
			<label for="postMessage"> Mensagem: </label>
			<textarea class="form-control" rows="5" id="postMessage"></textarea>
		</div>
		
		<div class="checkbox col-xs-144 multipost-margin-bottom-30">
			<label>
				<input type="checkbox" id="isEmail">
				Encaminhar mensagem para e-mail.
			</label>
		</div>		
		<div id="divEmail" class="col-xs-144 multipost-margin-bottom-30">
			<label for="mailEnderecos"> E-mails: </label>
			<textarea class="form-control" rows="3" id="mailEnderecos"></textarea>
		</div>
		<div class="checkbox col-xs-144 multipost-margin-bottom-30">
			<label>
				<input type="checkbox" id="isGrupo">
				Publicar em um grupo.
			</label>
		</div>
		<div id="divGrupo" class="col-xs-72 multipost-margin-bottom-30">
			<label for="postGroupId">Id do grupo:</label>
			<input type="text" class="form-control" id="postGroupId" />
		</div>
		
		<div class="col-xs-144">
			<div class="col-xs-72">
				<button class="btn btn-primary btn-block" onclick="publicar()" >Publicar</button>
			</div>
			<div class="col-xs-72">
				<button class="btn btn-primary btn-block" onclick="limparTudo()" >Limpar tudo</button>
			</div>
		</div>
			
	</div>
</div>

</body>
</html>
