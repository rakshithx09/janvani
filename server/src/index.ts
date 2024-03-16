import "dotenv/config";
import express, { Express, Request, Response } from "express";
import postRouter from "./routes/postRoutes";
import aadhaarRouter from "./routes/aadhaarRoutes";
import commentRouter from "./routes/commentRoutes";
import deptRouter from "./routes/departmentRoutes";
import cron from "node-cron";
import cors from "cors";
import { createRouteHandler } from "uploadthing/express";
import { uploadRouter } from "./uploadthing";
import { updateScope } from "./controllers/post";

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(
  "/api/uploadthing",
  createRouteHandler({
    router: uploadRouter,
    config: {
      uploadthingId: process.env.UPLOADTHING_APP_ID,
      uploadthingSecret: process.env.UPLOADTHING_SECRET,
    },
  })
);

app.use("/post", postRouter);
app.use("/aadhaar/", aadhaarRouter);
app.use("/department", deptRouter);
app.use("/comment", commentRouter);

cron.schedule("0 18 * * *", () => {
  updateScope();
});

app.listen(port, () => {
  console.log(`🔥🔥🔥: Server is running at http://localhost:${port} `);
});
