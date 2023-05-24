import { PropsWithChildren } from 'react'

import { Box, Typography, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import ArticleIcon from '@mui/icons-material/Article'

interface LogoProps extends PropsWithChildren {
    xs: 'flex' | 'none'
    md: 'flex' | 'none'
    to: '/' | '/news'
}

const Logo: React.FC<LogoProps> = ({ children, xs, md, to }) => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: {
                    xs: xs,
                    md: md,
                },
                placeItems: 'center',
            }}
        >
            <Link
                underline="none"
                color="inherit"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
                component={RouterLink}
                to={to}
            >
                <ArticleIcon
                    aria-label="News icon"
                    sx={{ mr: 0.5 }}
                    fontSize="inherit"
                />
                <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
                    {children}
                </Typography>
            </Link>
        </Box>
    )
}

export default Logo
