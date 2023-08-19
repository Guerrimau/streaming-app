import { Divider, Typography } from '@mui/material'
import React from 'react'
import { Filters } from '../filters'
import { ContentGrid } from '../content-grid'

export const ContentOverview = () => {
    return (
        <section>
            <Typography>New Titles</Typography>
            <Divider />
            <Filters />
            <ContentGrid content={[]} />
        </section>
    )
}
