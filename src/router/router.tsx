import React from "react";
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';



interface Route {
    path: string;
    content: string;
    icon: React.ReactElement;
}

export const routes: Route[] = [
    {
        path: "/main",
        content: "Products",
        icon: <DashboardCustomizeRoundedIcon/>
    },
    {
        path: "/main/category",
        content: "Category",
        icon: <PersonOutlineIcon/>
    },
    {
        path: "/main/workers",
        content: "Workers",
        icon: <DryCleaningIcon/>
    },
]

export default routes