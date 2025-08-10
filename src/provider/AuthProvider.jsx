import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);

    const [loading, setLoading]= useState(true); 
    //  console.log(user, loading);

    // const createNewUser=(email, password)=>{
    //     return createUserWithEmailAndPassword(auth,
    //         email, password);
    // };

    const createNewUser = (email, password, displayName) => {
        setLoading(true);
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

    const userLogin =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }




    const logout =()=>{
        setLoading(true);
        return signOut(auth);
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logout,
        userLogin,
        loading,
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
            setLoading(false);
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