let id = 0
let messages = []

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body
        messages.push({
            id: req.body,
            text: req.body,
            time: req.body,

        })
        res.status(200).send(messages)
        id++
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        const { text } = req.body
        const updateID = req.params.id
        const messageIndex = messages.findIndex(message => message.id == updateID)
        let message = messages[messageIndex]

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        res.status(200).send(messages)
    },
    delete: (req, res) => {
        const deleteID = req.params.id
        const messageIndex = messages.findIndex(message => message.id == deleteID)
        messages.splice(messageIndex, 1)
        res.status(200).send(messages)
    }
}