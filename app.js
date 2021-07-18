const express = require('express')
const app = express()
const { Server } = require('socket.io')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 3000

app.set('views', 'views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => console.log('socket server listening at port ' + PORT))

