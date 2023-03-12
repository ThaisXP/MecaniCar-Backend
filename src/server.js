import express from 'express'
import fs from 'fs'
import cors from 'cors'

const app = express();

const port = process.env.PORT || 4000

app.use(cors()) //Habilita o CORS-Cross-origin resource sharing
app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // Parse JSON payloads
app.disable('x-powered-by') //Removendo o x-powered-by por segurança

// Rotas do conteúdo público 
app.use('/', express.static('public'))

// Definimos a nossa rota default
app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'API MecaniCar - 100% funcional!🚗🚘',
    version: '1.0.1'
  })
})

// Rota para tratar exceções - 404 (Deve ser a última rota SEMPRE) 
app.use(function (req, res) {
  res.status(404).json({
    errors: [
      {
        value: `${req.originalUrl}`,
        msg: `A rota ${req.originalUrl} não existe nesta API 🚫`,
        param: 'routes'
      }
    ]
  }
  )
})

app.listen(port, function () {
  console.log(`🚀 Servidor rodando na porta ${port}`)
})

