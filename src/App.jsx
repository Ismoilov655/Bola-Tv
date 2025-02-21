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
import QiziqarliMatematika from './pages/QiziqarliMatematika'
import InglizTili from './pages/InglizTili'
import Badantarbiya from './pages/Badantarbiya'
import Rasm from './pages/Rasm'

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/ertaklar' element={<Ertaklar />} />
        <Route path='/multfilm' element={<Multfilm />} />
        <Route path="/qo'shiqlar" element={<Qoshiqlar />} />
        <Route path='/qiziqarli matematika' element={<QiziqarliMatematika />} />
        <Route path='/ingliz tili' element={<InglizTili/>} />
        <Route path='/badantarbiya' element={<Badantarbiya/>} />
        <Route path='/rasm' element={<Rasm/>} />
        <Route path='/murojaat' element={<Murojaat />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={routes} />
  )
}

export default App