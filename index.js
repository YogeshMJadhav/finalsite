const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()
require('dotenv').config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))

var transport = {
 host: process.env.HOST,
 auth: {
   user: process.env.EMAIL,
   pass: process.env.PASSWORD
 }
}
var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
 if (error) {
   console.log(error);
 } else {
   console.log('Server is ready to take messages');
 }
});
app.post('/send', (req, res, next) => {
 var FirstName = req.body.firstName
 var LastName = req.body.lastName
 var Email = req.body.email
 var Message = req.body.message
 var Address = req.body.address
 var Content = `First Name: ${FirstName} \n Last Name: ${LastName} \n Email: ${Email} \n Message: ${Message} \n Address: ${Address}`

 var mail = {
   from: FirstName,
   to: process.env.EMAIL, 
   subject: 'New Message from Contact Form',
   text: Content
 }

 transporter.sendMail(mail, (err, data) => {
   if (err) {
     res.json({
       msg: 'fail'
     })
   } else {
     res.json({
       msg: 'success'
     })
   }
 })
})
const PORT = process.env.PORT

app.listen(PORT, ()=>{
   console.log(`Server listen on port ${PORT}`);
})