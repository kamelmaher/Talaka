import { Box } from "@mui/material"
import { NavLink } from "react-router-dom"
type LinksProps = {
    display: string
}
const Links = ({ display }: LinksProps) => {
    return (
        <Box
            className="nav"
            display={{
                xs: display == "block" ? display : "none",
                md: display == "flex" ? display : "none"
            }}
            gap={"10px"}
        >
            <NavLink to={"/"}>الرئيسية</NavLink>
            <NavLink to={"/opinions"}>اراء الطلاب</NavLink>
            <NavLink to={"/course/watch"}>الدورات الخاصة بي</NavLink>
            <NavLink to={"/course/view"}>كل الدورات</NavLink>
            <NavLink to={"/questions"}>الأسئلة الشائعة</NavLink>
            <NavLink to={"/dashboard/user"}>Dashboard</NavLink>
        </Box>
    )
}

export default Links
