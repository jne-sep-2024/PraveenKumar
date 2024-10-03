import express from 'express';
import { deleteuser, getdata, getuser, postdata, updatedUser } from '../controllers/index.js';
import { checkIfIdExists } from '../middleware/common.js';

const router = express.Router();

router.get('/users', getdata);

router.get('/users/:id', getuser);

router.delete('/users/:id', deleteuser)

router.post('/users', postdata)

router.put('/users/:id', updatedUser)

export default router;
