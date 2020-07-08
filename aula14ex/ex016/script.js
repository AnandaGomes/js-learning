function contar () {
  var inicio = document.getElementById('txti')
  var fim = document.getElementById('txtf')
  var passo = document.getElementById('txtp')
  var res = document.getElementById('res')

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = 'Impossível contar. Preencha todos os campos.'
  } else {
    res.innerHTML = 'Contando... <br>'
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (p <= 0) {
      window.alert('Passo inválido! Considerando o passo como 1...')
      p = 1
    }
    if (i < f) {
      //contagem crescente:
      for (var c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    } else {
      //contagem regressiva:
      for (var c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1f3C1}`
  }
}
