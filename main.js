const express = require("express")
const app = express()
app.set("view engine", "ejs")
app.use('/public', express.static('public'))


const homeRouter = require('./routes/home')
const contactRouter = require('./routes/contact')
const servicesRouter = require('./routes/services')
const baseRouter = require('./routes/base')

app.use(homeRouter);
app.use(contactRouter);
app.use(servicesRouter);
app.use(baseRouter);



app.listen(3000,()=> console.log("Listening at Port http://localhost:3000"))