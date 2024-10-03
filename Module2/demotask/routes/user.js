import express from 'express';
import {  deleteuser, getuser, getuserbyid, loginuser, registeruser,  updatedUser} from '../controllers/user.js';
import { verifyToken } from '../middleware/common.js';
const router = express.Router();

router.post('/register', registeruser);

router.post('/login', loginuser);

router.get('/', getuser)

router.get('/:id', getuserbyid);

router.delete('/:id', verifyToken,deleteuser);

router.put('/:id', updatedUser);

export default router;


