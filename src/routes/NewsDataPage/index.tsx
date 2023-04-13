import { Link, Route } from '@tanstack/react-router'
import { rootRoute } from '../__root'

const NewsDataPage = () => {
    return (
        <>hello</>
    )
}

export const helloRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/hello',
    component: NewsDataPage,
})