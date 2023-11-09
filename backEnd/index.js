const express = require('express')
const app = express()
const bp = require('body-parser')
const multer = require('multer')
const upload = multer()
const cors = require('cors')
const db = require('./firebaseConfig.js')


app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())
app.use(cors())

app.listen(4000, () => {
    console.log('Server rodando na porta 4000')
})

app.post('/cadastrar', upload.none(), (req, res) => {
    // cadastrar nomes, emails e numeros no banco de dados
    try{
        console.log(req.body)
        res.status(200).send('deu bom')
    } catch(e) {
        res.json(e)
    }


})

app.get('/eventos', async (req, res) => {
    console.log('# request recebida, buscando eventos...\n')

    try {
        const eventos = await db.collection('eventos').get()
        const data = eventos.docs.map(doc => doc.data())
        console.log('# Eventos buscados com sucesso, Eviando...')
        res.json(data)
    } catch (e) { res.status(500).send('Ocorreu algum erro interno no servidor!') }


})

app.post('/eventos', (req, res) => {
    newEventRef.set({
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
        image: req.body.image,
        url: req.body.url
    }, (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erro ao inserir evento no banco de dados.');
        } else {
            console.log('Evento inserido com sucesso!');
            res.status(201).send('Evento inserido com sucesso!');
        }
    });
});