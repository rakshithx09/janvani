import bodyParser from 'body-parser'
import 'dotenv/config'
import express, { Express, Request, Response } from 'express'
import path from 'path'
import { db } from './db'
import { todos } from './db/schema'
const app: Express = express()
const port = process.env.PORT || 4000

import 'dotenv/config'
// app.use(bodyParser.urlencoded({ extended: false }))
// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'))
// display new to-do page

app.get("/",(request,res)=>{
    res.send("jkdsgf vkjxhvkgv vfgvgfgf")
})

app.listen(port, () => {
    console.log(process.env.TURSO_CONNECTION_URL)
    console.log(`🔥🔥🔥: Server is running at http://localhost:${port}`)
})