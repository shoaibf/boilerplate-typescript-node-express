import express from 'express'
import { Routes } from './routes/index'

const app = express()
const port = 3000
const endpoints: any[] = []

Routes.stack.forEach((stack, i) => {
  if (stack.route) {
    endpoints.push({
      method: stack.route.stack[0].method.toUpperCase(),
      path: stack.route.path
    })
  }
})

app.get('/', (req, res, next) => {
  res.send({ message: 'welcome to typescript-node-express boilerplate API (v1.0.0)'})
})
app.use('/', Routes)

app.get('/endpoints', (req, res, next) => res.json(endpoints))

app.listen(port, err => {
  if (err) {
    return console.error(err)
  }
  return console.log(`server is listening on ${port}`)
})