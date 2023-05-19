import moment from 'moment'
import { useFetchSingleNewsQuery } from '../../redux/features/NewsService'

import {
    Stack,
    Divider,
    Typography,
    Box,
    Alert,
    AlertTitle,
} from '@mui/material'

import { Outlet, Link as RouterLink } from 'react-router-dom'

import Fallback from '../../components/Fallback'
import ShowError from '../../components/ShowError'

interface SingleNewsProps {
    id: number
}

const SingleNews: React.FC<SingleNewsProps> = ({ id }) => {
    const {
        data: news,
        isError,
        error,
        isLoading,
    } = useFetchSingleNewsQuery(id)

    return (
        <>
            {isLoading && <Fallback />}

            {isError ? (
                <ShowError error={error} />
            ) : (
                <Box component="article">
                    <Box component="header">
                        <RouterLink to={`/${id}`}>
                            <Typography variant="body1" component="h2">
                                {news?.title}
                            </Typography>
                        </RouterLink>
                    </Box>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={1}
                        component="footer"
                    >
                        <Typography variant="body2" component="b">
                            {news?.score} points
                        </Typography>
                        <Typography variant="body2" component="address">
                            by <a rel="author" />
                            {news?.by}
                        </Typography>
                        <Typography
                            variant="body2"
                            component="time"
                            dateTime={moment(news?.time, 'X').format()}
                        >
                            {moment(news?.time, 'X').fromNow()}
                        </Typography>
                    </Stack>
                </Box>
            )}
        </>
    )
}

export default SingleNews
