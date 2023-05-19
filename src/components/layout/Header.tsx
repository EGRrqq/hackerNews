import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Link,
    Breadcrumbs,
} from '@mui/material'

import { Link as RouterLink } from 'react-router-dom'
import ArticleIcon from '@mui/icons-material/Article'

import ColorModeSwitcher from '../elements/ColorModeSwitcher'

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="none"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        component={RouterLink}
                        to="/"
                    >
                        <ArticleIcon
                          aria-label="News List"
                            sx={{ mr: 0.5 }}
                            fontSize="inherit"
                        />
                        <Typography
                            variant="h6"
                            component="h1"
                            sx={{ flexGrow: 1 }}
                        >
                            HackerNews
                        </Typography>
                    </Link>
                </Breadcrumbs>

                <ColorModeSwitcher />
            </Toolbar>
        </AppBar>
    )
}

export default Header
