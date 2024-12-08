import { Box } from "@mui/material"
import img from "/تنزيل.webp"
import Team from "./Team"
import "./team.css"
const Teams = () => {
    return (
        <Box
            className="teams"
            textAlign={"center"}
        >
            <h3>فريق موقع الطلاقة</h3>
            <Box
                display={"flex"}
                justifyContent={"Center"}
                flexWrap={"wrap"}
                marginTop={"40px"}
                gap={"40px"}
            >
                <Team img={img} role="معلم اللغة الانجليزية" name="كامل أبو شاويش" />
                <Team img={img} role="معلم اللغة الانجليزية" name="كامل أبو شاويش" />
            </Box>
        </Box>
    )
}

export default Teams
