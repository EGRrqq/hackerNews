import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { NewsIdAPI } from '../services/NewsIdService'
import { SingleNewsAPI } from '../services/SingleNewsService'

const rootReducer = combineReducers({
    [NewsIdAPI.reducerPath]: NewsIdAPI.reducer,
    [SingleNewsAPI.reducerPath]: SingleNewsAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                NewsIdAPI.middleware,
                SingleNewsAPI.middleware
            ),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
