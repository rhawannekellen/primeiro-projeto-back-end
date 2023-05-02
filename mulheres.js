const express = require ("express")
const router = express.Router()

const app = express ()
const porta = 3333 

const mulheres = [
    {
        nome: 'Rhawanne Kellen',
        imagem: '',
        minibio: 'Estudante de Análise e Desenvolvimento de Sistemas',
    },

    {
        nome: 'Iana Chan',
        imagem: '',
        minibio: 'Fundadora da Programaria',
    },

    {
        nome: 'Nina Da Hora',
        imagem: '',
        minibio: 'Hacker antirracista',
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)

}


function mostraPorta () {
    console.log ("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)