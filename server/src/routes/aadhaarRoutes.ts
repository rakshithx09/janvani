import express from 'express'
import { verifyUser,getUser } from '../controllers/aadhaar'

const router = express.Router()
router.route("/getUser").post(getUser)
router.route("/verfifyUser").post(verifyUser)

export default router