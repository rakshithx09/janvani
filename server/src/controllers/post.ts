import { eq } from "drizzle-orm"
import { db } from "../db"
import { postTable, userTable } from "../db/schema"
import { Request, Response } from "express"


interface Post {
    id: number;
    title: string;
    description: string;
    image?: string;
    complaintType: 'association' | 'group' | 'individual';
    department: 'engineering' | 'public health' | 'revenue' | 'town planning';
    userId: number;
    createdAt: number;
}

export const createPost = async(req:Request, res:Response, next)=>{
    try {
        const {title, description, image, complaintType, department, } : Post= req.body
        if(!title){
            return res.status(400).json({
                message:"Please provide all values"
            })
        }
        const user= await db.select().from(userTable).where(eq(userTable.id, req.body.userId))//change req.body to req.user
        if(!user){
            return res.status(400).json({
                message:"user does not exist"
            })
        }

        const post = await db.insert(postTable).values({
            title:title,
            description:description,
            image:image,
            complaintType:complaintType,
             department:department,
             userId:req.body.userId as number
            })

        res.status(201).json(post)
       
    } catch (error) {
        console.log(error)
    }
}