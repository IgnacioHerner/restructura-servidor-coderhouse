import { addToCart } from "./POST/addToCart.js";
import { updateCartQty } from "./POST/updateCartQty.js";
import { removeFromCart } from "./POST/removeFromCart.js";
import { newCart } from "./POST/newCart.js";
import { getCarts } from './GET/getCarts.js';

export const cartController = {
    addToCart,
    updateCartQty,
    removeFromCart,
    newCart,
    getCarts,
}

