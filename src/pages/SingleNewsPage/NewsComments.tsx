import React from 'react'

import { useFetchSingleNewsQuery } from '../../redux/features/NewsService'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CommentData from '../../components/pageData/CommentData'
import NewsSkeleton from '../../components/feedback/NewsSkeleton'

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
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                placeItems: 'flex-start',
                            }}
                            component="summary"
                            expandIcon={<ExpandMoreIcon />}
                            // aria-controls="panel1d-content"
                            // id="panel1d-header"
                        >
                            <CommentData id={id} />
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack
                                direction="column"
                                component="section"
                                aria-label="News subcomments"
                            >
                                <Typography variant="body2" component="h2">
                                    comments:
                                </Typography>

                                <List
                                    component="ol"
                                    sx={{ listStyle: 'square', pl: '2.5rem' }}
                                >
                                    {(singleCom?.kids &&
                                        singleCom?.kids.map(
                                            (childId: number) => (
                                                <React.Fragment key={childId}>
                                                    <ListItem>
                                                        <CommentData
                                                            id={childId}
                                                            component="article"
                                                        />
                                                    </ListItem>
                                                    <Divider />
                                                </React.Fragment>
                                            )
                                        )) || (
                                        <>
                                            <Typography
                                                variant="body2"
                                                marginBottom={1.5}
                                            >
                                                no comments yet...
                                            </Typography>
                                            <Divider />
                                        </>
                                    )}
                                </List>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                </Stack>
            )}
        </>
    )
}

export default NewsComments
