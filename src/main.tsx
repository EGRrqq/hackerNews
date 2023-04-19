import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider
        router={router}
        // Normally, the options above aren't changing, but for this particular
        // example, we need to key the router when they change
    />
  </React.StrictMode>,
)
