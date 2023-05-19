import { useFetchSingleNewsQuery } from '../../redux/features/NewsService'
import ChildComments from './ChildComments'

import parse from 'html-react-parser'
import { options } from '../../utils/htmlParserOptions'
import moment from 'moment'

import {
    Box,
    Accordion,
    AccordionSummary,
    Stack,
    AccordionDetails,
    Typography,
    Link,
    List,
    ListItem,
    Divider,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CommentData from './CommentData'

type NewsCommentsProps = {
    id: number
}

const NewsComments: React.FC<NewsCommentsProps> = ({ id }) => {
    const {
        data: singleCom,
        isSuccess,
        isError,
        error,
        isLoading,
    } = useFetchSingleNewsQuery(Number(id))

    return (
        <>
            {isSuccess && !singleCom?.deleted && !singleCom?.dead && (
                <Stack
                    direction="column"
                    component="article"
                    aria-label="News comment"
                >
                    <Accordion component="details">
                        <AccordionSummary
                            sx={{ display: 'flex', flexDirection: 'column' }}
                            component="summary"
                            expandIcon={<ExpandMoreIcon />}
                        >
                            {/* <Stack component="header">
                                <Typography variant="body2" component="b">
                                    {singleCom?.score} points
                                </Typography>

                                <Typography variant="body2" component="address">
                                    by <Link rel="author">{singleCom?.by}</Link>
                                </Typography>

                                <Typography
                                    variant="body2"
                                    component="time"
                                    dateTime={moment(
                                        singleCom?.time,
                                        'X'
                                    ).format()}
                                >
                                    {moment(singleCom?.time, 'X').fromNow()}
                                </Typography>
                            </Stack>
                            <Stack component="main">
                                {parse(singleCom?.text, options)}
                            </Stack> */}

                            <CommentData id={id} />
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box
                                component="section"
                                aria-label="News subcomments"
                            >
                                <Typography variant="body2" component="h2">
                                    comments:
                                </Typography>

                                <List
                                    component="ol"
                                    sx={{ listStyle: 'number', pl: '2.5rem' }}
                                >
                                    {singleCom?.kids &&
                                        singleCom?.kids.map(
                                            (childId: number) => (
                                                <ListItem key={childId}>
                                                    <CommentData id={childId} component='article' />

                                                    <Divider />
                                                </ListItem>
                                            )
                                        )}
                                </List>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Stack>
            )}
        </>
    )
}

export default NewsComments
