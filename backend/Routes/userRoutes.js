import express from "express";
import { getCurrentUser, login, register } from "../Controller/user_controller.js";
import { addProduct, getAllProducts } from "../Controller/ProductController.js";



const router = express.Router()

router.post("/register",register)
router.post("/login",login)
router.post("/getCurrentUser",getCurrentUser)
router.get('/getproduct',getAllProducts)
router.get('/addProduct',addProduct)








export default router;