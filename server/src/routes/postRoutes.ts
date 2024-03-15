import express from 'express'
import { addvote, createPost, getAllPosts } from '../controllers/post'
import userAuth from '../middleware/auth'

const router = express.Router()

router.route("/createpost").post(createPost)
router.route("/getallposts/:userId").post(getAllPosts)
router.route("/addvote").post(addvote)


export default router