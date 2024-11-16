import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Resume from './pages/resume/resume.jsx'
import Portfolio from './pages/portfolio/portfolio.jsx'

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/resume',
        element: <Resume />
    }, 
    {
        path: '/portfolio',
        element: <Portfolio />
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} future={{ v7_startTransition: true }}/>  
)
