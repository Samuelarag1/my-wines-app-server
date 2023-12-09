import { Request, Response } from 'express';
import { User } from '../entities/User';


export const createUser = async (req: Request, res: Response) => {
    try {

        const user = new User;
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        user.age = req.body.age;
        await user.save();


      return res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
