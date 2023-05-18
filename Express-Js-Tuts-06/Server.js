const express = require('express')
const app = express()
const path = require('path');

const PORT = process.env.PORT || 4000

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
app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "Views-03", "404.html"))
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


app.listen(PORT, () => console.log(`Server is Running on ${PORT}`))
