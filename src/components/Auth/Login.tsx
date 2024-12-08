import { Box, Button } from "@mui/material"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { User } from "../../types/User"
import { getError } from "../../Logic.tsx/Auth"

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({ email: "", password: "" })
    const [isVAlidUser, setIsValidUser] = useState(true)
    const users: User[] = [
        {
            email: "ahmed@gmail.com",
            fname: "Ahmed",
            id: 0,
            lname: "Ahmed",
            password: "ahmed",
            progress: [],
            courses: []
        },
        {
            email: "sami@gmail.com",
            fname: "sami",
            id: 0,
            lname: "sami",
            password: "sami",
            progress: [],
            courses: []
        },
        {
            email: "kamel@gmail.com",
            fname: "kamel",
            id: 0,
            lname: "kamel",
            password: "kamel",
            progress: [],
            courses: []
        },
    ]

    const Login = () => {
        let found = false
        users.map(e => {
            if (e.email == user.email && e.password == user.password) found = true
        })
        setIsValidUser(found)
        if (found) {
            localStorage.setItem("loginnedUser", JSON.stringify(user))
            navigate("/")
        }
    }
    return (
        <form>
            <p
                style={{
                    fontSize: "25px"
                }}
            >تسجيل الدخول</p>
            <Box
                className="form-fields"
                mb={"15px"}
            >
                <Box>
                    <label>الايميل</label>
                    <input type="email" placeholder="الايميل" onChange={(e) => {
                        setUser({ ...user, email: e.target.value })
                    }} />
                </Box>
                <Box>
                    <label>كلمة السر</label>
                    <input type="password" placeholder="كلمة السر" onChange={(e) => {
                        setUser({ ...user, password: e.target.value })
                    }} />
                </Box>
                {!isVAlidUser && getError("Email or Password are Wrong")}
                <Button variant="contained" onClick={() => Login()}>تسجيل الدخول</Button>
            </Box>
            <NavLink to={"/auth/signup"}>ليس لديك حساب ؟</NavLink>
        </form>
    )
}

export default Login
