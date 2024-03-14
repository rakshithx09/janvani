import 'dotenv/config'
import express, { Express, Request, Response } from 'express'

const app: Express = express()
const port = process.env.PORT || 4000

app.get("/",(request,res)=>{
    res.send("hello")
})

app.listen(port, () => {
    console.log(`🔥🔥🔥: Server is running at http://localhost:${port}`)
})