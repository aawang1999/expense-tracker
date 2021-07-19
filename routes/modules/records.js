const express = require('express')
const router = express.Router()
const Category = require('../../models/category')
const Record = require('../../models/record')
const categories = []

Category.find()
  .lean()
  .then(category => categories.push(...category))
  .catch(error => console.log(error))

// Create

router.get('/new', (req, res) => {
  res.render('new', { categories })
})

router.post('/', (req, res) => {
  Record.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// Edit

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then(record => res.render('edit', { categories, record }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => {
      Object.assign(record, req.body)
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// Delete

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router