import { Link, Typography, Stack, Divider } from '@mui/material'
import moment from 'moment'
import { IComment, INews } from '../../types/news'

interface DataProps {
    data: INews & IComment;
    spacing: 0.5 | 1 | 1.5 | 2;
    marginY?: 0.5 | 1 | 1.5 | 2;
    component: 'header' | 'footer';
    display?: 'none'
}

const Data: React.FC<DataProps> = ({ data, spacing, marginY, component, ...props }) => {
    return (
        <Stack
            direction='row'
            divider={<Divider orientation="vertical" flexItem />}
            spacing={spacing}
            marginY={marginY}
            component={component}
        >
            <Typography {...props} variant="body2" component="b" minWidth="5rem">
                {data?.score || 0} points
            </Typography>

            <Typography variant="body2" component="address" minWidth="5rem">
                by <Link rel="author">{data?.by}</Link>
            </Typography>

            <Typography
                variant="body2"
                component="time"
                dateTime={moment(data?.time, 'X').format()}
                minWidth="5rem"
            >
                {moment(data?.time, 'X').fromNow()}
            </Typography>

            <Typography variant="body2" component="b" minWidth="5rem">
                {(data?.kids && data?.kids.length) || 0} comments
            </Typography>
        </Stack>
    )
}

export default Data
