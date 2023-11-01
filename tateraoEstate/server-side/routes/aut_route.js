
import  express  from "express";
import { google, signOut, signin, signup } from "../controller/auth_controller.js";

const router=express.Router()

router.post('/sign-up',signup)
router.post('/sign-in',signin)
router.post('/Google', google)
router.get('/signout',signOut);

export default router;




