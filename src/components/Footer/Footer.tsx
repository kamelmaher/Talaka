import youtube from "/Social/youtube.webp"
import tiktok from "/Social/tiktok.webp"
import insta from "/Social/insta.webp"
import { Box } from "@mui/material"
import logo from "/تنزيل.webp"
import "./footer.css"
import SocialItem from "./SocialItem"
const Footer = () => {
    const social = [youtube, tiktok, insta]
    return (
        <Box
            className="footer"
            display={"flex"}
            alignItems={"center"}
            justifyContent={{
                xs: "center",
                md: "space-between"
            }}
            flexWrap={"wrap"}
            gap={"20px"}
            padding={{
                xs: "20px",
                md: "20px 30px"
            }}
        >
            <div style={{
                textAlign: "center"
            }}>
                <img src={logo} alt="" />
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "25px"
                }}
            >
                {
                    social.map((e, i) => <SocialItem key={i} img={e} />)
                }
            </div>
            <div>
                جميع الحقوق محفوظة موقع طلاقة 2024-2025
            </div>
        </Box>
    )
}

export default Footer
