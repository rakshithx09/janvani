import { and, eq, inArray, sql } from "drizzle-orm"
import { db } from "../db"
import { commemtsTable, department_pincode, postTable, userTable } from "../db/schema"
import { NextFunction, Request, Response } from "express"

interface Post {
    id: number;
    title: string;
    description: string;
    image?: string;
    complaintType: 'association' | 'group' | 'individual';
    departmentId: number;
    userId: number;
    createdAt: number;
}

//create post
export const createPost = async(req:Request, res:Response)=>{
    try {
        const {title, description, image, complaintType, departmentId} : Post= req.body
        if(!title){
            return res.status(400).json({
                message:"Please provide all values"
            })
        }
        const user= await db.select().from(userTable).where(eq(userTable.id, req.body.userId))
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
            departmentId:Number(departmentId),
            userId:req.body.userId as number
            })

        res.status(201).json(post)
       
    } catch (error) {
        console.log(error)
    }
}




//edit post
export const editPost = async(req:Request, res:Response)=>{
    try {
        const {title, description, image, complaintType, departmentId, userId} : Post= req.body
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
            departmentId:departmentId,
        }).where(and(eq(postTable.id,Number(postId)),eq(postTable.userId,Number(userId))))
    } catch (error) {
        res.status(500).json({message:"something went wrong...editPost"})
    }
}


export const getAllPosts = async(req:Request, res:Response)=>{
    try {
        console.log("hi")
        const{userId}= req.params
        const user=await db.select().from(userTable).where(eq(userTable.id,Number(userId)))
        if(!user[0]){
            return res.status(404).json({
                message:`user does not exist`
            })
        }
        const departmentsQuery =  db.selectDistinct({departmentId:department_pincode.departmentId}).from(department_pincode).where(eq(department_pincode.pincode,user[0].pinCode))
        const posts = await db.select().from(postTable).where(inArray(postTable.departmentId,departmentsQuery))

        res.status(200).json(posts)

    } catch (error) {
        
    }
}

// updatescopes
export const updateScope = async()=>{
    const posts = await db.select().from(postTable)

    posts.map(async(item)=>{
        if(new Date(item.createdAt).getDate()+3 === new Date().getDate()){
            await db.update(postTable).set({
                scope:sql`${postTable.scope} + 1`
            })
        }else if(new Date(item.createdAt).getDate()+8 === new Date().getDate()){
            await db.update(postTable).set({
                scope:sql`${postTable.scope} + 1`
            })
        }
    })
}