import React from 'react'
import { Navbar } from './components/Navbar'
import { Home } from './views/Home'
import { Mail } from './views/Mail'
import { Trash } from './views/Trash'
import { SignIn } from './views/SignIn'
import { SignUp } from './views/SignUp'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home /> } ></Route>
          <Route path='/mail' element={<Mail /> } ></Route>
          <Route path='/trash' element={<Trash /> } ></Route>
          <Route path='/signin' element={<SignIn /> } ></Route>
          <Route path='/signup' element={<SignUp /> } ></Route>
        </Routes>
      </main>
      <footer>

      </footer>
    </>
  )
}
