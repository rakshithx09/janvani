import 'dotenv/config'
import express, { Express, Request, Response } from 'express'
import postRouter from "./routes/postRoutes"
import aadhaarRouter from "./routes/aadhaarRoutes"
import commentRouter from "./routes/commentRoutes"
import cron from 'node-cron'
import { createRouteHandler } from 'uploadthing/express'
import { uploadRouter } from './uploadthing'
import { updateScope } from './controllers/post'


const app: Express = express()
const port = process.env.PORT || 4000
app.use(
    "/api/uploadthing",
    createRouteHandler({
      router: uploadRouter,
      config: { 
        uploadthingId: process.env.UPLOADTHING_APP_ID,
        uploadthingSecret: process.env.UPLOADTHING_SECRET
       },
    }),
  );

app.use("api/v1/post/",postRouter)
// app.use("api/v1/aadhaar/",aadhaarRouter)
app.use("api/v1/comment/",commentRouter)

cron.schedule('0 18 * * *', () => {
    updateScope()
    
});

app.listen(port, () => {
    console.log(`🔥🔥🔥: Server is running at http://localhost:${port} `)
})