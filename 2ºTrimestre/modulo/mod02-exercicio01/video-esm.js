export function alugarFilme(nomeFilme, dataAluguel, preco)
 {
    return `Filme alugado: ${nomeFilme} | Data: ${dataAluguel} | Preço: R$ ${preco.toFixed(2)}`;
}

export function devolverFilme(nomeFilme, dataDevolucao) {
    return `Filme devolvido: ${nomeFilme} | Data de Devolução: ${dataDevolucao}`;
}
