import React from 'react'
import { Button, Paper, Stack, Typography } from '@mui/material'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginPage = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Stack
            component="main"
            height="100vh"
            alignItems="center"
            justifyContent="center"
            spacing={1}>
            <Typography
                variant="h4">
                <LiveTvIcon sx={{ fontSize: "32px", mr: "10px" }} />
                Streaming.tv
            </Typography>
            <Paper
                component={Stack}
                width="550px"
                padding={"25px"}
                spacing={1}>
                <Typography variant="h5">Welcome</Typography>
                <Button
                    variant="outlined"
                    onClick={loginWithRedirect}>
                    Login
                </Button>
            </Paper>
        </Stack>

    )
}
