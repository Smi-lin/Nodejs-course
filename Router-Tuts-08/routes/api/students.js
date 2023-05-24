const express = require('express');
const router = express.Router()
const path = require('path')

data = {}
data.students = require('../../data/students.json')

router.route('/')
// To Read
.get((req, res) => {
    res.json(data.students);
})

// To create
.post((req, res) => {
    res.json({
        "firstname" : req.body.firstname,
        "lastname": req.body.lastname
    })
})

// To Update
.put((req, res) => {
    res.json({
        "firstname" : req.body.firstname,
        "lastname": req.body.lastname
    })
})

// To delete

.delete((req, res) => {
    res.json({"id" : req.body.id})
})

router.route('/:id')
.get((req, res) => {
    res.json({"id" : req.params.id})
})

module.exports = router;