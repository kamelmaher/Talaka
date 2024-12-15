import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../Footer/Footer"
import { Box } from "@mui/material"
import axios from "axios"
import { useEffect } from "react"

const Layout = () => {
    useEffect(() => {
        axios.get("https://coursesapi23.runasp.net/api/Courses").then(({ data }) => console.log(data))
    }, [])
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            minHeight={"100vh"}
            bgcolor={"var(--primary)"}
        >
            <div className="main-layout" >
                <Header />
            </div>
            <Outlet />
            <Footer />
        </Box>
    )
}

export default Layout
