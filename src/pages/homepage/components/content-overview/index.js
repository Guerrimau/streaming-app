import { Box, Divider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Filters } from '../filters'
import { ContentGrid } from '../content-grid'

export const ContentOverview = ({ content }) => {
    const [activeFilters, setActiveFilters] = useState({
        sortBy: "None",
        type: "All"
    })

    return (
        <Stack
            component="section"
            spacing={2}
            sx={{ p: "50px 150px" }}>
            <Typography variant="h4">New Titles</Typography>
            <Divider />
            <Filters
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters} />
            <Box><ContentGrid content={content} /></Box>
        </Stack>
    )
}
