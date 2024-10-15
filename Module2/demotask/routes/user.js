import express from 'express';
import {  deleteuser, getuser, getuserbyid, loginuser, registeruser,  updatedUser, addbankuser} from '../controllers/user.js';
import { verifyToken, verifyToken1 } from '../middleware/common.js';
const router = express.Router();

router.post('/register', registeruser);

router.post('/login', loginuser);

router.get('/', getuser)

router.get('/:id', getuserbyid);

router.delete('/:id',deleteuser);

router.put('/:id', updatedUser);

router.put('/addbank/:id',verifyToken,addbankuser);

// router.put('/addcourse/:id',verifyToken,addcoursedata);

export default router;


