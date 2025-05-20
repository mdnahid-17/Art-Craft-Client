import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export default function AuthProvider({ children }) {



  const [user,setUser] =useState(null)
  const [loader,setLoader] =useState(true)
  

  // Create User
  const createUser =(email,password)=>{
      setLoader(true)
    return  createUserWithEmailAndPassword(auth,email,password)        
  }

  // Login User
  const loginUser =(email,password)=>{
      setLoader(true)
      return signInWithEmailAndPassword(auth, email, password)
  }

  // Logout User
  const logOutUser =()=>{
      return signOut(auth)
  }

  // Google Login
  const googleLogin =()=>{
      setLoader(true)
      return signInWithPopup(auth,googleProvider)
  }

  // Github Login
  const githubLogin =()=>{
      setLoader(true)
      return signInWithPopup(auth,githubProvider)
  }


  // Observer
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
          setUser(currentUser)
          setLoader(false)
      }) 
      return ()=>{
          unSubscribe()
      }
  },[])

  const authInfo={loader,user,createUser,loginUser,logOutUser,googleLogin,githubLogin}

  return (<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>);
}
