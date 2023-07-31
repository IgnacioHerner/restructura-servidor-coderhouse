import { removeFromCartService } from '../../../services/carts.service.js'

export const removeFromCart = async (req, res) => {
    const { productId } = req.body
    
    try {
        const cart = await removeFromCartService(productId)
        res.redirect("/api/products")
    } catch (err) {
        console.error(err)
        res.status(500).json({error: "An error ocurred while removing the product from the cart"})
    }
}