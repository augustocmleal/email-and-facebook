var userId;
var usuario;
window.fbAsyncInit = function() {
	FB.init({
	  appId      : 'INSIRA SEU APP-ID', //ELE PODE SER GERADO A PARTIR DO SEU FACEBOOK..
	  status: true, 
      cookie: true, 
      xfbml: true,
      version: 'v2.7'
	});
	FB.getLoginStatus(function(response) {
	  if (response.status === 'connected') {
		//console.log(response.authResponse.accessToken);
		FB.api(
		  '/me',
		  'GET',
		  {},
		  function(response) {
			$('#login-facebook').hide();
			$('#loader').hide();
			$('#postBox').show();
			usuario = response.name;
			$('#msg-bemVindo').html("Bem vindo "+ usuario +"!");
			userId = response.id;
		  }
		);
	  }
	  else {
		myFacebookLogin();
		$('#login-facebook').show();
	  }
	});
	
};
(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
  
function myFacebookLogin() {
  FB.login(function(){}, {scope: 'publish_actions'});
}