import React, { useEffect } from 'react'
import { Button, Chip, Divider, Stack, Typography } from '@mui/material'

export const SpotlightContent = ({ content = {} }) => {

    const getRandomItemFromArray = (array) => {
        if (array.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomElement = array[randomIndex];
        return randomElement;
    }

    const selectedContent = getRandomItemFromArray(content);

    return (
        <Stack
            height="450px"
            component="section"
            alignItems="center"
            justifyContent="center">
            <Stack direction="row" width="60%" spacing={3}>
                <img
                    height="350px"
                    src={selectedContent?.images["Poster Art"].url}
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
