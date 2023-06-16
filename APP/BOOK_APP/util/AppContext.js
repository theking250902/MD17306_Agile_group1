import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const {children} = props;
    const [isLogin, setIsLogin] = useState(false); //false: chua dang nhap
    const [infoUser, setinfoUser] = useState({});
    const [checkOTP, setCheckOTP] = useState(false);
    const [OTP, setOTP] = useState({});
    const [newPass, setnewPass] = useState({});
    return (
<<<<<<< HEAD
        <AppContext.Provider value={{isLogin, setIsLogin, infoUser, setinfoUser, newPass, setnewPass}}>
=======
        <AppContext.Provider value={{isLogin, setIsLogin,infoUser,setinfoUser,checkOTP,setCheckOTP,OTP,setOTP}}>
>>>>>>> main
            {children}
        </AppContext.Provider>
    )
}