import { Box, Button } from "@mui/material"
import { Outlet } from "react-router-dom"
import "../../components/Auth/auth.css"
const AuthContainer = () => {
    return (
        <Box
            className="auth"
            padding={{
                xs: "30px 0",
                md: "60px 0"
            }}
            bgcolor={"var(--primary)"}
        >
            <Box
                width={{
                    xs: "100%",
                    md: "80%"
                }}
                bgcolor={"white"}
                padding={"20px"}
                margin={"auto"}
                textAlign={"center"}
            >
                <Box>
                    <h3
                        style={{
                            color: "var(--background)",
                            fontSize: "35px",
                            marginBottom: "10px"
                        }}
                    >أهلا بك في موقع الطلاقة </h3>
                    <h4
                        style={{
                            fontSize: "20px",
                            color: "var(--text)"
                        }}
                    >الموقع الأول لاتقان اللغات</h4>
                </Box>
                <Box
                    mt={"20px"}
                >
                    <p>تسجيل الدخول عبر</p>
                    <Box
                        mt={"10px"}
                        display={"flex"}
                        flexDirection={{
                            xs: "column",
                            md: "row"
                        }}
                        gap={"20px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Button variant="contained" style={{ width: "200px", background: "var(--secondary)" }}>Google</Button>
                        <Button variant="contained" style={{ width: "200px" }}>Facebook</Button>
                    </Box>
                </Box>
                <hr style={{ width: "60%", margin: "auto", marginTop: "20px" }} />
                <Box
                    mt={"30px"}
                >
                    <Outlet></Outlet>
                </Box>
            </Box>
        </Box>
    )
}

export default AuthContainer
