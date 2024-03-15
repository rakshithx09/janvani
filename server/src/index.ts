import 'dotenv/config'
import express, { Express, Request, Response } from 'express'
import postRouter from "./routes/postRoutes"
import aadhaarRouter from "./routes/aadhaarRoutes"
import commentRouter from "./routes/commentRoutes"


const app: Express = express()
const port = process.env.PORT || 4000

app.use("api/v1/post/",postRouter)
app.use("api/v1/aadhaar/",aadhaarRouter)
app.use("api/v1/comment/",commentRouter)

app.listen(port, () => {
    console.log(`🔥🔥🔥: Server is running at http://localhost:${port} `)
})