import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (req, res) => {
  console.log('someone pinged here!')
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})

app.use('/api/diaries', diaryRouter)
