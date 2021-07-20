const express = require('express')
const router = express.Router()
const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', async (req, res) => {
  const category = req.query.category
  const filter = {}
  if (category) { filter.category = category }

  const categories = await Category.find().lean()

  /*
  const categories = []

  Category.find()
    .lean()
    .then(category => categories.push(...category))
    .catch(error => console.log(error))
  */

  Record.find(filter)
    .populate('category')
    .lean()
    .then((records) => {
      let totalAmount = 0
      records.forEach(record => totalAmount += record.amount)
      res.render('index', { categories, category, records, totalAmount })
    })
    .catch(error => console.log(error))
})

module.exports = router