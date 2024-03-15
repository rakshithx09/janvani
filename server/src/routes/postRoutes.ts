import express from 'express'
import { addvote, createPost, getAllPosts, getPostsBydept, getvotes } from '../controllers/post'

const router = express.Router()

router.route("/createpost").post(createPost)
router.route("/getallposts/:userId").get(getAllPosts)
router.route("/getvotes/:postId").get(getvotes)
router.route("/getposts/:deptId").get(getPostsBydept)


router.route("/addvote").post(addvote)


export default router