import { useColorScheme, Button, styled, Switch, makeStyles } from '@mui/material'

function ColorModeSwitcher() {
    const { mode, setMode } = useColorScheme()

    return (
        <Button
            sx={{ backgroundColor: 'whitesmoke'}}
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light')
            }}
        >
            {mode === 'light' ? 'Turn dark' : 'Turn light'}
        </Button>
    )
}

export default ColorModeSwitcher

