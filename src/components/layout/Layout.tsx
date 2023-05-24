import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import { Suspense } from 'react'
import Fallback from '../feedback/Fallback'
import { Container, Stack, Paper } from '@mui/material'

import { indigo, teal, pink } from '@mui/material/colors'
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme,
} from '@mui/material/styles'

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                // primary: {
                //     main: teal[500],
                // },
                // secondary: {
                //     main: teal[500],
                // },
                contrastThreshold: 4.5,
                // ...
            },
        },

        dark: {
            palette: {
                primary: {
                    main: pink[500],
                },
                // secondary: {
                //     main: teal[900],
                // },
                background: {
                    paper: indigo[900],
                },
                contrastThreshold: 4.5,
                // ...
            },
        },
    },
    // ...other properties
})

const Layout = () => {
    return (
        <CssVarsProvider theme={theme}>
            <Container>
                <Stack>
                    <Header />

                    <Suspense fallback={<Fallback />}>
                        <Paper
                            component="main"
                            square
                            sx={{ minHeight: '50vh' }}
                        >
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
