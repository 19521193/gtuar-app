import Box from '@mui/material/Box/Box'
import Grid from '@mui/material/Grid/Grid'
import Typography from '@mui/material/Typography/Typography'
import Stack from '@mui/material/Stack/Stack'
import Rating from '@mui/material/Rating/Rating'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

import React, { Component } from 'react'
import Image from 'next/image'

export default function Produc() {
    const commonStyles = {
        border: 1,
        borderRadius: '2%',
    };
    return (
        <Box sx={{ bgcolor: "White", m: '  0 auto', pb: '50px', mt: '300px', pt: '10px' }}>
            <Typography sx={{ textAlign: 'center', fontSize: '40px', mt: '80px' }}><b>Popular Destinations</b></Typography>
            <Typography sx={{ textAlign: 'center', color: 'grey.500' }}>World s best tourist destinations </Typography>
            <Grid container width={'80%'} ml={'10%'} mt={'40px'} spacing={2}>
                <Grid item xs={12} md={3}>
                    <Stack alignItems={'center'} >
                        <Image src={'/image/seoultwo.jpeg'} alt='tokyo' width={240} height={200} style={{ borderRadius: '3%' }}></Image>
                    </Stack>
                    <Typography mt={'-40px'} color={'white'} ml={'12%'} fontSize={'22px'}><b>Tokyo</b></Typography>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Stack alignItems={'center'}>
                        <Image src={'/image/Londontwo.jpeg'} alt='tokyo' width={240} height={300} style={{ borderRadius: '3%' }}></Image>
                    </Stack>
                    <Typography mt={'-40px'} color={'white'} ml={'12%'} fontSize={'22px'}><b>Seoul</b></Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Stack alignItems={'center'}>
                        <Image src={'/image/seoultwo.jpeg'} alt='tokyo' width={240} height={300} style={{ borderRadius: '3%' }}></Image>
                    </Stack>
                    <Typography mt={'-40px'} color={'white'} ml={'12%'} fontSize={'22px'}><b>Paris</b></Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Stack alignItems={'center'}>
                        <Image src={'/image/Londontwo.jpeg'} alt='tokyo' width={240} height={300} style={{ borderRadius: '3%' }}></Image>
                    </Stack>
                    <Typography mt={'-40px'} color={'white'} ml={'12%'} fontSize={'22px'}><b>London</b></Typography>
                </Grid>
            </Grid>

            {/* 
             */}
            <Typography sx={{ textAlign: 'center', fontSize: '40px', mt: '80px' }}><b>Best Value Trips</b></Typography>
            <Typography sx={{ textAlign: 'center', color: 'grey.500' }}>Best offers trips from us </Typography>

            <Grid container width={'80%'} ml={'10%'} mt={'40px'} spacing={2}>
                <Grid item xs={12} md={4} >
                    <Stack alignItems={'center'} >
                        <Box sx={{ ...commonStyles, borderColor: '#C1C7C6' }}>
                            <Image src={'/image/French.jpeg'} alt="" width={350} height={400} style={{ borderTopRightRadius: '2%', borderTopLeftRadius: '2%' }}></Image>
                            <Typography sx={{ fontSize: '24px', mb: '8px', mt: '16px', ml: '16px' }}><b>French Autumn </b></Typography>
                            <Typography sx={{ ml: '16px' }}>City Tours, Urban </Typography>
                            <Stack direction={'row'} mt={'16px'} ml={'16px'} mb={'16px'} justifyContent={'space-between'}>
                                <Stack direction={'row'}>
                                    <Rating name="size-small" defaultValue={4} size="small" />
                                    <Typography ml={'8px'}>4 reviews</Typography>
                                </Stack>
                                <Stack direction={'row'}>
                                    <AccessTimeOutlinedIcon />
                                    <Typography mr={'16px'}>5 days</Typography>
                                </Stack>
                            </Stack>
                        </Box>

                    </Stack>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Stack alignItems={'center'}>
                        <Box sx={{ ...commonStyles, borderColor: '#C1C7C6' }}>
                            <Image src={'/image/Grand-switzerland.jpeg'} alt="" width={350} height={400} style={{ borderTopRightRadius: '2%', borderTopLeftRadius: '2%' }}></Image>
                            <Typography sx={{ fontSize: '24px', mb: '8px', mt: '16px', ml: '16px' }}><b>Grand Switzerland </b></Typography>
                            <Typography sx={{ ml: '16px' }}>Shopping, Mountain, Snow & ice </Typography>
                            <Stack direction={'row'} mt={'16px'} ml={'16px'} mb={'16px'} justifyContent={'space-between'}>
                                <Stack direction={'row'}>
                                    <Rating name="size-small" defaultValue={4} size="small" />
                                    <Typography ml={'8px'}>4 reviews</Typography>
                                </Stack>
                                <Stack direction={'row'}>
                                    <AccessTimeOutlinedIcon />
                                    <Typography mr={'16px'}>6 days</Typography>
                                </Stack>
                            </Stack>
                        </Box>

                    </Stack>

                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack alignItems={'center'}>
                        <Box sx={{ ...commonStyles, borderColor: '#C1C7C6' }}>
                            <Image src={'/image/Discover-japan.jpeg'} alt="" width={350} height={400} style={{ borderTopRightRadius: '2%', borderTopLeftRadius: '2%' }}></Image>
                            <Typography sx={{ fontSize: '24px', mb: '8px', mt: '16px', ml: '16px' }}><b>Discover Japan </b></Typography>
                            <Typography sx={{ ml: '16px' }}>City Tours, Iconic </Typography>
                            <Stack direction={'row'} mt={'16px'} ml={'16px'} mb={'16px'} justifyContent={'space-between'}>
                                <Stack direction={'row'}>
                                    <Rating name="size-small" defaultValue={4} size="small" />
                                    <Typography ml={'8px'}>4 reviews</Typography>
                                </Stack>
                                <Stack direction={'row'}>
                                    <AccessTimeOutlinedIcon />
                                    <Typography mr={'16px'}>5 days</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>


            <Typography sx={{ textAlign: 'center', fontSize: '40px', mt: '80px' }}><b>Why Choose Us</b></Typography>
            <Typography sx={{ textAlign: 'center', color: 'grey.500' }}>Here are reasons you should plan trip with us </Typography>

            <Grid container width={'80%'} ml={'10%'} mt={'40px'} spacing={3}>
                <Grid item xs={12} md={4} >
                    <Stack alignItems={'center'} mb={'34px'}>
                        <Image src={'/image/Hotel-map.png'} alt="" width={100} height={100}></Image>
                    </Stack>
                    <Typography sx={{ textAlign: 'center' }}> <b>Handpicked Hotels </b></Typography>
                    <Typography sx={{ textAlign: 'center', mt: '16px' }}>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa </Typography>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Stack alignItems={'center'} mb={'34px'}>
                        <Image src={'/image/world.png'} alt="" width={100} height={100}></Image>
                    </Stack>
                    <Typography sx={{ textAlign: 'center' }}><b> World Class Service </b></Typography>
                    <Typography sx={{ textAlign: 'center', mt: '16px' }}>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack alignItems={'center'} mb={'34px'}>
                        <Image src={'/image/Guarantee.png'} alt="" width={100} height={100}></Image>
                    </Stack>
                    <Typography sx={{ textAlign: 'center' }}><b>Best Price Guarantee</b></Typography>
                    <Typography sx={{ textAlign: 'center', mt: '16px', mb: '24px' }}>Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</Typography>
                </Grid>
            </Grid>
            <Image src={'/image/caycau.png'} alt="" width={3000} height={100}></Image>


            <Typography sx={{ textAlign: 'center', fontSize: '40px', mt: '80px' }}><b>Articles & Tips</b></Typography>
            <Typography sx={{ textAlign: 'center', color: 'grey.500' }}>Explore some of the best tips from around the world </Typography>

            <Grid container width={'80%'} ml={'10%'} mt={'40px'} spacing={3} >
                <Grid item xs={12} md={4}>
                    <Stack border={1} borderColor={'#C1C7C6'} borderRadius={'2%'}>
                        <Image src={'/image/Articles1.jpg'} alt="" width={400} height={400} style={{ borderTopRightRadius: '2%', borderTopLeftRadius: '2%', }}></Image>
                        <Typography sx={{ fontSize: '12px', ml: '30px', mt: '24px' }}>DECEMBER 10, 2016</Typography>
                        <Typography sx={{ fontSize: '20px', mb: '8px', mt: '16px', ml: '30px', width: "85%", }}><b>Memorial Day to Someone Told Me to Travel</b></Typography>
                        <Typography sx={{ ml: '30px', mt: '16px', }}> Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</Typography>
                        <Typography sx={{ ml: '30px', mt: '16px', mb: '16px', }}>Read More</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Stack border={1} borderColor={'#C1C7C6'} borderRadius={'2%'}>
                        <Image src={'/image/articles2.jpeg'} alt="" width={400} height={400} style={{ borderTopRightRadius: '2%', borderTopLeftRadius: '2%' }}></Image>
                        <Typography sx={{ fontSize: '12px', ml: '30px', mt: '24px' }}>DECEMBER 10, 2016</Typography>
                        <Typography sx={{ fontSize: '20px', mb: '8px', mt: '16px', ml: '30px', width: "90%", }}><b> 7 Tips For Nomads On A Budget Trips</b></Typography>
                        <Typography sx={{ ml: '30px', mt: '16px', }}> Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</Typography>
                        <Typography sx={{ ml: '30px', mt: '16px', mb: '16px', }}>Read More</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4} >
                    <Stack border={1} borderColor={'#C1C7C6'} borderRadius={'2%'}>
                        <Image src={'/image/Articles3.jpg'} alt="" width={400} height={400} style={{ borderTopRightRadius: '2%', borderTopLeftRadius: '2%' }}></Image>
                        <Typography sx={{ fontSize: '12px', ml: '30px', mt: '24px' }}>DECEMBER 10, 2016</Typography>
                        <Typography sx={{ fontSize: '20px', mb: '8px', mt: '16px', ml: '30px' }}><b>Taking A Travel Blog Victory Lap </b></Typography>
                        <Typography sx={{ ml: '30px', mt: '16px', }}> Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</Typography>
                        <Typography sx={{ ml: '30px', mt: '16px', mb: '16px', }}>Read More</Typography>

                    </Stack>
                </Grid>
            </Grid>

        </Box>
    )
}