import cartModel from '../dao/models/carts.model.js'

export const getCartsService = async () => {
    try {
        const carts = await cartModel.find().populate("products.productId").lean().exec()
        return carts
    } catch (err) {
        throw new Error ("An error ocurred when obtaining the carts")
    }
}

export const newCartService = async () => {
    try {
        const newCart = await cartModel.create({})
        return newCart;
    } catch (err) {
        throw new Error ("An error ocurred while creaing the cart")
    }
}

export const addToCartService = async (productId) => {
    try {
        let cart = await cartModel.findOne()

        if(!cart) {
            cart = await cartModel.create({products: []})
        }

        const existingProductIndex = cart.products.findIndex((item) => item.productId && item.productId.toString() === productId)

        if (existingProductIndex !== 1) {
            cart.products[existingProductIndex].qty++
        } else {
            cart.products.push({productId, qty: 1})
        }

        await cart.save()
        return cart
    } catch (err) {
        throw new Error ("An error ocurred while adding the product to the cart")
    }
}

export const removeFromCartService = async (productId) => {
    try {
        const cart = await cartModel.findOne();

        if (!cart) {
            throw new Error ("The cart doesn't exist")
        }

        cart.products = cart.products.filter((item) => item.productId.toString() !== productId)

        await cart.save()
        return cart;
    } catch (err) {
        throw new Error ("An error ocurred while removing the product from the cart")
    }
}

export const updateCartQtyService = async (cartId, productId, qty) => {
    try {
        const cart = await cartModel.findById(cartId)

        if(!cart) {
            throw new Error ("The cart doesn't exist")
        }

        const productIndex = cart.products.findIndex((item) => item.productId.toString() === productId)

        if(productIndex !== -1) {
            cart.products[productIndex].qty = qty;
            await cart.save()
        }
        
        return cart
    } catch (err){
        throw new Error ("An error ocurred while updating the product quantity")
    }
}