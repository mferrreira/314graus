const express = require('express')
const app = express()
const bp = require('body-parser')
const multer = require('multer')
const upload = multer()
const cors = require('cors')


app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())
app.use(cors())

app.listen(4000, () => {
    console.log('Server rodando na porta 4000')
})

app.post('/cadastrar', upload.none(), (req, res) => {
    console.log(req.body)

    // Preparar e enviar o form para o banco de dados

    res.send('oi')
})

app.get('/eventos', (req, res) => {
    console.log('request recebida!')


    const db = admin.database()
    const ref = db.ref('eventos')

    const eventos = [
        {
            id: 1,
            name: "Item 1",
            description: "Description of item 1",
        },
        {
            id: 2,
            name: "Item 2",
            description: "Description of item 2",
        },
        {
            id: 3,
            name: "Item 3",
            description: "Description of item 3",
        },
        {
            id: 4,
            name: "Item 4",
            description: "Description of item 4",
        },
    ];

    res.send(eventos)
    // puxar os eventos do banco de dados e enviar

})

app.post('/eventos', (req, res) => {
    /*
        newEventRef.set({
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
        image: req.body.image,
        url: req.body.url
    }) */
})