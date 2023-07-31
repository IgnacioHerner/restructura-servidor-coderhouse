import { createProductService } from "../../../services/products.service.js";

export const createProduct = async (req, res) => {
    try {
        const product = await createProductService(req.body)
        res.redirect("/api/products")
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "An error ocurred while getting the products"})
    }
}