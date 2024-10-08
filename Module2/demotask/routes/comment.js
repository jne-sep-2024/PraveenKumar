import express from 'express';
import { addcommment, deletecommment, getcommment, getcommmentbyid, updatecommment } from '../controllers/comment.js';
import { verifyToken, verifyToken1 } from '../middleware/common.js';

const router = express.Router();

router.post('/', verifyToken, addcommment)

router.get('/',verifyToken, getcommment)

router.get('/:id', verifyToken,getcommmentbyid)

router.put('/:id', verifyToken, updatecommment)

router.delete('/:id', verifyToken1,deletecommment)

export default router;