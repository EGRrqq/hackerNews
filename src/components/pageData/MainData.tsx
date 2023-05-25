import { useFetchSingleNewsQuery } from '../../redux/features/NewsService'

import {
    LinkBaseProps,
    TypographyProps,
    LinkProps,
    Typography,
    Box,
    Link,
} from '@mui/material'

import { LinkProps as RouterLinkProps, To } from 'react-router-dom'

import NewsSkeleton from '../feedback/NewsSkeleton'
import ShowError from '../feedback/ShowError'
import Data from './Data'

// interface MainDataProps {
//     id: number
//     props: LinkProps
// }

type MainDataProps = MainDataWithLink | MainDataWithRouterLink

interface MainDataBasic {
    id: number
}

interface MainDataWithLink extends MainDataBasic {
    href: string;
    target: "_blank"
    rel: "noreferrer"
}

interface MainDataWithRouterLink extends MainDataBasic {
    component: React.ForwardRefExoticComponent<RouterLinkProps & React.RefAttributes<HTMLAnchorElement>>;
    to: To
}

const MainData: React.FC<MainDataProps> = ({ id, ...props }) => {
    const {
        data: news,
        isError,
        error,
        isLoading,
        isSuccess,
    } = useFetchSingleNewsQuery(id)

    return (
        <>
            {isLoading && <NewsSkeleton />}

            {isError && <ShowError error={error} />}

            {isSuccess && (
                <Box component="article">
                    <Box component="header">
                        <Link {...props}>
                            <Typography variant="body1" component="h2">
                                {news?.title}
                            </Typography>
                        </Link>
                    </Box>

                    <Data spacing={1} component="footer" data={news} />
                </Box>
            )}
        </>
    )
}

export default MainData
