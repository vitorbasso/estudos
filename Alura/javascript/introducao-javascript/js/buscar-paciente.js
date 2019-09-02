var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
  console.log("Buscando pacientes...");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
    var erroAjax = document.querySelector("#erro-ajax");

    if(xhr.status == 200){
      var pacientes = JSON.parse(xhr.responseText);


      pacientes.forEach(function(paciente){
        adicionaPacienteNaTabela(paciente);
      });
      console.log("Pacientes adicionados");
      erroAjax.classList.add("invisivel");
    }else{
      erroAjax.classList.remove("invisivel");
      console.log(xhr.status);
      console.log(xhr.responseText);
    }

  });

  xhr.send();

});
