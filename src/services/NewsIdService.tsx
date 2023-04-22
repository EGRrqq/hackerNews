import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../utils/constants'

export const NewsIdAPI = createApi({
    reducerPath: 'idAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
    }),
    endpoints: (build) => ({
        fetchAllID: build.query<number[], number>({
            query: () => ({
                url: '/topstories.json',
            }),
        }),
    }),
})
