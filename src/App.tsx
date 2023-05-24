import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/layout/Layout'

const AboutPage = lazy(() => import('./pages/AboutPage'))
const NewsListPage = lazy(() => import('./pages/NewsListPage'))
const NewsDataPage = lazy(() => import('./pages/SingleNewsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<AboutPage />} />
                    <Route path='news' element={<NewsListPage />} />
                    <Route path='news/:id' element={<NewsDataPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
