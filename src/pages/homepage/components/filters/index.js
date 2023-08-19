import React, { useState } from 'react'
import { Box, Button, Chip, Menu, MenuItem, Stack, Typography } from '@mui/material'

export const Filters = () => {
    const [anchorSort, setAnchorSort] = useState(null);
    const openSort = Boolean(anchorSort);

    const onSortClick = (e) => {
        setAnchorSort(e.currentTarget)
    }

    const onCloseSort = () => {
        setAnchorSort(null);
    }

    return (
        <Stack
            direction="row"
            spacing={1}>
            <Chip clickable label="All" />
            <Chip clickable label="Movies" />
            <Chip clickable label="Series" />
            <Chip clickable label="Year" />
            <Button
                variant="text"
                sx={{ ml: "auto !important" }}
                onClick={onSortClick}>
                <strong>Sort by:</strong>
                <span style={{ marginLeft: "5px" }}>Year</span>
            </Button>
            <Menu
                anchorEl={anchorSort}
                open={openSort}
                onClose={onCloseSort}>
                <Box width="100px">
                    <MenuItem>Year</MenuItem>
                    <MenuItem>Name</MenuItem>
                    <MenuItem>None</MenuItem>
                </Box>
            </Menu>
        </Stack>
    )
}
