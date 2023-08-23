const express=require('express')
const bodyParser=require('body-parser')
const {sequelize}=require('./models')
const cors=require('cors')
const morgan=require('morgan')
const config=require('./config/config')

const app=express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync({force:false})
    .then(()=>{
        app.listen(config.port || 3030)
        console.log(`Server started on port ${config.port}`)
    })