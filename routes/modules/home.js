const express = require('express')
const router = express.Router()
const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', (req, res) => {
  const categories = []

  Category.find()
    .lean()
    .then(category => {
      categories.push(...category)
    })
    .catch(error => console.log(error))

  Record.find()
    .populate('category')
    .lean()
    .then((records) => {
      let totalAmount = 0
      records.forEach(record => totalAmount += record.amount)
      res.render('index', { categories, records, totalAmount })
    })
    .catch(error => console.log(error))
})

module.exports = router