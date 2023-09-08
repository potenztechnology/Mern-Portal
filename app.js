const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
var bodyParser = require('body-parser');
const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
const PORT = 9000

const nameRoute = require('./routes/nameRoute')
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')

app.use(cors(corsOption))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 10000000000 }));
app.use(express.json({ limit: '50mb' }))
app.use(express.json())

app.use('/name', nameRoute)
app.use('/user', userRoute)
app.use('/auth', authRoute)

mongoose.connect('mongodb://0.0.0.0:27017/JobPortal')
    .then(() => console.log('Database Connected Successfully'))
    .catch((err) => console.log("Database Connection Error...", err))

app.get('/', (req, res) => {
    return res.status(200).json({ Message: "Base URL" })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
})
