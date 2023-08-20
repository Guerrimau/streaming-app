import React from 'react'
import { Avatar, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography } from '@mui/material'
import MuiAppBar from "@mui/material/AppBar"
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useAuth0 } from '@auth0/auth0-react';

export const AppBar = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { user, logout } = useAuth0();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const onLogout = () => {
        const loginUrl = window.location.origin;
        logout({ logoutParams: { returnTo: loginUrl }})
    }

    return (
        <MuiAppBar position="static">
            <Toolbar>
                <Stack
                    width="100%"
                    spacing={1}
                    direction="row"
                    alignItems="center">
                    <LiveTvIcon />
                    <Typography variant="h6">Streaming.tv</Typography>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: "auto !important" }}>
                            <Avatar alt={user.name} src={user.picture} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        <MenuItem onClick={onLogout}>
                            <Typography textAlign="center">Logout</Typography>
                        </MenuItem>
                    </Menu>
                </Stack>
            </Toolbar>
        </MuiAppBar>
    )
}
