import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { About, Home , Contact, User, Github} from './Components/index.js'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children : [
//       {
//         path: '',
//         element : <Home/>
//       },
//       {
//         path : 'about',
//         element : <About/>
//       },
//      {
//         path : 'contact',
//         element : <Contact/>
//     }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={< Contact/>}></Route>
      <Route path='user/:userId' element={< User/>}></Route>
      <Route path='github' element={< Github/>}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
