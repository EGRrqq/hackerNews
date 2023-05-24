import {
    useColorScheme,
    Switch,
    FormControl,
    FormLabel,
    FormControlLabel,
} from '@mui/material'

import { visuallyHidden } from '@mui/utils';

import { pink } from '@mui/material/colors';

function ColorModeSwitcher() {
    const { mode, setMode } = useColorScheme()

    return (
        <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend" sx={visuallyHidden}>Switch Theme</FormLabel>

            <FormControlLabel
                control={
                    <Switch
                        aria-label="Color theme switcher"
                        color={mode === 'light' ? 'default' : 'secondary'}
                        onClick={() => {
                            setMode(mode === 'light' ? 'dark' : 'light')
                        }}
                    />
                }
                label=''
            />
        </FormControl>
    )
}

export default ColorModeSwitcher

