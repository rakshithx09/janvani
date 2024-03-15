
import {Request, Response } from "express"
import aadhaarDetails from "../../data/aadhaar"

type Person = {
    uid: "111122223333";
    name: string;
    dob: string;
    gender: 'M' | 'F';
    phone?: string;
    email?: string;
    building?: string;
    landmark?: string;
    street: string;
    locality?: string;
    vtc: string;
    subdist?: string;
    district: string;
    state: string;
    pincode: string;
};

//create post
export const getUser = async(req:Request, res:Response)=>{
    const uId:keyof typeof aadhaarDetails = req.body.uId;

    if(!uId){
        return res.status(400).json({
            message:"missing feild user id"
        })
    }

    let user;
    if (uId in aadhaarDetails) {
        user = aadhaarDetails[111122223333];
    } else {
        return res.status(404).json({
            message:"user not found"
        })
    }

    res.status(201).json({
        ...user,
        aadhaarNo:uId
    })
}

export const verifyUser = async(req:Request, res:Response)=>{
    const {uId,otp}:{uId:string|null,otp:string|null}= req.body.uId;

    if(!uId){
        return res.status(400).json({
            message:"missing feild user id"
        })
    }

    if(!otp){
        return res.status(400).json({
            message:"missing feild otp"
        })
    }

    const user = aadhaarDetails[uId]
    if(!user){
        return res.status(404).json({
            message:"user not found"
        })
    }

    user["aadhaarNo"] = uId;

    res.status(201).json(user)
}