import { useFetchSingleNewsQuery } from '../../redux/features/NewsService' 

import moment from 'moment'

import {
    Stack,
    LinkProps,
    LinkBaseProps,
    Divider,
    Typography,
    Box,
    Link,
} from '@mui/material'

import NewsSkeleton from '../feedback/NewsSkeleton'
import ShowError from '../feedback/ShowError'

interface MainDataProps {
    id: number
    props: LinkProps
}

const MainData: React.FC<MainDataProps> = ({ id, ...props }) => {
    const {
        data: news,
        isError,
        error,
        isLoading,      
    } = useFetchSingleNewsQuery(id)

    
    return (
        <>
            {isLoading && <NewsSkeleton />}

            {isError ? (
                <ShowError error={error} />
            ) : (
                <Box component="article">
                    <Box component="header">
                        <Link {...props}>
                            <Typography variant="body1" component="h2">
                                {news?.title}
                            </Typography>
                        </Link>
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
                            by <Link rel="author">{news?.by}</Link>
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

export default MainData
