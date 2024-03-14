import express from 'express'
import { createPost } from '../controllers/post'
import userAuth from '../middleware/auth'

const router = express.Router()

router.route("/createpost").post(userAuth,createPost)

export default router