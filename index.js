require('dotenv').config()
const express = require('express')
const app = express()
app.get('/', function(req,res){
    res.send(`
    <body style='margin: 0;'>
    <div style="border:1 px solid black; height 10vh; background-color:white;">
    <h2 style="text-align:center;">NAV BAR</h2>
    </div>
    <h1>White Page</h1>
    </body>
    `)
})
// Teal Page
app.get('/:color', function (req, res) {
    let myColor = req.params.color
    res.send(`
    <body style="margin: 0;">
	    <div style="border: 1px solid black; height: 10vh; background-color: orange;">
		    <h2 style="text-align: center;">NAV BAR</h2>
	</div>
	<h1 style="color: orange;">Orange Page</h1>
    `)
})
app.post('/:color', (req, res) => {
    res.send('Hello world')
})

app.listen(process.env.PORT)