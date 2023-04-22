import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../utils/constants'
import { IComment, INews } from '../types/types'

export const SingleNewsAPI = createApi({
    reducerPath: 'singleNewsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
    }),
    endpoints: (build) => ({
        fetchSingleNews: build.query<INews & IComment, number>({
            query: (id) => ({
                url: `/item/${id}.json`,
            }),
        }),
    }),
})
