import { Box, Button } from "@mui/material"
import { NavLink, useNavigate } from "react-router-dom"
import { User } from "../../types/User"
import { useState } from "react"
import { getError } from "../../Logic.tsx/Auth"



const SignUp = () => {
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState<User>({
        id: 0,
        fname: "",
        lname: "",
        email: "",
        password: "",
        progress: [],
        courses: []
    })
    const [errMessage, setErrMessage] = useState({
        passWordNotMAtch: false,
        ValuesAreEmpty: false,
        notValidEmail: false
    })
    const [retypePass, setRetypePass] = useState("")
    const checkNotEmpty = () => {
        if (newUser.fname != "" && newUser.lname != "" && newUser.email != "" && newUser.password != "")
            return true
        else {
            setErrMessage({ ...errMessage, ValuesAreEmpty: true })
            return false
        }
    }
    const checkVaildEmail = () => {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/.test(newUser.email)) return true
        else {
            setErrMessage({ ...errMessage, notValidEmail: true })
        }
    }
    const checkCorrectPass = () => {
        if (newUser.password == retypePass) return true
        else {
            setErrMessage({ ...errMessage, passWordNotMAtch: true })
            return false
        }
    }
    // const checkValidPass = () => {

    // }

    const SignUp = () => {
        localStorage.setItem("users", JSON.stringify(newUser))
    }
    const createUser = () => {
        if (checkNotEmpty() && checkVaildEmail() && checkCorrectPass()) {
            SignUp()
            setErrMessage({ ValuesAreEmpty: false, notValidEmail: false, passWordNotMAtch: false })
            navigate("/auth/login")
        }
    }
    return (
        <form>
            <p
                style={{
                    fontSize: "25px"
                }}>انشاء حساب</p>
            <Box
                className="form-fields"
                mb={"15px"}
            >
                <Box>
                    <label>الاسم الأول</label>
                    <input type="text" placeholder="الاسم الأول" onChange={e => setNewUser({ ...newUser, fname: e.target.value })} />
                </Box>
                <Box>
                    <label>الاسم الأخير</label>
                    <input type="text" placeholder="الاسم الأخير" onChange={e => setNewUser({ ...newUser, lname: e.target.value })} />
                </Box>
                <Box>
                    <label>الايميل</label>
                    <input type="text" placeholder="الايميل" onChange={e => setNewUser({ ...newUser, email: e.target.value })} />
                </Box>
                <Box>
                    <label>كلمة السر</label>
                    <input type="password" placeholder="كلمة السر" onChange={e => setNewUser({ ...newUser, password: e.target.value })} />
                </Box>
                <Box>
                    <label>تأكيد كلمة السر</label>
                    <input type="password" placeholder="تأكيد كلمة السر" onChange={e => setRetypePass(e.target.value)} />
                </Box>
                {
                    errMessage.passWordNotMAtch && getError("Passwords Not Match")
                }
                {
                    errMessage.ValuesAreEmpty && getError("Check All Data")
                }
                {
                    errMessage.notValidEmail && getError("Not a Valid Email")
                }
                <Button variant="contained"
                    onClick={() => createUser()}
                >انشاء</Button>
            </Box>
            <NavLink to={"/auth/login"}>لديك  حساب بالفعل ؟</NavLink>
        </form>
    )
}

export default SignUp
