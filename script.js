function verificar(){
  var vel = document.getElementById("vel")
  var velocidade = Number(vel.value)
  var msg = document.getElementById("resp")
  var multa = document.getElementById("multa")
  if(velocidade > 60){
    multa.innerHTML =`A sua velocidade é de ${velocidade} km/h. MULTADO(A)!`
    document.body.style.background = "red"
    document.getElementById("botao").style.background = "red"
  }else{
    multa.innerHTML = `A sua velocidade é de ${velocidade} km/h. Continue seguindo as leis de trânsito.`
    document.body.style.background = "green"
    document.getElementById("botao").style.background = "green"

  }
    msg.innerHTML = "Use sempre o cinto de segurança!"
}
