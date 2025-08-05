import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut,updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
     console.log(user);

    // const createNewUser=(email, password)=>{
    //     return createUserWithEmailAndPassword(auth,
    //         email, password);
    // };

    const createNewUser = (email, password, displayName) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Update the user's profile with their name
      return updateProfile(userCredential.user, {
        displayName: displayName
      }).then(() => {
        return userCredential; // Return the updated user
      });
    });
};

    const logout =()=>{
        return signOut(auth);
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logout,
    }

    // useEffect(()=>{
    //     const unSubscribe = onAuthStateChanged(auth, currentUser=>{
    //         setUser(currentUser);
    //     });
    //     return ()=>{
    //        unSubscribe () ;
    //     }
    // }, [])

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser ? {
                email: currentUser.email,
                displayName: currentUser.displayName,
                // other properties you need
            } : null);
        });
        return () => unSubscribe();
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;