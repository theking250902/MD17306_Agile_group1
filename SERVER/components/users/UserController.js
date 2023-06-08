const mailer = require('nodemailer');
const userService = require('./UserService');

const transporter = mailer.createTransport({
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use TLS
    auth: {
        user: 'thontps24351@fpt.edu.vn',
        pass: 'bynzvwuwayceesbw'
    },
});
const getAllUsers = async ()=>{
    try{
        return await userService.getAllUsers();
    }catch(error){
        console.log("error getAllUsers.: "+error);
        throw error;
    }
}

const login = async (email,password)=>{
    return await userService.login(email,password);
}
const register = async (email,password,name)=>{
    try {
        return await userService.register(email,password,name);
    } catch (error) {
        console.log(error);
    }
}
const changepass = async (email,password)=>{
    try {
        return await userService.changepass(email,password);
    } catch (error) {
        console.log(error);
    }
}
const sendMail = async (email,subject,content)=>{
    try {
        const mailOptions ={
            from: 'Nguyen Ki Vu Ngu <asd@gmail.com>',
            to:email,
            subject:subject,
            html:content
        };
        return await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log('Send mail error:',error);
    }
    return false;
}
module.exports={login,register,sendMail,getAllUsers,changepass};