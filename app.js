import graphqlHTTP from 'express-graphql'
import express from 'express'
import cors from 'cors'
import schema from './schema/schema'
import 'dotenv/config'

const app = express()

app.use(cors())

app.use((req, res, next) => {
  if (basicAuthentification(req)) {
    return next()
  }
  res.set('WWW-Authenticate', 'Basic realm="401"')
  res.status(401).send('Authentication required.')
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

const basicAuthentification = (req) => {
  const auth = {
    login: 'vdn',
    password: 'gaite75xavier'
  }
  const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
  const [login, password] = Buffer.from(b64auth, 'base64')
    .toString()
    .split(':')
  return login && password && login === auth.login && password === auth.password
}
