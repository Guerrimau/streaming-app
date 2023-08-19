import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { useImage } from '../../../../hooks/useImage';


export const ContentCard = ({ data }) => {
    const { image, handleImageError } = useImage(data.images["Poster Art"].url);

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    height="250px"
                    src={image}
                    component="img"
                    onError={handleImageError} />
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
