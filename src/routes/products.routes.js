import { Router } from "express";
import { productController } from '../controllers/products/product.controller.js';

const router = Router()

router.get("/", productController.getProducts)

router.get("/create", async (req, res) => {
    res.render("create")
});

router.post("/", productController.createProduct)

export default router;