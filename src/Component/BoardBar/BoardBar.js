import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
    PeopleAlt, History, Event, SportsEsports, Groups, KeyboardArrowDown,
    KeyboardArrowUp, MedicalInformation, Newspaper, Storefront, Message, 
    TurnedIn, Receipt, SkipNext, SkipPrevious, PlayArrow, Add, Videocam,
    Image, EmojiEmotions
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { Avatar, Fab, Collapse, Grid, Paper, Card, CardMedia, IconButton, CardContent, OutlinedInput, TextField, Button } from '@mui/material';
import avatarUser from '../../assets/images/257456092_1902492796605190_3704698042727908370_n.jpg'
import Group_1 from '../../assets/images/lockscreen-bg.jpg'
import Group_2 from '../../assets/images/login-bg.jpg'
import Group_3 from '../../assets/images/Muốn ít đi Để hạnh phúc nhiều hơn.png'
import Group_4 from '../../assets/images/Nothing is impossible Nothing is forever (2).png'
import Group_5 from '../../assets/images/register-bg.jpg'
import { useTheme } from '@mui/material/styles';

const BoardBar = () => {
    const [showMoreBoardBarUp, setShowMoreBoardBarUp] = useState(false)
    const [showMoreBoardBarDown, setShowMoreBoardBarDown] = useState(false)
    const theme = useTheme();
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const fabGreenStyle = {
        color: 'common.white',
        bgcolor: '#bb8cc1',
        '&:hover': {
            bgcolor: "#9a68d1",
        },
    };
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(0.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.3)',
                opacity: 0,
            },
        },
    }));
    const ShowUp = () => {
        setShowMoreBoardBarUp(!showMoreBoardBarUp)
    }
    const ShowDown = () => {
        setShowMoreBoardBarDown(!showMoreBoardBarDown)
    }
    return (
        <>
            <Drawer
                variant="permanent"
                sx={{
                    width: 350,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 350, boxSizing: 'border-box', borderRight: "none" },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List sx={{ paddingBottom: "0px !important" }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon >
                                    <Avatar alt="Đồng Đức Lân" src={avatarUser} />
                                </ListItemIcon>
                                <ListItemText primary={"Đồng Đức Lân"} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton >
                                <ListItemIcon >
                                    <PeopleAlt sx={{ paddingLeft: "10px", width: "auto", color: "#8524ef" }} />
                                </ListItemIcon>
                                <ListItemText primary={"Bạn Bè"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <History sx={{ paddingLeft: "10px", width: "auto", color: "#5553fd" }} />
                                </ListItemIcon>
                                <ListItemText primary={"Kỷ niệm"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Groups sx={{ paddingLeft: "10px", width: "auto", color: "blue" }} />
                                </ListItemIcon>
                                <ListItemText primary={"Nhóm"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Event sx={{ paddingLeft: "10px", width: "auto", color: "#c51a1a" }} />
                                </ListItemIcon>
                                <ListItemText primary={"Sự kiện"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SportsEsports sx={{ paddingLeft: "10px", width: "auto", color: "blue" }} />
                                </ListItemIcon>
                                <ListItemText primary={"Chơi game"} />
                            </ListItemButton>
                        </ListItem>
                        {showMoreBoardBarUp === true ? "" : <ListItem disablePadding>
                            <ListItemButton onClick={ShowUp}>
                                <ListItemIcon sx={{ paddingLeft: "1%", paddingRight:"3%" }}>
                                    <Fab sx={{ ...fabGreenStyle }} aria-label={"More"} color="inherit">
                                        <KeyboardArrowDown />
                                    </Fab>
                                </ListItemIcon>
                                Xem thêm
                            </ListItemButton>
                        </ListItem>
                        }
                    </List>
                    <Collapse in={showMoreBoardBarUp}>
                        <List sx={{ paddingTop: "0px !important" }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedIn sx={{ paddingLeft: "10px", width: "auto", color: "purple" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={"Đã lưu"} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Receipt sx={{ paddingLeft: "10px", width: "auto", color: "#5dedcc" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={"Gần đây nhất"} />
                                </ListItemButton>
                            </ListItem><ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Message sx={{ paddingLeft: "10px", width: "auto", color: "#66ad5d" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={"Tin nhắn"} />
                                </ListItemButton>
                            </ListItem><ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Storefront sx={{ paddingLeft: "10px", width: "auto", color: "#30add3" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={"Marketplace"} />
                                </ListItemButton>
                            </ListItem><ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Newspaper sx={{ paddingLeft: "10px", width: "auto", color: "#9824ef" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={"Hoạt động quảng cáo gần đây"} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <MedicalInformation sx={{ paddingLeft: "10px", width: "auto", color: "#cb1759" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={"Sức khỏe cảm xúc"} />
                                </ListItemButton>
                            </ListItem>
                            {showMoreBoardBarUp === false ? "" : <ListItem disablePadding>
                                <ListItemButton onClick={ShowUp}>
                                    <ListItemIcon sx={{ paddingLeft: "1%", paddingRight:"3%" }}>
                                        <Fab sx={{ ...fabGreenStyle }} aria-label={"More"} color="inherit">
                                            <KeyboardArrowUp />
                                        </Fab>
                                    </ListItemIcon>
                                    Ẩn bớt
                                </ListItemButton>
                            </ListItem>
                            }
                        </List>
                    </Collapse>
                    <Divider />
                    <ListItemButton sx={{ paddingBottom: "0px !important" }}>
                        <ListItemText primary="Lối tắt của bạn" />
                    </ListItemButton>
                    <List sx={{ paddingBottom: "0px !important" }}>
                        <ListItem disablePadding>
                            <ListItemButton >
                                <ListItemIcon >
                                    <Avatar variant="rounded" alt="Đồng Đức Lân" src={Group_1} />
                                </ListItemIcon>
                                <ListItemText primary={"Group 1"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Avatar variant="rounded" alt="Đồng Đức Lân" src={Group_2} />
                                </ListItemIcon>
                                <ListItemText primary={"Group 2"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Avatar variant="rounded" alt="Đồng Đức Lân" src={Group_3} />
                                </ListItemIcon>
                                <ListItemText primary={"Group 3"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Avatar variant="rounded" alt="Đồng Đức Lân" src={Group_4} />
                                </ListItemIcon>
                                <ListItemText primary={"Group 4"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Avatar variant="rounded" alt="Đồng Đức Lân" src={Group_5} />
                                </ListItemIcon>
                                <ListItemText primary={"Group 5"} />
                            </ListItemButton>
                        </ListItem>
                        {showMoreBoardBarDown === true ? "" : <ListItem disablePadding>
                            <ListItemButton onClick={ShowDown}>
                                <ListItemIcon sx={{ paddingLeft: "1%", paddingRight:"3%" }}>
                                    <Fab sx={{ ...fabGreenStyle }} aria-label={"More"} color="inherit">
                                        <KeyboardArrowDown />
                                    </Fab>
                                </ListItemIcon>
                                Xem thêm
                            </ListItemButton>
                        </ListItem>
                        }
                    </List>
                    <Collapse in={showMoreBoardBarDown}>
                        <List sx={{ paddingTop: "0px !important" }}>
                            <ListItem disablePadding>
                                <ListItemButton >
                                    <ListItemIcon >
                                        <Avatar variant="rounded" alt="Đồng Đức Lân" src={Group_2} />
                                    </ListItemIcon>
                                    <ListItemText primary={"Group 6"} />
                                </ListItemButton>
                            </ListItem>
                            {showMoreBoardBarDown === false ? "" : <ListItem disablePadding>
                                <ListItemButton onClick={ShowDown}>
                                    <ListItemIcon sx={{ paddingLeft: "1%", paddingRight:"3%" }}>
                                        <Fab sx={{ ...fabGreenStyle }} aria-label={"More"} color="inherit">
                                            <KeyboardArrowUp />
                                        </Fab>
                                    </ListItemIcon>
                                    Ẩn  bớt
                                </ListItemButton>
                            </ListItem>
                            }
                        </List>
                    </Collapse>

                </Box>

            </Drawer>

            <Box sx={{ flexGrow: 1 }}>
                <Toolbar />
                <Grid container spacing={1} px={28}>
                    <Grid item xs md>
                        <Card sx={{ borderRadius: "10px" }}>
                            <CardMedia
                                component="img"
                                height="225"
                                image={Group_1}
                                alt="green iguana"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs md>
                        <Card sx={{ borderRadius: "10px" }}>
                            <CardMedia
                                component="img"
                                height="225"
                                image={Group_2}
                                alt="green iguana"
                            />

                        </Card>
                    </Grid>
                    <Grid item xs md>
                        <Card sx={{ borderRadius: "10px" }}>
                            <CardMedia
                                component="img"
                                height="225"
                                image={Group_3}
                                alt="green iguana"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs md>
                        <Card sx={{ borderRadius: "10px" }}>
                            <CardMedia
                                component="img"
                                height="225"
                                image={Group_5}
                                alt="green iguana"
                            />
                        </Card>
                    </Grid>
                    <Grid item xs md>
                        <Card sx={{ borderRadius: "10px" }}>
                            <CardMedia
                                component="img"
                                height="225"
                                image={Group_2}
                                alt="green iguana"
                            />
                        </Card>
                    </Grid></Grid>
            </Box>

            <Box container spacing={1} px={28} pt={3}>
                <Item elevation={2}  >
                    <Grid container px={1} py={1} spacing={1} sx={{ bgcolor: "inherit" }}>
                        <Grid xs={1} md={1} >
                            <Box pl='4px' pt='2px' >
                                <Avatar alt="Đồng Đức Lân" src={avatarUser} />
                            </Box>
                        </Grid>
                        <Grid pt="13px" xs={11} md={11} sx={{ textAlign: "start !important", bgcolor: theme.palette.mode === 'light' ? "#e9e9e9" : "#383838", borderRadius: "50px", height: "45px", '&:hover': { backgroundColor: "#cdcdcd" } }} >
                            <Box pl={2}>
                                {/* <TextField  sx={{borderRadius:"50px", backgroundColor:"#cdcbcb",color:"gray"}}  fullWidth placeholder='Lân, Bạn đang nghĩ gì thế?' /> */}
                                <span style={{ textAlign: "none" }}>Lân, Bạn đang nghĩ gì thế?</span>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container px={1} py={1} >
                        <Grid xs md>
                            <Button variant="contained" fullWidth sx={{border:"none", bgcolor:theme.palette.mode === 'light' ?"white":"#383838", color:theme.palette.mode === 'light' ?'black':"#e7e3e3", textTransform:"none", '-webkit-tap-highlight-color':"unset", "&:hover" : {bgcolor:theme.palette.mode === 'light' ? "#e3e3e3" :"#585858"}}}><Videocam sx={{paddingRight:"5px"}}/><span> Video trực tiếp</span></Button>
                        </Grid>
                        <Grid xs md>
                            <Button variant="contained" fullWidth sx={{border:"none", bgcolor:theme.palette.mode === 'light' ?"white":"#383838", color:theme.palette.mode === 'light' ?'black':"#e7e3e3", textTransform:"none", '-webkit-tap-highlight-color':"unset", "&:hover" : {bgcolor:theme.palette.mode === 'light' ? "#e3e3e3" :"#585858"}}}><Image sx={{paddingRight:"5px"}}/><span> Ảnh/video</span></Button>
                        </Grid>
                        <Grid xs md>
                            <Button variant="contained" fullWidth sx={{border:"none", bgcolor:theme.palette.mode === 'light' ?"white":"#383838", color:theme.palette.mode === 'light' ?'black':"#e7e3e3", textTransform:"none", '-webkit-tap-highlight-color':"unset", "&:hover" : {bgcolor:theme.palette.mode === 'light' ? "#e3e3e3" :"#585858"}}}><EmojiEmotions sx={{paddingRight:"5px"}}/><span> Cảm xúc, hoạt động</span></Button>
                        </Grid>
                    </Grid>
                </Item>
            </Box>

            <Drawer
                sx={{
                    width: 350,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 350,
                        boxSizing: 'border-box', borderLeft: "none"
                    },

                }}
                variant="permanent"
                anchor="right"
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <ListItemButton sx={{ paddingBottom: "0px !important" }}>
                        <ListItemText primary="Người liên hệ" />
                    </ListItemButton>
                    <List sx={{ paddingBottom: "0px !important" }}>
                        <ListItem disablePadding>
                            <ListItemButton >
                                <ListItemIcon >
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"
                                    >
                                        <Avatar alt="Remy Sharp" src={Group_1} />
                                    </StyledBadge>
                                </ListItemIcon>
                                <ListItemText primary={"Người dùng 1"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"
                                    >
                                        <Avatar alt="Remy Sharp" src={Group_2} />
                                    </StyledBadge>
                                </ListItemIcon>
                                <ListItemText primary={"Người dùng 2"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"
                                    >
                                        <Avatar alt="Remy Sharp" src={Group_3} />
                                    </StyledBadge>
                                </ListItemIcon>
                                <ListItemText primary={"Người dùng 3"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"
                                    >
                                        <Avatar alt="Remy Sharp" src={Group_4} />
                                    </StyledBadge>
                                </ListItemIcon>
                                <ListItemText primary={"Người dùng 4"} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"
                                    >
                                        <Avatar alt="Remy Sharp" src={Group_5} />
                                    </StyledBadge>
                                </ListItemIcon>
                                <ListItemText primary={"Người dùng 5"} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>

            </Drawer>

        </>
    );
}

export default BoardBar;
