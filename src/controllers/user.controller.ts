import { Request, Response, NextFunction } from 'express'
import User, {IUser} from './../database/models/user'

interface ICreateUserInput {
  email: IUser['email'];
  firstName: IUser['firstName'];
  lastName: IUser['lastName'];
}

async function CreateUserInput({
  email,
  firstName,
  lastName
}: ICreateUserInput): Promise<IUser> {
  return User.create({
    email,
    firstName,
    lastName
  })
  .then((data: IUser) => {
    return data
  })
  .catch((error: Error) => {
    throw error
  })
}

export default {
  FetchUser: (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({
        message: 'fetch users',
        data: []
      })
    } catch (error) {
      next(error)
    }
  },

  CreateUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await CreateUserInput({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      })
  
      res.json({
        message: 'user has been created',
        data: user
      })
    } catch (error) {
      next(error)
    }
  }
}