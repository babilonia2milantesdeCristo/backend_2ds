// importação moderna com ESM (import)
import express from 'express'

const app = express () // instanciar Express

app.get('/', (req, res) => {
    res.send(` <h3>Página Inicial</h3>\n <p>Loja especializada em roupas</p>`)
})
app.get('/Negresco', (req, res) => {
    res.send('Que bolacha GOSTOSA!!!!!!!')
})

app.listen(3000, () => {console.log('Servidor está viva!')})