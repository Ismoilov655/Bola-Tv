import React from 'react'

// rrd
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'

// pages
import Home from './pages/Home'
import MainLayout from './layout/MainLayout'
import Ertaklar from './pages/Ertaklar'
import Multfilm from './pages/Multfilm'
import Qoshiqlar from './pages/Qoshiqlar'
import Murojaat from './pages/Murojaat'

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/ertaklar' element={<Ertaklar/>}/>
        <Route path='/multfilm' element={<Multfilm/>}/>
        <Route path="/qo'shiqlar" element={<Qoshiqlar/>}/>
        <Route path='/qiziqarli matematika' element={<Home/>}/>
        <Route path='/ingliz tili' element={<Home/>}/>
        <Route path='/badantarbiya' element={<Home/>}/>
        <Route path='/rasm' element={<Home/>}/>
        <Route path='/murojaat' element={<Murojaat/>}/>
      </Route>
    )
  )
  return (
      <RouterProvider router={routes}/>
  )
}

export default App