import 'dotenv/config'
import express, { Express, Request, Response } from 'express'
import postRouter from "./routes/postRoutes"

const app: Express = express()
const port = process.env.PORT || 4000

app.get("/",(req,res)=>{
    res.send("hello")
})
app.use("api/v1/post/",postRouter)
app.listen(port, () => {
    console.log(`🔥🔥🔥: Server is running at http://localhost:${port} `)
})