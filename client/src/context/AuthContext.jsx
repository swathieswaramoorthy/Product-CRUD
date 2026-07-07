import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const savedUser = localStorage.getItem("user");

        if(savedUser){

            setUser(JSON.parse(savedUser));

        }

    },[]);


    const login = (user,token)=>{

        localStorage.setItem("user",JSON.stringify(user));

        localStorage.setItem("token",token);

        setUser(user);

    };


    const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    window.location.href="/login";

}


    return(

        <AuthContext.Provider value={{
            user,
            login,
            logout
        }}>

            {children}

        </AuthContext.Provider>

    )

}


export const useAuth = ()=>useContext(AuthContext);