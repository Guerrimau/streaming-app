import React, { useState } from 'react'
import { Box, Button, Chip, Menu, MenuItem, Stack } from '@mui/material'

const FILTERS_TYPE_OPTIONS = [
    "All",
    "Movie",
    "Series",
];

const FILTERS_SORT_OPTIONS = ["Year", "Name", "None"];

export const Filters = ({ activeFilters, setActiveFilters }) => {
    const [anchorSort, setAnchorSort] = useState(null);

    const onTypeFilterClick = (type) => {
        setActiveFilters(prev => ({
            ...prev,
            type
        }))
    }

    const onSortFilterClick = (sort) => {
        setActiveFilters(prev => ({
            ...prev,
            sortBy: sort
        }))
        onCloseSort();
    }

    const onOpenSort = (e) => {
        setAnchorSort(e.currentTarget)
    }

    const onCloseSort = () => {
        setAnchorSort(null);
    }

    const openSort = Boolean(anchorSort);

    return (
        <Stack
            direction="row"
            spacing={1}>
            {FILTERS_TYPE_OPTIONS.map(type => {
                const isSelected = activeFilters.type.includes(type);
                return (
                    <Chip
                        color="info"
                        label={type}
                        variant={isSelected ? "filled" : "outlined"}
                        onClick={() => onTypeFilterClick(type)} />
                )
            })}
            <Button
                variant="text"
                sx={{ ml: "auto !important" }}
                onClick={onOpenSort}>
                <strong>Sort by:</strong>
                <span style={{ marginLeft: "5px" }}>{activeFilters.sortBy}</span>
            </Button>
            <Menu
                anchorEl={anchorSort}
                open={openSort}
                onClose={onCloseSort}>
                <Box width="100px">
                    {FILTERS_SORT_OPTIONS.map(option => (
                        <MenuItem
                            onClick={() => onSortFilterClick(option)}>
                            {option}
                        </MenuItem>
                    ))}
                </Box>
            </Menu>
        </Stack>
    )
}
