const db = require('../../config/mongoose')
const Category = require('../category')
const Record = require('../record')

let recordSeedData = [
  {
    name: '午餐',
    date: '2019/04/23',
    category: '餐飲食品',
    amount: '60'
  },
  {
    name: '晚餐',
    date: '2019/04/23',
    category: '餐飲食品',
    amount: '60'
  },
  {
    name: '捷運',
    date: '2019/04/23',
    category: '交通出行',
    amount: '120'
  },
  {
    name: '電影：驚奇隊長',
    date: '2019/04/23',
    category: '休閒娛樂',
    amount: '120'
  },
  {
    name: '租金',
    date: '2019/04/01',
    category: '家居物業',
    amount: '25000'
  }
]

/*
let recordSeedData = [
  ['午餐', '2019/04/23', '餐飲食品', 60],
  ['晚餐', '2019/04/23', '餐飲食品', 60],
  ['捷運', '2019/04/23', '交通出行', 120],
  ['電影：驚奇隊長', '2019/04/23', '休閒娛樂', 120],
  ['租金', '2019/04/01', '家居物業', 25000]
]
*/

db.once('open', () => {
  const categoryList = {}

  Category.find()
    .lean()
    .then(categories => {
      categories.forEach(category => {
        categoryList[category.title] = category._id
      })
      return recordSeedData.map(record => ({
        name: record.name,
        date: record.date,
        category: categoryList[record.category],
        amount: record.amount
      }))
    })
    .then(recordSeedData => {
      Record.create(recordSeedData)
        .then(() => {
          console.log('Records seeded.')
          return db.close()
        })
    })
    .catch(error => console.error(error))
})