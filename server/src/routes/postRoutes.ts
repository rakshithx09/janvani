import express from 'express'
import { createPost, getAllPosts } from '../controllers/post'
import userAuth from '../middleware/auth'

const router = express.Router()

router.route("/createpost").post(createPost)
router.route("/getallposts/:userId").post(getAllPosts)


export default router