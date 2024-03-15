import express from 'express'
import { signIn } from '../controllers/department'

const router = express.Router()

router.route("/login").post(signIn)


export default router