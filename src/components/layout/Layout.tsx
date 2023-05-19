import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import { Suspense } from 'react'
import Fallback from '../feedback/Fallback'
import { Container, Stack, Paper } from '@mui/material'

import { red } from '@mui/material/colors';
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme,
} from '@mui/material/styles';
import {} from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: red[500],
//     },
//   },
//});


const theme = extendTheme({
      colorSchemes: {
        // light: {
        //   palette: {
        //     primary: {
        //       main: '#ff5252',
        //     },
        //     // ...
        //   },
        // },
        
        // dark: {
        //   palette: {
        //     primary: {
        //       main: '#000',
        //     },
        //     // ...
        //   },
        // },
      },
      // ...other properties
    });

const Layout = () => {
    return (
        <CssVarsProvider theme={theme}>
            <Container>
                <Stack>
                    <Header />

                    <Suspense fallback={<Fallback />}>
                        <Paper component="main" square sx={{ minHeight: "50vh" }}>
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
