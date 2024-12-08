import { Box, Button } from "@mui/material"
import { NavLink, Outlet } from "react-router-dom"
import "./dashboard.css"
const DashboardHome = () => {
    return (
        <Box
            padding={"40px 20px"}
        >
            <Box
                display={"flex"}
                gap={"15px"}
                width={"fit-content"}
                margin={"auto"}
            >
                <NavLink to={"user"}>
                    <Button
                        variant="contained"
                    >
                        الطلاب
                    </Button>
                </NavLink>
                <NavLink to={"teacher"}>
                    <Button
                        variant="contained"
                    >
                        المعلمين
                    </Button>
                </NavLink>
                <NavLink to={"course"}>
                    <Button
                        variant="contained"
                    >
                        الكورسات
                    </Button>
                </NavLink>
            </Box>
            <Box
                width={{
                    xs: "100%",
                    md: "70%"
                }}
                margin={"auto"}
                mt={"30px"}
            >
                <Outlet></Outlet>
            </Box>
        </Box >
    )
}

export default DashboardHome
