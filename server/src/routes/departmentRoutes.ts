import express from 'express'
import { getAllDepartments, signIn } from '../controllers/department'

const router = express.Router()

router.route("/login").post(signIn)
router.route("/getalldepartments").get(getAllDepartments)



export default router