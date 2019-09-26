import express from 'express'
import * as bodyParser from 'body-parser'
import routes from './routes'
import database from './database/connect'

const app = express()
const databaseuri = 'mongodb://localhost:27017/ts-node-express'
const port = 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

database(databaseuri)
routes(app)

app.listen(port, err => {
  if (err) {
    return console.error(err)
  }
  return console.log(`server is listening on ${port}`)
})