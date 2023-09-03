import * as Path from 'node:path'
import express from 'express'
import apiRoutes from './routes/apiRoutes.ts'


const server = express()
server.use(express.json())

// server.get('/api/v1/jobs', (req, res) => {
//   res.json({ message: 'GET request to /api/v1/jobs' });
// });
server.use('/api/v1', apiRoutes);

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
