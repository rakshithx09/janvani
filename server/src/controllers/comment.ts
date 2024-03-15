import { and, eq } from "drizzle-orm"
import { db } from "../db"
import { commemtsTable, postTable, userTable } from "../db/schema"
import { NextFunction, Request, Response } from "express"

//add comment
export const addComment = async (req:Request, res:Response)=>{

    try {
        const {description, userId}:{description:string, userId:string} = req.body
        const {postId} = req.params
       
        // const userId = req.user?.userId
        if(!userId){
            return res.status(400).json({
                message:"userId not found"
            })
        }

        console.log(req.body.userId,description,postId)
        
        const user= await db.select().from(userTable).where(eq(userTable.id, req.body.userId))//change req.body to req.user
        
        if(!user){
            return res.status(400).json({
                message:"user does not exist"
            })
        }
        
        
        const a=await db.insert(commemtsTable).values({content:description,userId:Number(userId), postId:Number(postId) })
        console.log(a)
        res.status(201).json({
            message:"Comment posted successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

//edit comment
export const editComment = async(req:Request, res:Response)=>{
    try {
        const { description, userId } : {description:string, userId:string}= req.body
        const {commentId} = req.params
        // const userId = req.user?.userId
        if(!userId){
            return res.status(400).json({
                message:"userId not found"
            })
        }

        const user= await db.select().from(userTable).where(eq(userTable.id, req.body.userId))//change req.body to req.user
        if(!user[0]){
            return res.status(400).json({
                message:"user does not exist"
            })
        }
        

        const comment = await db.select().from(commemtsTable).where(eq(commemtsTable.id, Number(commentId)))

        if(!comment[0]){
            return res.status(400).json({
                message:`comment with id: ${commentId} does not exist`
            }) 
        }
        

        if( comment[0].userId !== Number(userId)){
            return res.status(400).json({
                message:`No permission`
            })
        }

        await db.update(commemtsTable).set({
            content:description
        }).where(and(eq(commemtsTable.id,Number(commentId)),eq(commemtsTable.userId,Number(userId))))
    } catch (error) {
        res.status(500).json({message:"something went wrong...editcomment"})
    }
}

export const getAllComments=async(req:Request, res:Response)=>{
    try {
        const {postId}=req.params
        const comments = await db.select().from(commemtsTable).where(eq(commemtsTable.postId,Number(postId)))

        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}

