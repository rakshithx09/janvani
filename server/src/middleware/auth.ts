import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
    userId: string;
    userName: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }
}

const userAuth = async (req:Request, res:Response, next:NextFunction) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({msg:"Authentication Invalid"});
    }

    const token = authHeader.split(" ")[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;
        req.user = { userId: payload.userId, userName: payload.userName};
        
        next();
    } catch (error) {
        next(error);
    }
};

export default userAuth;