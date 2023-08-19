import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

export const ContentCard = ({ data }) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia component="img" height="200px" src="" />
                <CardContent>
                    <Typography>
                        Title
                    </Typography>
                    <Typography>
                        2034 - Action
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
