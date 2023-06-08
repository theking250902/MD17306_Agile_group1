import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const {children} = props;
    const [isLogin, setIsLogin] = useState(false); //false: chua dang nhap
    const [infoUser, setinfoUser] = useState({});
    const [newPass, setnewPass] = useState({});
    return (
        <AppContext.Provider value={{isLogin, setIsLogin, infoUser, setinfoUser, newPass, setnewPass}}>
            {children}
        </AppContext.Provider>
    )
}