import { and, eq, inArray, sql } from "drizzle-orm"
import { db } from "../db"
import { commemtsTable, department_pincode, postTable, userTable, voteTable } from "../db/schema"
import { NextFunction, Request, Response } from "express"

interface Post {
    id: number;
    title: string;
    description: string;
    image?: string;
    complaintType: 'association' | 'group' | 'individual';
    departmentId: number;
    userId: number;
    latitude:string,
    longitude:string,
    createdAt: number;
}

//create post
export const createPost = async(req:Request, res:Response)=>{
    console.log(req.body)
    try {
        const {title, description, image, complaintType, departmentId,latitude,longitude} : Post= req.body
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
            title,
            description,
            image,
            complaintType,
            departmentId:Number(departmentId),
            userId:req.body.userId as number,
            latitude,
            longitude
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

//voting
export const addvote = async(req:Request, res:Response)=>{
    const {userId, choice, postId}=req.body
    const userAlreadyVoted = await db.select().from(voteTable).where(and(eq(voteTable.userId, userId),eq(voteTable.postId, postId)))
    if(userAlreadyVoted.length !==0){
        await db.update(voteTable).set({
            choice:choice
        }).where(and(eq(voteTable.userId, userId),eq(voteTable.postId, postId)))

        return res.status(200).json({
            message:"voted successfully"
        })
    }else{
        await db.insert(voteTable).values({
            userId,
            postId,
            choice
        })
        return res.status(200).json({
            message:"voted successfully"
        })
    }

}

//update status
export const updateStatus = async(req:Request, res:Response)=>{
    const {status,postId} = req.body
    await db.update(postTable).set({
        status
    }).where(eq(postTable.id,postId))
    res.status(200).json({message:"done"})

}

//get No of votes
export const getvotes= async(req:Request, res:Response)=>{
    const {postId}= req.params
    let count=0;
    const votes =await db.select().from(voteTable).where(eq(voteTable.postId, Number(postId)))
    votes.forEach((item)=>{
        if(item.choice===true){
            count++;
        }else{
            count--;
        }
    })

    res.status(200).json({
        count
    })


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