import React from 'react'

import MainData from '../../components/pageData/MainData'
import ShowError from '../../components/feedback/ShowError'
import { useFetchAllIdQuery } from '../../redux/features/NewsService'

import { Stack, List, ListItem, Divider, styled } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'


const NewsList: React.FC = () => {
    const { data: newsId, isError, error, refetch } = useFetchAllIdQuery(0)

    const StyledMainData = styled(MainData)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        // color: '#f1f1f1',
        // '&:hover': {
        //     color: '#f00',
        // },
    }))

    // mb получше передачу пропсов сделать в maindate

    return (
        <>
            {isError && <ShowError error={error} />}

            <Stack
                direction="column"
                component="section"
                aria-label="News list section"
            >
                <List component="ol" sx={{ listStyle: 'number', pl: '2.5rem' }}>
                    {newsId?.slice(0, 15).map((itemId) => (
                        <React.Fragment key={itemId}>
                            <ListItem
                                aria-label="News list"
                                sx={{ display: 'list-item' }}
                            >
                                <StyledMainData
                                    id={itemId}
                                    component={RouterLink}
                                    to={`/news/${itemId}`}
                                />
                            </ListItem>
                            
                            <Divider aria-hidden="true" />
                        </React.Fragment>
                    ))}
                </List>
            </Stack>
        </>
    )
}

export default NewsList
