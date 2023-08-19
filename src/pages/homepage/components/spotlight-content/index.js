import React, { useMemo } from 'react'
import { Button, Chip, Divider, Stack, Typography } from '@mui/material'
import { useImage } from '../../../../hooks/useImage'
import { getRandomItemFromArray } from '../../../../utils/get-random-element-from-array';

export const SpotlightContent = ({ content = [] }) => {
    const selectedContent = useMemo(() => getRandomItemFromArray(content), [content]);
    
    const { image, handleImageError } = useImage(selectedContent?.images?.["Poster Art"].url);

    return (
        <Stack
            height="450px"
            component="section"
            alignItems="center"
            justifyContent="center">
            <Stack direction="row" width="60%" spacing={3}>
                <img
                    height="350px"
                    width="250px"
                    src={image}
                    onError={handleImageError}
                    alt="movie-poster" />
                <Stack spacing={2} justifyContent="center">
                    <Typography variant="h4">{selectedContent?.title}</Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Typography variant="subtitle1">{selectedContent?.releaseYear}</Typography>
                        <Divider orientation="vertical" />
                        <Chip label={selectedContent?.programType} sx={{ width: "fit-content" }} />
                    </Stack>
                    <Typography variant="body1">{selectedContent?.description}</Typography>
                    <Stack direction="row" spacing={1}>
                        <Button
                            color="info"
                            variant="outlined"
                            sx={{ flex: "1" }}>Trailer</Button>
                        <Button
                            color="info"
                            variant="contained"
                            sx={{ flex: "1" }}>Watch now</Button>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}
