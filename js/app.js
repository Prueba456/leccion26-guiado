
var contra1 = document.getElementById("contras");
var contra2 = document.getElementById("confir");
window.addEventListener("load", function (e){
  e.preventDefault();
  contra2.addEventListener("blur", function(){
  if (contra1.value == contra2.value){
    alert("Las dos claves son iguales")
  } else{
    alert("Las dos claves son distintas")
  }
  })
})
