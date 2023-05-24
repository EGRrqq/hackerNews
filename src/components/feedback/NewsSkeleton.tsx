import { Box, CircularProgress, Skeleton, Stack } from '@mui/material'

const NewsSkeleton: React.FC = () => {
    return (
        <Stack sx={{ width: 300 }}>
            {/* <CircularProgress /> */}
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
        </Stack>
    )
}

export default NewsSkeleton
