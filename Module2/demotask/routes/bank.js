import express from 'express';
import { verifyToken } from '../middleware/common.js';
import { addbank, deletebank, getbank, getbankbyid, updatebank } from '../controllers/bank.js';

const router = express.Router();

router.post('/',addbank);

router.get('/',getbank);

router.get('/:id',verifyToken,getbankbyid);

router.put('/:id',verifyToken,updatebank);

router.delete('/:id',verifyToken,deletebank)

export default router;