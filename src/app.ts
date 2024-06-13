import express from 'express'
import dotenv from 'dotenv'

// import routes

dotenv.config()

const app = express()
const port = process.env.PORT

// routes


app.listen(port, () => {
    console.log('Server started on port 3000')
})