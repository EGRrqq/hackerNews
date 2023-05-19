import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IComment, INews } from '../../types/news'

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://hacker-news.firebaseio.com/v0/'}),
    endpoints: (build) => ({
        fetchAllId: build.query<number[], _>({
            query: () => `/topstories.json`
        }),
        fetchSingleNews: build.query<INews & IComment, number>({
            query: (newsId) => `/item/${newsId}.json`
        }),
    })
})

export const { useFetchAllIdQuery, useFetchSingleNewsQuery } = newsApi