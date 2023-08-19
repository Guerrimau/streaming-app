import React from 'react'
import { Grid } from '@mui/material'
import { ContentCard } from '../content-card'

export const ContentGrid = ({ content = [] }) => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={2}>
                {content.map(item => (
                    <ContentCard data={item} />
                ))}
            </Grid>
        </Grid>
    )
}
