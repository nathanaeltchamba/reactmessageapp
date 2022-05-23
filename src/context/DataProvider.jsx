import { doc, getDocs, query, collectionGroup } from "firebase/firestore";
import { createContext, useCallback, useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "./AuthProvider";

export const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const [posts, setPosts] = useState([])
    const { currentUser } = useAuth();

    const getPosts = useCallback(
        async () => {
            const q = query(
                collectionGroup(db, 'posts')
            )
            const querySnapshot = await getDocs(q)
            let retrievePosts = []
            querySnapshot.forEach(async (post) => {
                const userRef = await getDocs(post.ref.parent.parent)

                retrievePosts.push({
                    id: post.id,
                    ...post.data(),
                    user: {
                        id: userRef.id,
                        ...userRef.data()
                    }
                })

                setPosts(posts.concat(retrievePosts))
            } )

            return querySnapshot
        },
        [db] ,
    )


    useEffect(() => {
        getPosts()
    }, [getPosts])

    const context = {
        posts
    }

    return (
        <DataContext.Provider value={context} >
            {children}
        </DataContext.Provider>
    )

}