import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import AddBlog from './components/addblog/AddBlog'







const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
    <Route path='/' element={<Layout/>}/>
    <Route path='addblog' element={<AddBlog/>}/> 
    
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
    
    

    
  </React.StrictMode>,
)
