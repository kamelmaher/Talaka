import { Box } from "@mui/material"
import person from "/Hero/img1.webp"
import "./opinions.css"
import Opinions from "../HomePage/Opinions/Opinions"

const OpinionsContainer = () => {
    const opinions = [person, person, person, person, person]
    return (
        <Box
            className="opinions-section"
        >
            <h3
                style={{
                    marginBottom: "30px"
                }}
            >بعض آراء أبناءنا الطلاب من جميع الأعمار ممن درسوا معنا أونلاين من جميع أنحاء العالم 🤩</h3>
            <Opinions imgs={opinions} />
        </Box>
    )
}

export default OpinionsContainer
