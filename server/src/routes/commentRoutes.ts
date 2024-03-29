import express from 'express'
import { addComment, editComment, getAllComments } from '../controllers/comment'

const router = express.Router()

router.route("/getAllcomments/:postId").get(getAllComments)
router.route("/addcomment/:postId").post(addComment)
router.route("/editcomment").post(editComment)


export default router