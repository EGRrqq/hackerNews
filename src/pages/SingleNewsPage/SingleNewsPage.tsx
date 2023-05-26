import React from 'react'

import { useFetchSingleNewsQuery } from '../../redux/features/NewsService'
import { useParams } from 'react-router-dom'

import NewsComments from './NewsComments'
import { MainData } from '../../components/pageData'
import { NewsSkeleton, ShowError } from '../../components/feedback'

import { Container, Divider, List, ListItem, Stack, Box } from '@mui/material'

const SingleNewsPage: React.FC = () => {
    const { id } = useParams()
    const {
        data: news,
        isSuccess,
        isError,
        error,
        isLoading,
    } = useFetchSingleNewsQuery(Number(id))

    // no comments text

    return (
        <>
            {isLoading && <NewsSkeleton />}

            {isError && <ShowError error={error} />}

            {isSuccess && (
                <Container component="section" aria-label="News page">
                    <Box margin={3}>
                        <MainData
                            id={Number(id)}
                            href={news?.url}
                            target="_blank"
                            rel="noreferrer"
                        />
                    </Box>

                    <Stack
                        direction="column"
                        component="section"
                        aria-label="Comments list"
                    >
                        <List
                            component="ol"
                            sx={{ listStyle: 'number', pl: '2.5rem' }}
                        >
                            {news?.kids &&
                                news?.kids.slice(0, 15).map((itemId) => (
                                    <React.Fragment key={itemId}>
                                        <ListItem sx={{ display: 'list-item' }}>
                                            <NewsComments id={itemId} />
                                        </ListItem>

                                        <Divider aria-hidden="true" />
                                    </React.Fragment>
                                ))}
                        </List>
                    </Stack>
                </Container>
            )}
        </>
    )
}

export default SingleNewsPage
