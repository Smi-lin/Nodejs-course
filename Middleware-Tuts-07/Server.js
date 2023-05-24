const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors')

const errorHandler = require('./middleware/errorHandler')
const {logger} = require('./middleware/logEvents')


const PORT = process.env.PORT || 4000

app.use(logger)
// SYNTAX ON HOW TO CREATE CUSTOM MIDDLEWARE
// app.use((req, res, next) => {
//     console.log(`${req.method}\n${req.path}`);
//     logEvents(`${req.method}\t${req.path}\t${req.headers.origin}`, 'reqLog.txt')
//     next();
// })

// BUILT-IN MIDDLEWARE TO HANDLE URL ENCODED DATA : 
// CONTENT-TYPE: APPLICATION/X-WWW-FORM-URL ENCODED


app.use(express.urlencoded({ extended: false }))

// BUILT-IN MIDDLEWARE TO HANDLE JSON DATA 
app.use(express.json())

// SERVE STATIC  
app.use(express.static("./Public"))

const whitelist = ['https://www.abudullsite.com', 'http://127.0.0.1:3000', 'http://localhost:4000']
corsOptions = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1 || !origin) {
            callback (null, true);

        }else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    optionSuccessStatus : 200
}

app.use(cors(corsOptions))


app.get("^/$|index(.html)?", (req, res) => {
    // res.sendFile('./Views-03/Index.html', {root: __dirname})
    res.sendFile(path.join(__dirname, "Views-03", "index.html"))
})


app.get("/new-page(.html)?" , (req, res) => {
    res.sendFile(path.join(__dirname, "Views-03", "New-page.html") )
})


// THESE FUNCTIONS ARE CALEED ROUTER HANDLERS

app.get("/old-page(.html)?" , (req, res) => {
    // res.redirect(path.join(__dirname, "Views-03", "new-page.html")) // 302 BY DEFAULT
    res.redirect(301, path.join(__dirname, "Views-03", "/New-page.html"));
})


// CATCH ALL ROUTES TO GET ERROR 404 PAGE
app.all('*', (req, res) => {
    res.status(404);
    if(req.accepts('html')) {
        res.sendFile(path.join(__dirname, "Views-03", "404.html"))

    }else if (req.accepts('json')) {
        res.join({Error: '404 Not Found'})

    }else {
        res.type('txt').send('404 Not Found')
    }
    
    // res.status(404)
})


app.get("/", (req, res, next) => {
    console.log('Attempted a request');
    next()

}, (err, res, next) => {
    console.log("Second request attempted");
    next();

}, (err,res) => {
    console.log('Final request');
    res.send("Hello world")
})



// APPLICATION LEVEL MIDDLEWARE

// const one =  (req, res, next) => {
//     console.log('Attempted a request');
//     next()

// }

// const two = (err, res, next) => {
//     console.log("Second request attempted");
//     next();

// }

// const three =  (req, res) => {
//     console.log('Final request');
//     res.send("Finished request");
// }

// // app.get("/", [one, two, three])
// const requests = [one, two, three];
// // console.log(requests[2]);
// app.get("/", requests)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server is Running on ${PORT}`))