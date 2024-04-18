import express from 'express'
const router = express.Router();

import { Productdata } from '../controllers/productController.js';

router.post("/products", Productdata);
export default router