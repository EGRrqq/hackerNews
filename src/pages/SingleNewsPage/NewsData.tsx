import moment from 'moment'

import {
    Stack,
    Divider,
    Typography,
    Box,
    Link,
} from '@mui/material'

import { INews } from '../../types/news'

type SingleNewsProps = {
    news: INews
}

const NewsData: React.FC<SingleNewsProps> = ({ news }) => {
    return (
        <Box component="article">
            <Box component="header">
                <Link href={news?.url} target="_blank" rel="noreferrer">
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
    )
}

export default NewsData
