import { Box } from "@mui/material"
import "./userpage.css"
import Person from "/picture.jpg"
import UserDetails from "./UserDetails"
import UserCourse from "./UserCourse"
import { NavLink } from "react-router-dom"
const UserPage = () => {
    return (
        <Box
            bgcolor={"var(--primary)"}
            className="userpage"
        >
            <Box
                width={{
                    xs: "100%",
                    md: "70%"
                }}
                margin={"auto"}
                display={"flex"}
                flexWrap={"wrap"}
                bgcolor={"white"}
                gap={"40px"}
            >
                
                {/* User Details */}
                <Box
                    padding={"20px"}
                    width={{
                        xs: "100%",
                        md: "calc(100% / 2 - 20px)"
                    }}
                    textAlign={"center"}
                >
                    <Box>
                        <img src={Person} alt="" style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            marginBottom: "10px"
                        }} />
                    </Box>
                    <Box
                        color={"var(--background)"}
                        fontSize={"20px"}
                    >
                        <h4>Kamel Maher</h4>
                        <span style={{ color: "var(--text)" }}>محافظة القاهرة</span>
                    </Box>
                    <NavLink to={"/useredit/1"} className="pointer" style={{ color: "var(--background)", display: "inline-block", marginTop: "15px" }}>تعديل الملف الشخصي</NavLink>
                    <Box
                        mt={"20px"}
                    >
                        <UserDetails name="الاسم الكامل" value="Kamel Maher" />
                        <UserDetails name="الايميل" value="kamelmahersh@gmail.com" />
                        <UserDetails name="العمر" value="21" />
                        <UserDetails name="رقم الهاتف" value="0569691698" />
                        <UserDetails name="تاريخ التسجيل" value="25/3/2024" />
                    </Box>
                </Box>

                {/* User Courses */}
                <Box
                    padding={"20px"}
                    width={{
                        xs: "100%",
                        md: "calc(100% / 2 - 20px)"
                    }}
                >
                    <h4
                        style={{
                            textAlign: "center",
                            fontSize: "20px",
                            marginBottom: "20px"
                        }}
                    >الكورسات الخاصة بك</h4>
                    <Box>

                        <UserCourse name="كورس اللغة الانجليزية" level={4} />
                        <UserCourse name="كورس اللغة الألمانية" level={4} />

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default UserPage