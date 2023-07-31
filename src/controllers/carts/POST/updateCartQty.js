import { updateCartQtyService } from '../../../services/carts.service.js'

export const updateCartQty = async (req, res) => {
    const { cartId, productId, qty} = req.body

    try {
        const cart = await updateCartQtyService(cartId, productId, qty)
        res.redirect("/api/carts")
    } catch (err) {
        console.error(err)
        res.status(500).json({error: "An error ocurred while updating the product quantity"})
    }
}