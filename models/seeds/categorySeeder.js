const db = require('../../config/mongoose')
const Category = require('../category')

let categorySeedData = [
  ['家居物業', 'fa-home'],
  ['交通出行', 'fa-shuttle-van'],
  ['休閒娛樂', 'fa-grin-beam'],
  ['餐飲食品', 'fa-utensils'],
  ['其他', 'fa-pen']
].map(category => ({
  title: category[0],
  icon: category[1]
}))

db.once('open', () => {
  Category.create(categorySeedData)
    .then(() => {
      console.log('Categories seeded.')
      return db.close()
    })
})