import React from "react";
import { AppBar, Button, Card, CardActionArea, CardContent, CardMedia, Chip, Divider, Grid, Stack, Typography } from "@mui/material";

export const HomePage = () => {
  return (
    <main>
        <AppBar>
            <Typography>Movies</Typography>
        </AppBar>
        <section>
            <img src="" alt="movie-poster" />
            <Typography>Title</Typography> 
            <Typography>Description</Typography> 
            <Button>Watch</Button> 
            <Button>Save for later</Button> 
        </section>
        <section>
            <Typography>New Titles</Typography>
            <Divider />
            <Stack direction="row">
                <Chip label="All" />
                <Chip label="Movies" />
                <Chip label="Series" />
                <Chip label="Year" />
            </Stack>
            <Grid container spacing={4}>
                <Grid item xs={2}>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" height="200px" />
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
                </Grid>
            </Grid>
        </section>
    </main>
  )
}
