import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
type MoreProps = {
    text: string
}
const More = ({ text }: MoreProps) => {
    const navigate = useNavigate()
    let link = ""
    switch (text) {
        case "اراء الطلاب":
            link = "/opinions"
            break;
        case "كورس اللغة الألمانية":
            link = "/course/view/germany"
            break;
        case "كورس اللغة الانجليزية":
            link = "/course/view/english"
            break;
    }
    return (
        <Box
            width={"200px"}
            fontSize={"20px"}
            marginBottom={"30px"}
            className="more"
        >
            <p style={{ marginBottom: "15px " }}>
                لمعرفة المزيد من تفاصيل<br /> {text} اضغط هنا
            </p>
            <Button
                className="more-button hover-background"
                onClick={() => navigate(link)}
            >
                {text}
            </Button>
        </Box>
    )
}

export default More
