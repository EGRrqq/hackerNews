import { useFetchSingleNewsQuery } from '../../redux/features/NewsService'

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
import CommentData from '../../components/pageData/CommentData'
import NewsSkeleton from '../../components/feedback/NewsSkeleton'

type NewsCommentsProps = {
    id: number;
}

const NewsComments: React.FC<NewsCommentsProps> = ({ id }) => {
    const {
        data: singleCom,
        isSuccess,
        isError,
        error,
        isLoading,
    } = useFetchSingleNewsQuery(Number(id))

    // error handling

    return (
        <>
            {isLoading && <NewsSkeleton />}

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
