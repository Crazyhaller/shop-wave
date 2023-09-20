import express from 'express'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const port = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
