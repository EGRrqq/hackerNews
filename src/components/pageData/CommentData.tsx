import parse from 'html-react-parser'
import { options } from '../../utils/htmlParserOptions'

import { Stack } from '@mui/material'
import { useFetchSingleNewsQuery } from '../../redux/features/NewsService'
import Data from './Data'
import NewsSkeleton from '../feedback/NewsSkeleton'
import ShowError from '../feedback/ShowError'

interface CommentProps {
    id: number
    component?: 'article'
}

const CommentData: React.FC<CommentProps> = ({ id, ...props }) => {
    const {
        data: comment,
        isSuccess,
        isError,
        error,
        isLoading,
    } = useFetchSingleNewsQuery(id)

    return (
        <>
            {isLoading && <NewsSkeleton />}

            {isError && <ShowError error={error} />}

            {isSuccess && comment && !comment?.deleted && !comment?.dead && (
                <Stack direction="column" {...props}>
                    <Data
                        display="none"
                        spacing={0.5}
                        marginY={1.5}
                        component="header"
                        aria-label="Additional information about the commentary"
                        data={comment}
                    />

                    <Stack
                        component="main"
                        aria-label="Commentary"
                    >
                        {parse(comment?.text, options)}
                    </Stack>
                </Stack>
            )}
        </>
    )
}

export default CommentData
