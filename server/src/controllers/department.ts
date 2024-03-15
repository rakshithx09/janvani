import { Request, Response } from "express";
import { db } from "../db";
import { departmentTable } from "../db/schema";
import { eq } from "drizzle-orm";

export const signIn = async(req:Request, res:Response)=>{
    try {
        const {deptId, password}= req.body
        const dept= await db.selectDistinct().from(departmentTable).where(eq(departmentTable.id, deptId))

        if(!dept[0]){
            return res.status(200).json({
                message:"Invalid credentials"
            })
        }
        if(dept[0].password!==password){
            return res.status(200).json({
                message:"Incorrect password"
            })
        }
        res.status(200).json({
            message:"login success"
        })
    } catch (error) {
        console.log(error)
    }
}


export const getAllDepartments = async(req:Request, res:Response)=>{
    try {
        const departments = await db.select().from(departmentTable)
        res.status(200).json(departments)
    } catch (error) {
        console.log(error)
    }
}