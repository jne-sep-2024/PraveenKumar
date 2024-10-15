import express from 'express';
import { verifyToken } from '../middleware/common.js';
import { addcourse, deletecourse, getcourse, getcoursebyid, updatecourse } from '../controllers/courses.js';

const router = express.Router();

router.post('/',addcourse);

router.get('/',getcourse);

router.get('/:id',verifyToken,getcoursebyid);

router.put('/:id',verifyToken,updatecourse);

router.delete('/:id',verifyToken,deletecourse);

// router.put('/adduser/id',verifyToken,adduserdata);

export default router;