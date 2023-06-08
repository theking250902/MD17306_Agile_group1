const bcrypt = require('bcryptjs');
const userModel = require('./UserModel');
const login = async (email, password) => {
    try {
        let user = await userModel.findOne({email:email});
        if(user){
            let check =bcrypt.compareSync(password,user.password);
            return check ? user : false;
        }
    } catch (error) {
        console.log("Login error: ",error);

    }
    return false;
}
const getAllUsers = async (size, page) => {
    // lay toan bo sp trong database
    // size =20 , page =4 ==> 61-80
    try {
        return await userModel.find();// lay category;
    } catch (error) {
        console.log("getAllUsers error: " + error);
    }
    return [];
}
const register = async (email, password, name) => {
    try {
        // ktra email co hay khong
        const user = await userModel.findOne({ email: email });
        if (!user) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const newUser = { email, password: hash, name,role:1 };
            await userModel.create(newUser);
            return true;
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}
const changepass = async (newPassword, cNewPassword) => {
    try {
        let user = await userModel.findOne({password:newPassword, cNewPassword});
        if(user){
            let check =bcrypt.compareSync(newPassword,user.newPassword);
            return check ? user : false;
        }
    } catch (error) {
        console.log("changepass error: ",error);

    }
    return false;
}
module.exports = { login, register,getAllUsers, changepass };

var users = [
    { _id: 1, email: 'abc@gmail.com', password: 1, name: 'Long Vu ChiPu' },
    { _id: 2, email: 'ccc@gmail.com', password: 1, name: 'Long Vu Ngu' },
]