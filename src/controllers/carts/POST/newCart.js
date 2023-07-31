import { newCartService } from '../../../services/carts.service.js'

export const newCart = async (req, res) => {
    try {
        const newCart = await newCartService();
        res.json({ newCart })
    } catch (err) {
        console.error(err)
        res.status(500).json({ err: "An error ocurred while creating the cart"})
    }
}