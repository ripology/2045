const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3100
const app = express()

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://rip:admin@cluster0-s2lpv.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const ChoiceSchema = new mongoose.Schema({
    action:{
        required: true,
        type: String
    },
    text:{
        required: true,
        type: String
    }
})

const ChoiceModel = mongoose.model("Choices", ChoiceSchema)

const postChoice = async (request, response) => {
    try{
        console.log("post choice")
        var ChoiceInstance = new ChoiceModel(request.body)
        const created = await ChoiceModel.create(ChoiceInstance)
        response.send(created)
    }catch(error){
        response.status(500).send(error)
    }
}

const getChoice = async (request, response) => {
    try{
        var ChoiceInstance = await ChoiceModel.find({})
        response.send({ChoiceInstance})
    }catch(error){
        response.status(500).send(error)
    }
}



app.route('/choice')
.post(postChoice)
.get(getChoice)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})