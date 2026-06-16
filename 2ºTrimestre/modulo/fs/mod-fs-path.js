
const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default

try {
    //                                   módulo fs                     
    const arquivo = fs.readFileSync(path.join(__dirname, './festa.md'), 'utf-8')
 console.log(chalk.green('Arquivo carregado com sucesso!!'))
    console.log(arquivo)
} catch(erro){
    console.log(chalk.red("Deu ruim:"))
    console.log(erro.message)
}