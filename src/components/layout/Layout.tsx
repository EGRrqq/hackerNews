import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import { Suspense } from 'react'
import Fallback from '../feedback/Fallback'
import { Container, Stack, Paper } from '@mui/material'

import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'

const Layout = () => {
    return (
        <CssVarsProvider>
            <Container>
                <Stack>
                    <Header />

                    <Suspense fallback={<Fallback />}>
                        <Paper component="main" square>
                            <Outlet />
                        </Paper>
                    </Suspense>

                    <Footer />
                </Stack>
            </Container>
        </CssVarsProvider>
    )
}

export default Layout
