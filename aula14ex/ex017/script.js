function tab () {
  var textnum = document.getElementById('txtn')
  var tab = document.getElementById('seltab')
  var res = document.getElementById('res')
  if (textnum.value.length == 0) {
    window.alert('Digite um número válido!')
  } else {
    var num = Number(textnum.value)
    var c = 1
    /* 
    OPÇÃO COM WHILE:
      while (c <= 10) {
      // cria uma opção dentro do select
      let item = document.createElement('option')
      item.text = `${num} x ${c} = ${num * c}`
      // cria um filho 'item' dentro da opção
      tab.appendChild(item)
      c++
    } 
    */
    // limpa os resultados da tabuada
    for (c = 1; c <= 10; c++) {
      // cria uma opção dentro do select
      let item = document.createElement('option')
      // vai dar um value='tab1'e etc dentro do HTML, o que pode ser útil
      item.value = `tab${c}`
      item.text = `${num} x ${c} = ${num * c}`
      // cria um filho do tipo 'item' dentro da opção
      tab.appendChild(item)
    }
  }
}
function limpaTela () {
  var tab = document.getElementById('seltab')
  tab.innerHTML = ''
}
