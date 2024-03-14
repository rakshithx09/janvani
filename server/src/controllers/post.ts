import { and, eq } from "drizzle-orm"
import { db } from "../db"
import { commemtsTable, postTable, userTable } from "../db/schema"
import { NextFunction, Request, Response } from "express"

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

//create post
export const createPost = async(req:Request, res:Response)=>{
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


//add comment
export const addComment = async (req:Request, res:Response, )=>{
    try {
        const {description, userId}:{description:string, userId:string} = req.body
        const {postId} = req.params
        // const userId = req.user?.userId
        if(!userId){
            return res.status(400).json({
                message:"userId not found"
            })
        }

        const user= await db.select().from(userTable).where(eq(userTable.id, req.body.userId))//change req.body to req.user
        if(!user){
            return res.status(400).json({
                message:"user does not exist"
            })
        }

        await db.insert(commemtsTable).values({content:description,userId:Number(userId), postId:Number(postId) })

        res.status(201).json({
            message:"Comment posted successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

//edit post
export const editPost = async(req:Request, res:Response)=>{
    try {
        const {title, description, image, complaintType, department, userId} : Post= req.body
        const {postId} = req.params
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
        

        const post = await db.select().from(postTable).where(eq(postTable.id, Number(postId)))

        if(!post[0]){
            return res.status(400).json({
                message:`post with id: ${postId} does not exist`
            }) 
        }
        

        if( post[0].userId !== Number(userId)){
            return res.status(400).json({
                message:`No permission`
            })
        }

        await db.update(postTable).set({
            title:title,
            description:description,
            image:image,
            complaintType:complaintType,
            department:department,
        }).where(and(eq(postTable.id,Number(postId)),eq(postTable.userId,Number(userId))))
    } catch (error) {
        res.status(500).json({message:"something went wrong...editPost"})
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