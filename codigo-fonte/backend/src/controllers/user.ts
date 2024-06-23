import { Request, Response, NextFunction } from 'express';
import UserModel from "../models/user";
import { ErrorReason, ErrorStatusCodes } from '../types/error';
import { AppError } from '../error';
import { signJWT } from '../auth';
import { AuthUserResponse, User } from '../types/user';

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

interface EditUserRequest {
  name?: string;
  password?: string;
  userId: string;
}

const createUser = async (request: Request, response: Response<AuthUserResponse>, next: NextFunction) => {
  const { name, email, password } = request.body as CreateUserRequest;
  if (!name || !email || !password) {
    throw new AppError(ErrorReason.BAD_REQUEST, ErrorStatusCodes.BAD_REQUEST);
  }
  try {
    const user = new UserModel({ name, email, password });

    let newUser = await user.save();
    const token = signJWT({ userId: newUser.id });

    return response.status(201).json({
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }, token
    });
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      let duplicateError = new AppError(ErrorReason.DUPLICATE_EMAIL, ErrorStatusCodes.BAD_REQUEST);
      return next(duplicateError)
    }
    next(error)
  }
};

const updateUser = async (request: Request, response: Response<User>, next: NextFunction) => {
  const { name, password, userId } = request.body as EditUserRequest;
  let update: { name?: string, password?: string } = {};
  if (name) {
    update.name = name;
  }
  if (password) {
    update.password = password;
  }
  try {
    let user = await UserModel.findOneAndUpdate({ _id: userId }, update, { new: true });
    delete user.password;
    return response.status(200).json(user);
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      let duplicateError = new AppError(ErrorReason.DUPLICATE_EMAIL, ErrorStatusCodes.BAD_REQUEST);
      return next(duplicateError)
    }
    next(error)
  }
};

const deleteUser = async (request: Request, response: Response<{}>, next: NextFunction) => {
  const { userId } = request.params;
  if (!userId) {
    throw new AppError(ErrorReason.BAD_REQUEST, ErrorStatusCodes.BAD_REQUEST);
  }
  try {
    await UserModel.findOneAndDelete({ _id: userId });
    console.log(`deleted user ${userId}`);

    return response.status(200).json({});
  } catch (error) {
    console.error(error);
    next(error)
  }
};

export { createUser, deleteUser, updateUser };