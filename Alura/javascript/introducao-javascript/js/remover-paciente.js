var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

  if(event.target.tagName == "TD"){
    removeTr(event);
  }

});

function removeTr(event){
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
    event.target.parentNode.remove();
  }, 500);
}
