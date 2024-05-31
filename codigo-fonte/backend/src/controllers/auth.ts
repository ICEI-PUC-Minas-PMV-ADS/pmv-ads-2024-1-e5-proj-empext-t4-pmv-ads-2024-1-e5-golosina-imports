import { Request, Response, NextFunction } from 'express';
import UserModel from "../models/user";
import { signJWT } from '../auth';
import { ErrorReason, ErrorStatusCodes } from '../types/error';
import { AppError } from '../error';
import { AuthUserResponse } from '../types/user';

interface LoginRequest {
    email: String;
    password: String;
}

const loginUser = async (request: Request, response: Response<AuthUserResponse>, next: NextFunction) => {
    const { email, password } = request.body as LoginRequest;
    try {
        if (!email || !password) {
            throw new AppError(ErrorReason.BAD_REQUEST, ErrorStatusCodes.BAD_REQUEST)
        }
        const user = await UserModel.findOne({ email });

        const userPassword = user?.password;
        if (!user || userPassword !== password) {
            throw new AppError(ErrorReason.LOGIN_FAILED, ErrorStatusCodes.BAD_REQUEST)
        }
        const token = signJWT({ userId: user.id });
        return response.status(201).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }, token
        })

    } catch (error) {
        next(error)
    }
}

export { loginUser }