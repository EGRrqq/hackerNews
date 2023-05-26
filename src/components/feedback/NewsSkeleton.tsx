import { Skeleton, Stack } from '@mui/material'

const NewsSkeleton: React.FC = () => {
    return (
        <Stack sx={{ width: '40%' }}>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
        </Stack>
    )
}

export default NewsSkeleton
