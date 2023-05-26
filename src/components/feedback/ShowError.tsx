import { Alert, AlertTitle } from '@mui/material'
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'

type ShowErrorProps = {
    error: FetchBaseQueryError | SerializedError
}

const ShowError: React.FC<ShowErrorProps> = ({ error }) => {
    
    if ('data' in error) {
        return (
            <Alert severity="error">
                <AlertTitle>Error {error.status}</AlertTitle>
                {JSON.stringify(error.data)} — <strong>check it out!</strong>
            </Alert>
        )
    }

    return null
}

export default ShowError
