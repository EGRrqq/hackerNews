import { AppBar, Toolbar, Link, Breadcrumbs, Container } from '@mui/material'

import { Link as RouterLink } from 'react-router-dom'

import ColorModeSwitcher from './ColorModeSwitcher'
import Logo from './Logo'

const Header: React.FC = () => {
    const pages = [
        ['/', 'About'],
        ['/news', 'News'],
    ]

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

                    <Breadcrumbs
                        aria-label="navigation bar"
                        color="inherit"
                        sx={{ flexGrow: 1, pr: { xs: '0', md: '6rem' } }}
                    >
                        {pages.map(([to, label]) => (
                            <Link
                                key={to}
                                underline="none"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                color="inherit"
                                component={RouterLink}
                                to={to}
                            >
                                {label}
                            </Link>
                        ))}
                    </Breadcrumbs>

                    <ColorModeSwitcher />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
