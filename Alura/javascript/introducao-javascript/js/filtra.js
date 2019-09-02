var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
  var pacientes = document.querySelectorAll(".paciente");
  pacientes.forEach(function(paciente){
    var nome = paciente.querySelector(".info-nome").textContent;
    if(campoFiltro.value.length > 0){
      var expressao = new RegExp(campoFiltro.value, "i");
      if(!expressao.test(nome)){
        paciente.classList.add("invisivel");
      }else{
        paciente.classList.remove("invisivel");
      }

    }else{
      paciente.classList.remove("invisivel");
    }
  });

});
