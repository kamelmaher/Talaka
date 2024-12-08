import { Box, Button } from "@mui/material"
import person from "/picture.jpg"
import { useNavigate } from "react-router-dom"
type CourseCardProps = {
    type: string
}
const CourseCard = ({ type }: CourseCardProps) => {
    const navigate = useNavigate()
    return (
        <Box
            width={{
                xs: "calc(100%)",
                sm: "calc(100% / 2 - 20px)",
                md: "calc(100% / 3 - 20px)",
                lg: "calc(100% / 4 - 20px)"
            }}
            borderRadius={"6px"}
            overflow={"hidden"}
            border={"1px solid #8080802e"}
            onClick={() => navigate(`/course/${type}/${type == "watch" ? "1" : "الانجليزية"}`)}
        >
            <Box
                height={"230px"}
            >
                <img src={person} alt="" className="img-fix" />
            </Box>
            <Box
                padding={"8px"}
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    color={"var(--background)"}
                    mb={"5px"}
                >
                    <h3
                        className="pointer"
                    >كورس اللغة الانجليزية</h3>
                    <span>50$</span>
                </Box>
                <Box
                    fontSize={"18px"}
                >
                    معلم الدورة : <span>كامل ماهر</span>
                </Box>
                <Box
                    fontSize={"18px"}
                    mb={"15px"}
                >
                    عدد الفيديوهات : <span>25</span>
                </Box>
                <Box
                    mb={"8px"}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloremque dicta quisquam.
                </Box>
                <Box
                    width={"fit-content"}
                    margin={"auto"}
                >
                    <Button variant="contained">{type == "watch" ? "اكمال" : "شراء"}</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default CourseCard
