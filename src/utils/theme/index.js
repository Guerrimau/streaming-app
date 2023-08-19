const { createTheme } = require("@mui/material");

export const theme = createTheme({
    palette: {
        mode: "dark"
    },
    typography: {
        button: {
            textTransform: 'none',
        }
    }
})
