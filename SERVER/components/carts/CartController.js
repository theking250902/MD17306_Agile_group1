const cartService = require('./CartService');

const getAllCarts = async ()=>{
    try{
        return await cartService.getAllCarts();
    }catch(error){
        console.log("error productController.getAllProducts: "+error);
        throw error;
    }
}
const addNewCart =async(name,price,quantity,image,id_user)=>{
    try{
        return await cartService.addNewCart(name,price,quantity,image,id_user);
    }
    catch(error){
        console.log("error addNewCart: "+error);
        throw error;
    }
}
const updateCart = async (quantity)=>{
    try {
        return await productService.updateProduct(quantity);
    } catch (error) {
        console.log("updateCart error: "+error);
        throw error;
    }
}
const deleteCartById = async (id)=>{
    try{
        return await cartService.deleteCartById(id);
    }catch(error){
        console.log("error deleteCartById controller "+error);
        throw error;
    }
}


module.exports={getAllCarts,addNewCart,updateCart,deleteCartById};