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

export const getUsers = async (req : Request, res: Response) =>{
    try{
        const users = await User.find()
        return res.status(200).send(users);
    }catch(error){
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateUser = async (req: Request, res: Response) => {
try{
    const {id} = req.params;

    const user = await User.findOneBy({id: parseInt(id)})

    if(!user){
        return res.status(404).json({message: 'User not found'});
    }

    await User.update({id:parseInt(id)},req.body)

    const updateUser = await User.findOneBy({id: parseInt(id)})

    return res.status(204).send(updateUser);
}catch(error){
    return res.status(500).send(error)
}
}
