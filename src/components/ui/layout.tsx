import { Box, Toolbar, Drawer } from "@mui/material";
import  List from "@mui/material/List"; 
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import routes from "../../router/router";
import { NavLink, Outlet, useLocation  } from "react-router-dom";
import React from "react";
import Logo from "../../assets/icons/Logos.jpg";
import Header from './header'


const drawerWidth = 240;

interface Props {
    window?: () => Window;
}

export default function Layout(props:Props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);


        // const handleDrawerClose = () => {
        //     setIsClosing(true);
        //     setMobileOpen(!mobileOpen);
        // };
    const handleDrawerTransitionClose = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const {pathname} = useLocation()
    console.log(pathname)

    const drawer = (
        <div>
            <Divider/>
            <List>
                {routes.map((item,index) => (
                    <NavLink to={item.path} key={index} className={item.path === pathname ? "block bg-blue text-white" : ""}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <span className={item.path === pathname ? "text-white" : "text-gray-500"}>{item.icon}</span>
                                </ListItemIcon>
                                <ListItemText primary={item?.content}/>
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
    )

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <Header handleDrawerToggle={handleDrawerToggle}/>
            <Box    
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionClose}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <div className="h-[100px] w-full flex items-center justify-center" >
                        <img src={Logo} alt="LOGO" className="w-32 h-32 object-none"/>
                    </div>
                        {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    <div 
                        className="h-[100px] w-full flex items-center justify-center" 
                        // onClick={handleDrawerToggle}
                    >
                        <img src={Logo} alt="Logo" className="w-[220px] h-32 " />
                    </div>
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet/>
            </Box>
        </Box>
    )
}