import { Box, Stack, Typography } from '@mui/material'

const NotFoundPage: React.FC = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight='50vh'
        >
            <Typography variant="body2" component="h2" >
                NotFound Page
            </Typography>
        </Box>
    )
}

export default NotFoundPage
