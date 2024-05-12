import React from "react";
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import CategoryIcon from '@mui/icons-material/Category';
import GroupIcon from '@mui/icons-material/Group';



interface Route {
    path: string;
    content: string;
    icon: React.ReactElement;
}

export const routes: Route[] = [
    {
        path: "/main",
        content: "Category",
        icon: <CategoryIcon/>
    },
    {
        path: "/main/products",
        content: "Products",
        icon: <DashboardCustomizeRoundedIcon/>
    },
    {
        path: "/main/workers",
        content: "Workers",
        icon: <GroupIcon/>
    },
]

export default routes