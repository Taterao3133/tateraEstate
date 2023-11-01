import  express from "express";
import  {updateUser, deleteUser,getUserListings,getUser} from "../controller/user_controller.js";
import  {user}  from "../controller/user_controller.js";
import {verifyToken}  from "../utils/verifyUser.js";


const router= express.Router();


router.get('/users',user);
router.post('/Update/:id',verifyToken,updateUser);
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)
router.get('/:id', verifyToken, getUser)

export default  router;



