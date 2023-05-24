import parse from 'html-react-parser'
import { options } from '../../utils/htmlParserOptions'
import moment from 'moment'

import { Stack, StackProps, Typography, Link } from '@mui/material'
import { useFetchSingleNewsQuery } from '../../redux/features/NewsService'

type CommentProps = {
    id: number
    props?: StackProps<'article', { component: 'article' }>
}

const CommentData: React.FC<CommentProps> = ({ id, ...props }) => {
    const { data, isSuccess, isError, error, isLoading } =
        useFetchSingleNewsQuery(Number(id))

    // error handling

    return (
        <>
            {isSuccess && !data?.deleted && !data?.dead && (
                <Stack direction="column" {...props}>
                    <Stack direction="row" component="header">
                        <Typography variant="body2" component="b">
                            {data?.score} points
                        </Typography>

                        <Typography variant="body2" component="address">
                            by <Link rel="author">{data?.by}</Link>
                        </Typography>

                        <Typography
                            variant="body2"
                            component="time"
                            dateTime={moment(data?.time, 'X').format()}
                        >
                            {moment(data?.time, 'X').fromNow()}
                        </Typography>
                    </Stack>
                    <Stack component="main">{parse(data?.text, options)}</Stack>
                </Stack>
            )}
        </>
    )
}

export default CommentData
