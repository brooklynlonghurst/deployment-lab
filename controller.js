let database = []

module.exports = {

    signup: (req, res) => {
        database.push(req.body)
        res.status(200).send(database)
        console.log(database)
    }


}