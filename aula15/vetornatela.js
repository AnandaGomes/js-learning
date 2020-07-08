let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
//forma padrão de executar: console.log(valores)
//forma isolada de executar: console.log(valores[0])

/* Recurso tradicional para a exibição de vetor:
for (var pos = 0; pos < valores.length; pos++) {
  console.log(
    `A posição ${pos} no vetor, tem como valor o número: ${valores[pos]}`
  )
}

SIMPLIFICAÇÃO MAIS RECENTE:
*/

for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
