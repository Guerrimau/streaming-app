import React, { useMemo, useState } from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { Filters } from '../filters'
import { ContentGrid } from '../content-grid'
import { applyFiltersToContent } from '../../utilities/apply-filters-to-content'

export const ContentOverview = ({ content }) => {
    const [activeFilters, setActiveFilters] = useState({
        sortBy: "None",
        type: "All"
    })

    const filteredContent = useMemo(() => applyFiltersToContent(content, activeFilters), [content, activeFilters]); 

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
            <Box><ContentGrid content={filteredContent} /></Box>
        </Stack>
    )
}
