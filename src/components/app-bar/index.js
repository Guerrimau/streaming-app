import React from 'react'
import { IconButton, Stack, Toolbar, Typography } from '@mui/material'
import MuiAppBar from "@mui/material/AppBar"
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LogoutIcon from '@mui/icons-material/Logout';

export const AppBar = () => {
    return (
        <MuiAppBar position="static">
            <Toolbar>
                <Stack
                    width="100%"
                    spacing={1}
                    direction="row"
                    alignItems="center">
                    <LiveTvIcon />
                    <Typography variant="h6">Streaming.tv</Typography>
                    <IconButton sx={{ ml: "auto !important" }}>
                        <LogoutIcon />
                    </IconButton>
                </Stack>
            </Toolbar>
        </MuiAppBar>
    )
}
