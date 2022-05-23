import React, { useRef, useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs, orderBy, query } from 'firebase/firestore' 
import { AuthContext, useAuth } from '../context/AuthProvider';


export const Home = () => {
    const [ postList, setPostList ] = useState([])
    const [ orderedPosts, setOrderedPosts ] = useState([])
    const blogFormMessageBody = useRef('');

    const {currentUser} = useAuth()
    
    const retrievePosts = async () => {

        let filteredPostList = []
        const querySnapshot = await getDocs(collection( db, 'posts'))
        querySnapshot.forEach( doc => {
            // console.log(doc.id)
            filteredPostList.push({ ...doc.data(), id: doc.id } )
            setPostList( filteredPostList );

            let sortedPosts = filteredPostList.sort( (a,b) => b.dateCreated - a.dateCreated )
            setOrderedPosts ( sortedPosts );
        })
        
        let orderedPosts = query( collection( db, 'posts' ), orderBy( 'dateCreated'))
        // console.log( orderedPosts )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(blogFormMessageBody.current.value)
        // console.log( e.target.messageBody.value )
        blogFormMessageBody.current.value = ''
    }

    useEffect(() => {
        retrievePosts()
        // setPostList(posts);
    })   // , [posts]);

    return (
        <div className="container mt-5" >
            <div className="ml-auto" >
                <h3>Inbox</h3>
                <hr />
                <li className="list-group-item mt-3">
                    <p>This is static messaging</p>
                    <div>
                        <small>
                            &mdash; Lucas Lang
                            <span className="float-right">12 seconds ago</span>
                        </small>
                    </div>
                </li>
            </div>
            <hr />
            <div className="card mx-auto" >
                <div className="card-header bg-gray">
                    <div className="navbar navbar-expand p-0">
                        <ul className="navbar-nav mr-auto" >
                            <li className="nav-item">
                                <a href="#" className="nav-link text-dark">Nate Tchamba</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link text-dark">call</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-dark">video chat</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <form onSubmit={ handleSubmit }>
                    <div className="card-body" >
                        <div className="row">
                            <div className="col-md-9">
                                <div className="form-group">
                                    <input type="text"
                                        name="messageBody"
                                        className="form-control"
                                        placeholder="Say Hello to Nate!"
                                        aria-describedby="helpId"
                                        ref ={ blogFormMessageBody } />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <button type="submit" className="btn btn-block btn-primary">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
