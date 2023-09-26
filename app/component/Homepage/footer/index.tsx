import Box from '@mui/material/Box/Box'
import Grid from '@mui/material/Grid/Grid'
import Typography from '@mui/material/Typography/Typography'
import Stack from '@mui/material/Stack/Stack'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


import React, { Component } from 'react'
import Image from 'next/image'

export default function Footer() {
    const commonStyles = {
        borderTop: 0.2,
        width: '100%',
    };
    return (
        <Box sx={{ bgcolor: 'black', pt: '50px', }}>
            <Grid container width={'90%'} ml={'5%'} spacing={3}>
                <Grid item xs={12} md={4}>
                    <Typography sx={{ color: 'white', fontSize: '24px' }}>Our Awards</Typography>
                    <Typography sx={{ color: 'white', mt: '20px', fontSize: '14px', mb: '24px', width: '80%' }}>London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</Typography>
                    <Image src={'/image/logo.png'} alt='logo' width={200} height={100} ></Image>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography sx={{ color: 'white', fontSize: '24px' }}>Contact Info</Typography>
                    <Stack direction={'row'} alignItems={'end'}>
                        <PhoneIphoneIcon style={{ color: 'white' }} />
                        <Typography sx={{ color: 'white', mt: '20px', ml: '8px', fontSize: '14px' }}>1-567-124-44227</Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'end'} >
                        <LocationOnIcon style={{ color: 'white', }} />
                        <Typography sx={{ color: 'white', mt: '20px', ml: '8px', fontSize: '14px' }}>184 Main Street East Perl Habour 8007</Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'end'}>
                        <AccessAlarmIcon style={{ color: 'white', }} />
                        <Typography sx={{ color: 'white', mt: '20px', ml: '8px', fontSize: '14px' }}>Mon - Sat 8.00 - 18.00 Sunday CLOSED</Typography>
                    </Stack>

                    <Stack direction={'row'} spacing={1} mt={'20px'}>
                        <Image src={'/icons/fb.png'} alt='fb' width={45} height={100}></Image>
                        <Image src={'/icons/tt.png'} alt='fb' width={45} height={100}></Image>
                        <Image src={'/icons/yt.png'} alt='fb' width={45} height={100}></Image>
                        <Image src={'/icons/Em.png'} alt='fb' width={45} height={100}></Image>
                        <Image src={'/icons/inta.png'} alt='fb' width={45} height={100}></Image>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4} mb={'40px'}>
                    <Typography sx={{ color: 'white', fontSize: '24px', mb: '20px' }}>Recent Trips</Typography>
                    <Grid container spacing={1} mb={'20px'}>
                        <Grid item md={4}>
                            <Image src={'/image/recent1.jpg'} alt='recent' width={120} height={30} style={{ borderRadius: "2%" }}></Image>
                        </Grid>
                        <Grid item md={4}>
                            <Image src={'/image/recent2.jpg'} alt='recent' width={120} height={30} style={{ borderRadius: "2%" }}></Image>
                        </Grid>
                        <Grid item md={4}>
                            <Image src={'/image/recent3.jpg'} alt='recent' width={120} height={30} style={{ borderRadius: "2%" }}></Image>
                        </Grid>
                        <Grid item md={4}>
                            <Image src={'/image/recent4.jpg'} alt='recent' width={120} height={30} style={{ borderRadius: "2%" }}></Image>
                        </Grid>
                        <Grid item md={4}>
                            <Image src={'/image/recent5.jpg'} alt='recent' width={120} height={30} style={{ borderRadius: "2%" }}></Image>
                        </Grid>
                        <Grid item md={4}>
                            <Image src={'/image/recent6.jpg'} alt='recent' width={120} height={30} style={{ borderRadius: "2%" }}></Image>
                        </Grid>
                    </Grid>
                </Grid>

                <Box sx={{ ...commonStyles, borderColor: '#444a49' }} >
                    <Stack direction={'row'} width={"100%"} justifyContent={'space-between'} mt={'30px'} mb={'30px'}>
                        <Typography sx={{ color: 'white', fontSize: "12px", ml: '2%' }}>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods </Typography>
                        <Stack direction={'row'} mr={'2%'} >
                            <Typography sx={{ color: 'white', fontSize: "12px", ml: '20px' }}> Home</Typography>
                            <Typography sx={{ color: 'white', fontSize: "12px", ml: '20px' }}> Tours</Typography>
                            <Typography sx={{ color: 'white', fontSize: "12px", ml: '20px' }}> Blog  </Typography>
                            <Typography sx={{ color: 'white', fontSize: "12px", ml: '20px' }}>Purchase Theme</Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Grid>

        </Box>
    )
}