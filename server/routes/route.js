import express from 'express';
import { userSignUp ,userLogin,getUserDetails} from '../controller/user-controller.js';
import { authenticateUser } from '../middleware/auth-middleware.js';
const router = express.Router();

router.post('/signup',userSignUp);
router.post('/login',userLogin);

router.get('/user/:userId', authenticateUser, getUserDetails);




export default router;