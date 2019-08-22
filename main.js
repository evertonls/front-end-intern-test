(function () {
  const contactForm = document.getElementById('contact');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  var erro = false;

    contactForm.addEventListener('submit', function (evt) {

      if(nameInput.value == ""){

        window.alert('Por favor preencha o campo Nome.');
        document.getElementById('name').focus();
        erro = false;

      }
      else if(emailInput.value == ""){

        window.alert('Por favor preencha o campo Email. ');
        document.getElementById('email').focus();
        erro = false;

      }
      else if(emailInput.value.indexOf('@') == -1){

        window.alert('Email invalido.');
        document.getElementById('email').focus();
        erro = false;

      }
      else if(messageInput.value == ""){

        window.alert('Por favor preencha o campo Mensagem.');
        document.getElementById('email').focus();
        erro = false;

      }
      else {

        window.alert('Parabéns sua mensagem foi enviada com sucesso!');
        erro = true;

      }
      if(!erro){

        evt.preventDefault();
        
      }
    });
})();
