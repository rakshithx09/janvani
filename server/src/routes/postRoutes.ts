import express from 'express'
<<<<<<< HEAD
import { addvote, createPost, getAllPosts, getvotes, updateStatus } from '../controllers/post'
=======
import { addvote, createPost, getAllPosts, getPostsBydept, getvotes } from '../controllers/post'
>>>>>>> 7d8df0955ceb0a0fe22af95c01a164aeaa29d73f

const router = express.Router()

router.route("/createpost").post(createPost)
router.route("/updateStatus").post(updateStatus)

router.route("/getallposts/:userId").get(getAllPosts)
router.route("/getvotes/:postId").get(getvotes)
router.route("/getposts/:deptId").get(getPostsBydept)


router.route("/addvote").post(addvote)


export default router