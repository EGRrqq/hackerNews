import { Box, Typography } from '@mui/material'

const AboutPage: React.FC = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight='50vh'
        >
            <Typography variant="body2" component="h2" >
                About project
            </Typography>
        </Box>
    )
}

export default AboutPage
