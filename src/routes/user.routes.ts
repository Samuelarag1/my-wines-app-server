import { Router } from "express";
import { createUser, getUsers, updateUser } from "../controllers/user.controllers";


const router = Router();

router.post('/users', createUser)
router.get('/users',getUsers)
router.put('/user/:id',updateUser)

export default router;
