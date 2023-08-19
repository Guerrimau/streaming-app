import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

export const ContentCard = ({ data }) => {

    return (
        <Card>
            <CardActionArea>
                <CardMedia component="img" height="200px" src="" />
                <CardContent>
                    <Typography>
                        {data.title}
                    </Typography>
                    <Typography>
                        {`${data.releaseYear} - ${data.programType}`}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
