import express from 'express'
import { addvote, createPost, getAllPosts } from '../controllers/post'

const router = express.Router()

router.route("/createpost").post(createPost)
router.route("/getallposts/:userId").get(getAllPosts)
router.route("/addvote").post(addvote)

export default router