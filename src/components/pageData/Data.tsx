import { Link, Typography, Stack, Divider, StackProps } from '@mui/material'
import moment from 'moment'
import { IComment, INews } from '../../types/news'

interface DataProps extends StackProps {
    data: INews & IComment
    spacing: 0.5 | 1 | 1.5 | 2
    marginY?: 0.5 | 1 | 1.5 | 2
    component: 'header' | 'footer'
    display?: 'none'
}

const Data: React.FC<DataProps> = ({
    data,
    spacing,
    marginY,
    component,
    display,
    ...props
}) => {
    return (
        <Stack
            direction="row"
            divider={
                <Divider aria-hidden="true" orientation="vertical" flexItem />
            }
            spacing={spacing}
            marginY={marginY}
            component={component}
            {...props}
        >
            <Typography
                display={display}
                aria-label="news rating"
                variant="body2"
                component="b"
                minWidth="5rem"
            >
                {data?.score || 0} points
            </Typography>

            <Typography
                aria-label="news author"
                variant="body2"
                component="address"
                minWidth="5rem"
            >
                by{' '}
                <Link rel="author" tabIndex={0}>
                    {data?.by}
                </Link>
            </Typography>

            <Typography
                aria-label="news publishing time"
                variant="body2"
                component="time"
                dateTime={moment(data?.time, 'X').format()}
                minWidth="5rem"
            >
                {moment(data?.time, 'X').fromNow()}
            </Typography>

            <Typography
                aria-label="number of comments on the news"
                variant="body2"
                component="b"
                minWidth="5rem"
            >
                {(data?.kids && data?.kids.length) || 0} comments
            </Typography>
        </Stack>
    )
}

export default Data
