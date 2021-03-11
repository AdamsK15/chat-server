const express = require('express')

const app = express()

const port = 3001

const mc = require('./controller/messages_controller')

const messageBaseUrl = '/api/messages'
app.post(messageBaseUrl, mc.create)
app.get(messageBaseUrl, mc.read)
app.put(`${messageBaseUrl}/:id`, mc.update)
app.delete(`${messageBaseUrl}/:id`, mc.delete)

app.listen(port, () => {
    console.log(`Server listening to port ${port}`)
})