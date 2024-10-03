import express from 'express';
import { deleteuser, getuser, getuserbyid, loginuser, registeruser, updatedUser } from '../controllers/data.js';
import { verifyToken } from '../middleware/comman.js';
const router = express.Router();

router.post('/user/register', registeruser);

router.post('/user/login', loginuser);

router.get('/user', getuser)

router.get('/user/:id', getuserbyid);

router.delete('/user/:id', verifyToken,deleteuser);

router.put('/user/:id', updatedUser);

export default router;


