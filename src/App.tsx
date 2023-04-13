import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'

const App = () => {
  return (
    <>
      <RouterProvider
              router={router}
              // Normally, the options above aren't changing, but for this particular
              // example, we need to key the router when they change
            />
    </>
  )
}

export default App