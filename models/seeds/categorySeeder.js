const db = require('../../config/mongoose')
const Category = require('../category')

categorySeedData = [
  {
    name: 'housing',
    title: '家居物業',
    icon: ''
  }, {
    name: 'transportation',
    title: '交通出行',
    icon: ''
  }, {
    name: 'entertainment',
    title: '休閒娛樂',
    icon: ''
  }, {
    name: 'food',
    title: '餐飲食品',
    icon: ''
  }, {
    name: 'other',
    title: '其他',
    icon: ''
  }
]

db.once('open', () => {
  Category.create(categorySeedData)
    .then(() => {
      console.log('Categories seeded.')
      return db.close()
    })
})