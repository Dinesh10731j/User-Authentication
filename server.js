const express = require("express");
const app = express();
const Port = process.env.PORT || 8080;
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const ConnectMongoose = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/xerox');
        console.log("Connected");
    } catch (err) {
        console.log('Error while connecting', err);
    }
}

ConnectMongoose();

const mongoSchema = mongoose.Schema({
    username: String,
    password: String,
});

const mongoModel = mongoose.model('XEROX', mongoSchema);


app.post("/", async (req, res) => {
    try {
        const existingUser = await mongoModel.findOne({ username: req.body.username });
        

        if (existingUser) {
            // User already exists, return a message
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = new mongoModel({
            username: req.body.username,
            password: req.body.password,
        });

        const userData = await user.save();
        console.log(userData);
        res.json(userData);
    } catch (error) {
        console.error('Error saving user:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(Port,(req,res)=>{
    console.log(`Listening to port ${Port}`)
});
