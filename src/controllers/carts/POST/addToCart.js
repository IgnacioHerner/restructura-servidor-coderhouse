import { addToCartService } from '../../../services/carts.service.js'

export const addToCart = async (req, res) => {
    const {productId} = req.body
    try {
        const cart = await addToCartService(productId)
        res.redirect("/api/products")
    } catch (err){
        console.error(err)
        res.status(500).json({ err: "An error ocurred while adding the product to the cart"})
    }
};