import React from 'react'
import { useAuth } from '../context/AuthProvider'

export const Trash = () => {

    const { currentUser } = useAuth()


  return (
      <div className="container">
          <div className="has-bg-img">
              <div className="row">
                  <div className="col-md-3 mt-3">
                      <div className="card-body text-center">
                          <img className="img-fluid rounded-pill" src={currentUser.image} alt="Profile Image" title={currentUser.name} />
                          <h4 className="mt-2" >{currentUser.name}</h4>
                          <p className="mt-2" >{currentUser.email}</p>
                      </div>
                  </div>
                  <div className="col-md-9">
                      <h4 className="text-lg-center mt-3" ><strong>Trash Messages</strong></h4>
                      <hr />
                      <ul className="list-group">
                          <li className="list-group-item mt-3">
                              <p>This is a static message</p>
                              <div>
                                  <small>
                                      &mdash; Lucas Lang
                                      <span className="float-right">12 seconds ago</span>
                                  </small>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  )
}
