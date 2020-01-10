const express=require('express')

const app=express()

const morgan=require('morgan')



app.use(morgan('short'))
app.use(require('cors')())
app.use(express.json())
require('./plugins/db')(app)
require('./routes/admin/index')(app)

app.listen(3000,()=>{
	console.log('http://localhost:3000')
})