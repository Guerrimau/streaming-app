import React from 'react'
import { Stack, Typography } from '@mui/material'
import LiveTvIcon from '@mui/icons-material/LiveTv';

export const LoadingScreen = () => {
  return (
    <Stack height="100vh" alignItems="center" justifyContent="center">
        <Stack direction="row" spacing={1} alignItems="center">
            <LiveTvIcon sx={{ fontSize: "55px" }} />
            <Typography variant="h2">Streaming.tv</Typography>
        </Stack>
    </Stack>
  )
}
