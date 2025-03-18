const express = require('express')
const router = express.Router()
const Book = require('../model/book.model')

// Read books
router.get('/', async (req, res) => {
    let books = await Book.find()
    console.log(`Server is running on ${process.env.APP_NAME}`)
    res.render('index', { books: books })
})

// Create books
router.post('/', (req, res) => {
    let newBook = new Book()
    newBook.title = req.body.title
    newBook.description = req.body.description
    newBook.author = req.body.author
    newBook.save().then(function (err) {
        if (err) {
            console.log(err)
        }
    })
    res.redirect('/')
})

// Update books
router.post('/update', (req, res) => {
    let id = req.body.id
    Book.findById(id)
        .then((book) => {
            book.title = req.body.title
            book.description = req.body.description
            book.author = req.body.author
            book.save().then(() => {
                res.redirect('/')
            })
        })
        .catch((err) => console.log(err))
})

// Delete books
router.post('/delete', (req, res) => {
    let id = req.body.id
    Book.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => console.log(err))
})

module.exports = router
