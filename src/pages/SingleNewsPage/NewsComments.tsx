import React from 'react'

import { useFetchSingleNewsQuery } from '../../redux/features/NewsService'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { CommentData } from '../../components/pageData'
import { NewsSkeleton, ShowError } from '../../components/feedback'

import {
    Accordion,
    AccordionSummary,
    Stack,
    AccordionDetails,
    Typography,
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

    return (
        <>
            {isLoading && <NewsSkeleton />}

            {isError && <ShowError error={error} />}

            {isSuccess && !singleCom?.deleted && !singleCom?.dead && (
                <Stack
                    direction="column"
                    component="article"
                    aria-label="News comment"
                >
                    <Accordion>
                        <AccordionSummary
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                placeItems: 'flex-start',
                            }}
                            expandIcon={<ExpandMoreIcon />}
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
