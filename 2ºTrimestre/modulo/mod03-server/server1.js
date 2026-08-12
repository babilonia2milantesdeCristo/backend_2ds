const http = require('node:http')
const path = require('node:path')
const fs = require('node:fs')
const porta = 8002
// Carrega o caminho dos arquivos

const home = path.join(__dirname, 'pages/index.html')

const sobre = path.join(__dirname, 'pages/sobre.html')

const server = http.createServer((req, res) =>{
 // qual informação eu tenho?
 const urlTratada = new URL(req.url, `http://${req.headers.host}`)//limpeza de URL
 const recurso = urlTratada.pathname // em qual rota estamos?

 if(recurso === '/'){ // Página inicial
    return res.setHeader('Contant-Type', 'text/html; charset=utf-8')
    res.statusCode = 200
    res.end(fs.readFileSync(home, 'utf-8'))
 }

 if(recurso === '/sobre'){
    return res.setHeader('Contant-Type', 'text/html; charset=utf-8')
    res.statusCode = 200
res.end(fs.readFileSync(sobre, 'utf-8'))
 }

 if(recurso === '/'){
    res.setHeader('Contant-Type', 'text/html; charset=utf-8')
    res.statusCode = 200
res.end(' <h3>Página Inicial</h3>')
 }
 
 if(recurso == '/'){
    res.setHeader('Contant-Type', 'text/html; charset=utf-8')
    res.statusCode = 401
res.end(' <h3>401 Não Autorizado!</h3>')
 }

 res.setHeader('Content-Type', 'text/plan')
 res.end('Bem-vinddo(a)! \nHomepage \\o/')
})

server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})