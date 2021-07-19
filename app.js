const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const toDate = require('./tools/handlebarsHelpers')
require('./config/mongoose')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: { toDate }
}))

app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}.`)
})