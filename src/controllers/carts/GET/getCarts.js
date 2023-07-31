import { getCartsService } from "../../../services/carts.service.js";

export const getCarts = async (req, res) => {
    try {
        const carts = await getCartsService()
        res.render("carts", { carts })
    } catch (err){
        res.status(500).json({err: "An error ocurred when obtaing the carts"})
    }
}