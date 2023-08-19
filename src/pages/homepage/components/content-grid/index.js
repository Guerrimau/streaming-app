import React from 'react'
import { Grid } from '@mui/material'
import { ContentCard } from '../content-card'

export const ContentGrid = ({ content = [] }) => {
    return (
        <Grid container spacing={4}>
            {content.map(item => (
                <Grid item xs={2}>
                    <ContentCard data={item} />
                </Grid>
            ))}
        </Grid>
    )
}
