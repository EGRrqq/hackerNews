import { Box, CircularProgress } from '@mui/material'

const Fallback: React.FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="50vh"
        >
            <CircularProgress />
        </Box>
    )
}

export default Fallback
