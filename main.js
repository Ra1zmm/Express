const express = require("express")
const app = express()
app.set("view engine", "ejs")
const homeRouter = require('./routes/home')
const contactRouter = require('./routes/contact')
const servicesRouter = require('./routes/services')

app.use(homeRouter);
app.use(contactRouter);
app.use(servicesRouter);

app.listen(3000,()=> console.log("Listening at Port http://localhost:3000"))