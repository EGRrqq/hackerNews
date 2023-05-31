import React from 'react'

import { MainData } from '../../components/pageData'
import { ShowError } from '../../components/feedback'

import { useFetchAllIdQuery } from '../../redux/features/NewsService'
import { useFetching } from '../../hooks/useFetching'

import { Stack, List, ListItem, Divider, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const NewsList: React.FC = () => {
    const {
        data: newsId,
        isSuccess,
        isError,
        error,
    } = useFetchAllIdQuery()

    const { ref, counter } = useFetching(0, 25, 300)

    return (
        <>
            {isError && <ShowError error={error} />}

            {isSuccess && (
                <Stack
                    direction="column"
                    component="section"
                    aria-label="News list section"
                >
                    <List
                        component="ol"
                        sx={{ listStyle: 'number', pl: '2.5rem' }}
                    >
                        {newsId?.slice(0, counter).map((itemId) => (
                            <React.Fragment key={itemId}>
                                <ListItem sx={{ display: 'list-item' }}>
                                    <MainData
                                        id={itemId}
                                        component={RouterLink}
                                        to={`/${itemId}`}
                                    />
                                </ListItem>

                                <Divider aria-hidden="true" />
                            </React.Fragment>
                        ))}
                    </List>
                    <Box ref={ref} height="1.5rem"></Box>
                </Stack>
            )}
        </>
    )
}

export default NewsList
