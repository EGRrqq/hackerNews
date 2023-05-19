import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

const NewsListPage = lazy(() => import('./pages/NewsListPage'))
const NewsDataPage = lazy(() => import('./pages/SingleNewsPage'))

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<NewsListPage />} />
                    <Route path='/:id' element={<NewsDataPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
