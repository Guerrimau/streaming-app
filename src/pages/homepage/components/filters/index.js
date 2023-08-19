import React from 'react'
import { Chip, Stack } from '@mui/material'

export const Filters = () => {
    return (
        <Stack direction="row">
            <Chip label="All" />
            <Chip label="Movies" />
            <Chip label="Series" />
            <Chip label="Year" />
        </Stack>
    )
}
