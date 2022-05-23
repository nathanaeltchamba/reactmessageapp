import { useState, useEffect, useContext, createContext, useId } from "react"
import { getAuth, signInWithPopup, setPersistence, browserLocalPersistence, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


export const AuthContext = createContext();

export function useAuth() {
    return useContext( AuthContext )
}

export const AuthProvider = ( {children} ) => {
    const [currentUser, setCurrentUser] = useState( {loggedIn: false} )

    const auth = getAuth();
    const provider = new GoogleAuthProvider()
    
    
    const signIn = () => {

        setPersistence( auth, browserLocalPersistence )
        .then( () => {
            signInWithPopup( auth, provider )
                .then(result => {
                    console.log('user logged in successfully')
                })
        })
        .catch(err => console.log( err ))
        console.log('user logged in successfully')
    }

    useEffect(() => {
        onAuthStateChanged( auth, user => {
            if ( user ) {

                // once user logs in, add them to database
                const userRef = doc( db, 'users', user.uid )

                setDoc( userRef, {email:user.email, name: user.displayName}, { merge: true } )

                setCurrentUser({
                    id: useId,
                    name: user.displayName,
                    image: user.photoURL,
                    email: user.email,
                    loggedIn: true
                })
            }
        } )  
        // make change whenever data changes
    }), [ auth ]
    
    const context = {
        currentUser, signIn
    }

    return(
        <AuthContext.Provider value={ context }>
            { children }
        </AuthContext.Provider>
    )
}


