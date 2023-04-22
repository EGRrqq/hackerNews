import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider
          router={router}
          // Normally, the options above aren't changing, but for this particular
          // example, we need to key the router when they change
      />
    </Provider>
  </React.StrictMode>,
)
