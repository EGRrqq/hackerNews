import { AppBar, Toolbar, Container } from '@mui/material'

import Logo from './Logo'

const Header: React.FC = () => {
    return (
        <AppBar aria-label="application bar" position="static">
            <Container maxWidth="xl">
                <Toolbar
                    sx={{ justifyContent: 'space-between' }}
                    disableGutters
                >
                    <Logo to="/" xs="flex" md="none">
                        HN
                    </Logo>
                    <Logo to="/" xs="none" md="flex">
                        HackerNews
                    </Logo>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
