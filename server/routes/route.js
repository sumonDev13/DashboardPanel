import express from 'express';
import { userSignUp ,userLogin,getUserInfo} from '../controller/user-controller.js';





const router = express.Router();

router.post('/signup',userSignUp);
router.post('/login',userLogin);
router.get('/userinfo', getUserInfo);


export default router;