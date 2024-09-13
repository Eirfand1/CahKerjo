import React from 'react'
import { Route, Routes } from "react-router-dom"
import LandingPage from '../pages/LandingPage'
import NotFound from '../pages/NotFound'
import JobsList from '../pages/JobsList'
import JobDetail from '../pages/JobDetail'

const AppRoutes = () => {
   return (
     <Routes>
       <Route path='/' element={<LandingPage/>}/>
       <Route path='/jobs' element={<JobsList/>}/>
       <Route path='/jobs/:id' element={<JobDetail/>}/>
       <Route path='*' element={<NotFound/>}/>
     </Routes>  
   )
}

export default AppRoutes