import {
    useColorScheme,
    Switch,
    FormControl,
    FormLabel,
    FormControlLabel,
} from '@mui/material'

import { visuallyHidden } from '@mui/utils'

import { pink } from '@mui/material/colors'

function ColorModeSwitcher() {
    const { mode, setMode } = useColorScheme()

    return (
        <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend" sx={visuallyHidden}>
                Switch Theme
            </FormLabel>

            <FormControlLabel
                control={
                    <Switch
                        tabIndex={0}
                        aria-label={
                            mode === 'light'
                                ? 'turn on the dark theme'
                                : 'turn on the light theme'
                        }
                        color={mode === 'light' ? 'default' : 'secondary'}
                        onClick={() => {
                            setMode(mode === 'light' ? 'dark' : 'light')
                        }}
                    />
                }
                label=""
            />
        </FormControl>
    )
}

export default ColorModeSwitcher

