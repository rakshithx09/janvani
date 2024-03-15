import express from 'express'
import { verifyUser } from '../controllers/aadhaar'

const router = express.Router()
router.route("/verfifyUser").post(verifyUser)

export default router