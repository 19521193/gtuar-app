
"use client";
import Box from '@mui/material/Box/Box'
import Grid from '@mui/material/Grid/Grid'
import Typography from '@mui/material/Typography/Typography'
import Stack from '@mui/material/Stack/Stack'
import Button from '@mui/material/Button/Button'
import DehazeSharpIcon from '@mui/icons-material/DehazeSharp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import MenuItem from '@mui/material/MenuItem';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import React, { Component } from 'react'
import Image from 'next/image'
import { useState } from "react";


export default function Header() {
    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }

    return (
        <>
            <Box zIndex={-1} position={'fixed'} sx={{ width: '100%', height: '100%' }} >
                <Image src={'/image/anh-hoang-hon.jpg'} alt='' width={10000} height={1000} objectFit='cover' ></Image>
            </Box>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} pt={'30px'} width={'80%'} ml={'10%'}>
                <Typography sx={{ fontSize: '26px', color: 'white' }}>Gtour</Typography>
                <Stack direction={'row'} justifyContent={'space-evenly'}>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <Button {...bindTrigger(popupState)}>
                                    <Typography sx={{ fontSize: '12px', color: 'white' }}>Home</Typography>
                                    <KeyboardArrowDownIcon sx={{ color: 'white' }} />
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>

                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <Button {...bindTrigger(popupState)}>
                                    <Typography sx={{ fontSize: '14px', color: 'white' }}>Tours</Typography>
                                    <KeyboardArrowDownIcon sx={{ color: 'white' }} />
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>

                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <Button {...bindTrigger(popupState)}>
                                    <Typography sx={{ fontSize: '12px', color: 'white' }}>Booking</Typography>
                                    <KeyboardArrowDownIcon sx={{ color: 'white' }} />
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>

                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <Button {...bindTrigger(popupState)}>
                                    <Typography sx={{ fontSize: '12px', color: 'white' }}>Destinations</Typography>
                                    <KeyboardArrowDownIcon sx={{ color: 'white' }} />
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>

                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <Button {...bindTrigger(popupState)}>
                                    <Typography sx={{ fontSize: '12px', color: 'white' }}>Pages</Typography>
                                    <KeyboardArrowDownIcon sx={{ color: 'white' }} />
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>

                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <Button {...bindTrigger(popupState)}>
                                    <Typography sx={{ fontSize: '12px', color: 'white' }}>Blog</Typography>
                                    <KeyboardArrowDownIcon sx={{ color: 'white' }} />
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>

                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <Button {...bindTrigger(popupState)}>
                                    <Typography sx={{ fontSize: '12px', color: 'white' }}>Shortcodes</Typography>
                                    <KeyboardArrowDownIcon sx={{ color: 'white' }} />
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>

                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <Button {...bindTrigger(popupState)}>
                                    <Typography sx={{ fontSize: '12px', color: 'white' }}>Shop</Typography>
                                    <KeyboardArrowDownIcon sx={{ color: 'white' }} />
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                                    <MenuItem onClick={popupState.close}>Logout</MenuItem>
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>
                    <Stack direction={'row'} alignItems={'center'} >
                        <DehazeSharpIcon sx={{ color: 'white', textAlign: 'end' }} />
                        <AddShoppingCartIcon sx={{ color: 'white', textAlign: 'end' }} />
                    </Stack>
                </Stack>
            </Stack>
            <Typography sx={{ textAlign: 'center', fontSize: '40px', mt: '200px', color: 'white' }}><b>Where do you want to go?</b></Typography>
            <Typography sx={{ textAlign: 'center', color: 'white', mb: '20px' }}>Trips, experiences, and places. All in one service. </Typography>

            <Box width={'80%'} ml={'10%'}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} >
                        <Stack alignItems={'center'} bgcolor={'white'} borderRadius={'4%'} >
                            <TextField
                                id="standard-name"
                                placeholder="Destination, city"
                                size='small'
                                fullWidth
                                InputProps={{ endAdornment: <SearchIcon /> }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={3} >
                        <Stack alignItems={'center'} bgcolor={'white'} borderRadius={'4%'}>
                            <PopupState variant="popover" popupId="demo-popup-menu">
                                {(popupState) => (
                                    <React.Fragment>
                                        <TextField
                                            id="standard-name"
                                            placeholder="Any Month"
                                            size='small'
                                            fullWidth
                                            InputProps={{ ...bindMenu(popupState), endAdornment: <CalendarTodayIcon /> }}
                                        />
                                        <Menu {...bindMenu(popupState)}>
                                            <MenuItem onClick={popupState.close}>Any Month</MenuItem>
                                            <MenuItem onClick={popupState.close}>January</MenuItem>
                                            <MenuItem onClick={popupState.close}>February</MenuItem>
                                            <MenuItem onClick={popupState.close}>March</MenuItem>
                                            <MenuItem onClick={popupState.close}>April</MenuItem>
                                            <MenuItem onClick={popupState.close}>May</MenuItem>
                                            <MenuItem onClick={popupState.close}>June</MenuItem>
                                            <MenuItem onClick={popupState.close}>July</MenuItem>
                                            <MenuItem onClick={popupState.close}>August</MenuItem>
                                            <MenuItem onClick={popupState.close}>September</MenuItem>
                                            <MenuItem onClick={popupState.close}>October</MenuItem>
                                            <MenuItem onClick={popupState.close}>November</MenuItem>
                                            <MenuItem onClick={popupState.close}>December</MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                )}
                            </PopupState>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={3} >
                        <Stack alignItems={'center'} bgcolor={'white'} borderRadius={'4%'}>
                            <PopupState variant="popover" popupId="demo-popup-menu">
                                {(popupState) => (
                                    <React.Fragment>
                                        <TextField
                                            id="standard-name"
                                            placeholder="Sort By Date"
                                            size='small'
                                            fullWidth
                                            InputProps={{ endAdornment: <ImportExportIcon /> }}
                                        />
                                        <Menu {...bindMenu(popupState)}>
                                            <MenuItem onClick={popupState.close}>Sort By Date</MenuItem>
                                            <MenuItem onClick={popupState.close}>Price Low to High</MenuItem>
                                            <MenuItem onClick={popupState.close}>Price High to Low</MenuItem>
                                            <MenuItem onClick={popupState.close}>Sort By Name</MenuItem>
                                            <MenuItem onClick={popupState.close}>Sort By Popularity</MenuItem>
                                            <MenuItem onClick={popupState.close}>Sort By Review Score</MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                )}
                            </PopupState>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box bgcolor={'red'} borderRadius={'5%'}>
                            <Button variant="contained" sx={{ bgcolor: 'red', width: '100%', }}>Search</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box width={'80%'} mt={'20px'} ml={'10%'} style={{ display: showMe ? "block" : "none" }}>
                <Grid container columnSpacing={3}>
                    <Grid item xs={12} md={3} >
                        <Stack alignItems={'center'} bgcolor={'white'} borderRadius={'4%'} >
                            <TextField
                                id="standard-name"
                                placeholder="All Categorie"
                                size='small'
                                fullWidth
                                InputProps={{ endAdornment: <KeyboardArrowDownIcon /> }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={3} >
                        <Stack alignItems={'center'} bgcolor={'white'} borderRadius={'4%'}>
                            <PopupState variant="popover" popupId="demo-popup-menu">
                                {(popupState) => (
                                    <React.Fragment>
                                        <TextField
                                            id="standard-name"
                                            placeholder="Any Destinat"
                                            size='small'
                                            fullWidth
                                            InputProps={{ ...bindMenu(popupState), endAdornment: <KeyboardArrowDownIcon /> }}
                                        />
                                        <Menu {...bindMenu(popupState)}>
                                            <MenuItem onClick={popupState.close}>Any Month</MenuItem>
                                            <MenuItem onClick={popupState.close}>January</MenuItem>
                                            <MenuItem onClick={popupState.close}>February</MenuItem>
                                            <MenuItem onClick={popupState.close}>March</MenuItem>
                                            <MenuItem onClick={popupState.close}>April</MenuItem>
                                            <MenuItem onClick={popupState.close}>May</MenuItem>
                                            <MenuItem onClick={popupState.close}>June</MenuItem>
                                            <MenuItem onClick={popupState.close}>July</MenuItem>
                                            <MenuItem onClick={popupState.close}>August</MenuItem>
                                            <MenuItem onClick={popupState.close}>September</MenuItem>
                                            <MenuItem onClick={popupState.close}>October</MenuItem>
                                            <MenuItem onClick={popupState.close}>November</MenuItem>
                                            <MenuItem onClick={popupState.close}>December</MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                )}
                            </PopupState>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={3} >
                        <Stack alignItems={'center'} bgcolor={'white'} borderRadius={'4%'}>
                            <PopupState variant="popover" popupId="demo-popup-menu">
                                {(popupState) => (
                                    <React.Fragment>
                                        <TextField
                                            id="standard-name"
                                            placeholder="Max.budget ex. 500"
                                            size='small'
                                            fullWidth
                                            InputProps={{ endAdornment: <AttachMoneyIcon /> }}
                                        />
                                        <Menu {...bindMenu(popupState)}>
                                            <MenuItem onClick={popupState.close}>Sort By Date</MenuItem>
                                            <MenuItem onClick={popupState.close}>Price Low to High</MenuItem>
                                            <MenuItem onClick={popupState.close}>Price High to Low</MenuItem>
                                            <MenuItem onClick={popupState.close}>Sort By Name</MenuItem>
                                            <MenuItem onClick={popupState.close}>Sort By Popularity</MenuItem>
                                            <MenuItem onClick={popupState.close}>Sort By Review Score</MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                )}
                            </PopupState>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={3}>

                    </Grid>
                </Grid>
            </Box>

            <Stack direction={'row'} ml={'10%'} alignItems={'end'} >
                <KeyboardArrowDownIcon sx={{ color: 'white' }} style={{ display: showMe ? "none" : "block" }} />
                <KeyboardArrowUpIcon sx={{ color: 'white' }} style={{ display: showMe ? "block" : "none" }}></KeyboardArrowUpIcon>
                <Typography onClick={toggle} sx={{ color: 'white' }} mt={'20px'}> Advanced Search</Typography>
            </Stack>

        </>
    )
}