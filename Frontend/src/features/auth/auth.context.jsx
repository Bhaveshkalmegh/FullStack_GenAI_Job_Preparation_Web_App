import React ,{ createContext,useState} from "react";

const AuthContext  = createContext(null)

const AuthProvider =  ({ children }) => {


    //take a child component and wrap it in AuthContext.Provider
    const [user,setUser] = useState(null)
    const [loading,setloading] = useState(true)

    return(
        <AuthContext.Provider value ={{user,setUser,loading,setloading}}>
            {children}
        </AuthContext.Provider>
    )
}

export  {
AuthProvider,
AuthContext
};
