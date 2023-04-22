import { ReactRouter } from '@tanstack/react-router'

import { rootRoute } from './routes/__root'
import { indexRoute } from './routes/NewsListPage'
import { newsDataRoute } from './routes/NewsDataPage'

import Spinner from './components/Spinner'

const routeTree = rootRoute.addChildren([indexRoute, newsDataRoute])

export const router = new ReactRouter({
    routeTree,
    defaultPendingComponent: () => (
        <div>
            <Spinner />
        </div>
    ),
    //   onRouteChange: () => {},
})

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
