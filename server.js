const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const PORT = 1114
 

//json ojects?
const majorArcana = { //setting up all the cards within an object (look at rappers-api for where I got inspiration from)
    1:{ 
        cardFront: "The Fool",
        cardBack: "Think about new beginnings. Focus on finding your inner innocence, be a little more spontanious and free spirited today",
        imgurl: "https://philosopherswheel.com/foolB.jpg", // borrowed images!
        reversed: false // I added this for later when I want to be able to use CSS to flip the image upside down
    },
}


app.get('/', async (request, response) => {
    try {
        response.sendFile( __dirname + "/public/index.html")
    } catch (error) {
        response.status(500).send({message: error.message})
    }
})

app.get('/newCard', async (request, response) =>{
    let math = Math.ceil( Math.random() * 44) // honestly the same mechanic as my coin flip to get a random number 1-44 and send back as json
    try { 
        response.json(majorArcana[math]) //this is the heavy lifter using the random number generator, if there is a thing that is essentially withing the object majorArcana and the result of the math, send it back to the main.js as JSON.  If I had kept the card names, it would have had to read something like majorArcana[variable] variable == "The Moon" to be able to respond. Which would have required setting up whatever variable AND tying that varaible to the math. I preferred to skip that step, though it's probably not best practice (feels very baddie and I will not apologize). 
    } catch (error) {
        response.status(500).send({message: error.message})
    }
}) 

// middleware
app.set('view engine', 'ejs') //helps parse ejs
app.use(express.static('public') ) //tells where to go for static files HTML/CSS
app.use(express.urlencoded ( {extended:true} ) ) //how to handle URLs
app.use(express.json() ) //allows use of JSON for objects
app.use(cors() )
 //prevent cross object requests
 
 
//app.listen(1114, () => console.log('Server is running on port 1114 yay'))

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT} yay` )
})