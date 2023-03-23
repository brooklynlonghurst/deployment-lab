const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static(`${__dirname}/public`))

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '9d200ebe8dfc40bca705783989139d45',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

let emptyArr = []

app.post('/api/signup', (req, res) => {
    let {input} = req.body

    const index = emptyArr.findIndex(signup => {
        return signup === input
    })

    try {
        if (index === -1 && input !== ''){
            emptyArr.push(input)
            res.status(200).send(emptyArr)
        }
    } catch (err) {
        console.log(err)
    }
})









app.listen(4000, () => {
    console.log('app is up on 4000')
})