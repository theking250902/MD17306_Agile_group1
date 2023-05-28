const cartModel = require('./CartModel');
const getAllCarts = async (size, page) => {
    // lay toan bo sp trong database
    // size =20 , page =4 ==> 61-80
    try {
        return await cartModel.find()
    } catch (error) {
        console.log("getAllCarts error: " + error);
    }
    return [];
}
// const getAllProducts2 = async (size, page) => {
//     try {
//         return await productModel
//         .find({},'name price') // lay 2 cot name va price
//         .populate('category') // lay category
//         .sort({price:-1}) // sap xep theo gia tang dan
//         //.skip(2) // bo qua 2 sp dau
//     } catch (error) {
//         console.log("getAllProducts error: " + error);
//     }
//     return [];
// }
// xoa sp theo id
const deleteCartById = async (id) => {

    try {
        await cartModel.findByIdAndDelete(id);
        return true;
    }
    catch (error) {
        console.log("Delete Cart by ID error: " + error);
        throw error;
    }
    return false;

}
const addNewCart = async (name, price, quantity, image, id_user) => {
    try {
        const newCart = {
            name,
            price,
            quantity,
            image,
            id_user
        }
        await cartModel.create(newCart);
        return true;
    }
    catch (error) {
        console.log("addNewProduct error: " + error);
        throw error;
    }
    return false;

}
//update sp
const updateCart = async (id, name, price, quantity, image, id_user) => {
    try {
        let item = await productModel.findById(id);
        if (item) {
            item.name = name ? name : item.name;
            item.price = price ? price : item.price;
            item.quantity = quantity ? quantity : item.quantity;
            item.image = image ? image : item.image;
            item.id_user = id_user ? id_user : item.id_user;
            await item.save();
            return true;
        }
    } catch (error) {
        console.log('Update Cart error', error);

    }
    return false;
}
// lay thong tin sp theo id
//
const getCartById = async (id) => {
    try {
        let cart = await cartModel.findById(id)
        return cart;
    } catch (error) {
        console.log('getProductById error', error); 
    }
    return null;
}

module.exports = { getAllCarts, deleteCartById, addNewCart, updateCart, getCartById };

