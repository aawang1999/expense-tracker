const db = require('../../config/mongoose')
const Record = require('../record')

recordSeedData = [
  {
    name: '午餐',
    date: '2019/04/23',
    category: 'food',
    amount: 60
  }, {
    name: '晚餐',
    date: '2019/04/23',
    category: 'food',
    amount: 60
  }, {
    name: '捷運',
    date: '2019/04/23',
    category: 'transportation',
    amount: 120
  }, {
    name: '電影：驚奇隊長',
    date: '2019/04/23',
    category: 'entertainment',
    amount: 220
  }, {
    name: '租金',
    date: '2019/04/01',
    category: 'housing',
    amount: 25000
  }
]

db.once('open', () => {
  Record.create(recordSeedData)
    .then(() => {
      console.log('Records seeded.')
      return db.close()
    })
})