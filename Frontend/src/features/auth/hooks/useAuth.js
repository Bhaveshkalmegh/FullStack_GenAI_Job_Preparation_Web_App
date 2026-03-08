import { useContext, useEffect } from "react";
import {AuthContext} from "../auth.context"
import {login,register,logout,getMe} from "../services/auth.api.js"

// hook layer -> managing what data going to store in state layer and when to call    

export const  useAuth = ()=>{
    const context = useContext(AuthContext)
    const {user,setUser,loading,setloading}= context

    const handleLogin= async({email,password})=>{
        try{
            setloading(true)
            const data = await login({email,password})
            setUser(data.user)

        }
        catch(err){
            console.log(err)
        }
        finally{

            setloading(false) 
        }
        
    }

    const handleRegister=async({username,email,password})=>{
        try{

            setloading(true)
            const data = await register({username,email,password})
            setUser(data.user)
        }
        catch (err){
            console.log(err) 
        }
        finally{

            setloading(false)
        }
        
    }

    const handleLogout = async()=>{


        try {
            setloading(true)
            await logout()
            setUser(null) //in logout we have to remove the user data frontend 
            
        } catch (err) {
            console.log(err)
        }
        finally{
        setloading(false)
    }
    }

    useEffect(()=>{

        const getAndSetUser= async()=>{

            
            const data = await getMe()
            setUser(data.user)
            setloading(false) 
        } 

        getAndSetUser()

    },[ setUser, setloading])


return {user,loading,handleLogin,handleLogout,handleRegister}


}