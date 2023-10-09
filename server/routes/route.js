import express from 'express';
import { userSignUp ,userLogin,getUserDetails} from '../controller/user-controller.js';
import { authenticateUser } from '../middleware/auth-middleware.js';
import chartData from '../model/chart-data.js';
const router = express.Router();

router.post('/signup',userSignUp);
router.post('/login',userLogin);

router.get('/user/:userId', authenticateUser, getUserDetails);
router.get('/chart-data', (req, res) => {
    res.json(chartData);
  });




export default router;