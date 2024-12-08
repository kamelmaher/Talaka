import { Box } from '@mui/material';
import logo from "/تنزيل.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faBell, faUserCircle, faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import "./header.css"
import Links from './Links';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const auth = true
    const handleMenuClick = (e: boolean) => {
        setShowMenu(e)
    }
    return (
        <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            className="header"
        >
            <NavLink
                className="logo pointer"
                to={"/"}
            >
                <img src={logo} alt="logo" />
            </NavLink>

            <Links display='flex' />

            <Box
                width={"fit-content"}
                display={"flex"}
                gap={2}
                alignItems={"center"}

            >
                {
                    auth ?
                        <>
                            {/* If Regiestered  */}
                            <FontAwesomeIcon icon={faBell} className='pointer' style={{ fontSize: "20px " }}></FontAwesomeIcon>
                            <NavLink to={'/user/1'}>
                                <img src={logo} alt="Personal-img" className='personal-img pointer' />
                            </NavLink>
                        </>
                        :
                        <>
                            {/* If  Not Regiestered  */}
                            <FontAwesomeIcon icon={faUserCircle} className='person-icon ' style={{ fontSize: "22px " }}></FontAwesomeIcon>
                            <NavLink to={"/login"}>
                                <span className='pointer hover-color' style={{ color: "white" }}>تسجيل الدخول</span>
                            </NavLink>
                        </>
                }
            </Box>

            <Box
                display={{
                    md: "none"
                }}
                fontSize={"25px"}
                className="pointer"
                onClick={() => {
                    handleMenuClick(!showMenu)
                }}
                position={"relative"}
            >
                {
                    showMenu ?
                        <FontAwesomeIcon icon={faX} />
                        :
                        <FontAwesomeIcon icon={faBars} />
                }

                <Box
                    display={
                        showMenu ? "block" : "none"
                    }
                    className="hidden-menu"
                >
                    <Links display='block' />
                </Box>
            </Box>
        </Box >
    )
}

export default Header
