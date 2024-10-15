import express from 'express';
import {addpost, deletepost, getpost, getpostbyid, updatepost } from '../controllers/post.js';
import { verifyToken,verifyToken1 } from '../middleware/common.js';

const router = express.Router();

router.post('/',verifyToken,addpost)

router.get('/', verifyToken,getpost)

router.get('/:id', verifyToken,getpostbyid)

router.put('/:id', verifyToken,updatepost)

router.delete('/:id', verifyToken1,deletepost)

export default router;