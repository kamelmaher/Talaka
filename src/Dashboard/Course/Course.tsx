import { Box, Button } from "@mui/material"
import person from "/picture.jpg"
import "./course.css"
import Level from "./Level"
import { useNavigate } from "react-router-dom"
import { levels } from "../../Logic.tsx/FakeData"
const Course = () => {
    const navigate = useNavigate()

    return (
        <Box
            bgcolor={"var(--primary)"}
        >
            <Box
                width={{
                    xs: "100%",
                    md: "80%"
                }}
                bgcolor={"white"}
                margin={"auto"}
                padding={"20px"}
            >
                <Box
                    display={"flex"}
                >
                    <Box>
                        <img src={person} alt="" style={{ width: "150px", height: "150px" }} />
                    </Box>
                    <Box
                        padding={"5px 15px"}
                        className="course-data"
                    >
                        <h4 style={{ fontSize: "22px" }}>كورس اللغة الألمانية</h4>
                        <Box fontSize={"17px"}>معلم الدورة: <span>كامل أبو شاويش</span></Box>
                        <Box fontSize={"17px"}>المستويات: <span>4</span></Box>
                        <Box fontSize={"17px"}>الفيديوهات: <span>20</span></Box>
                        <Box fontSize={"17px"}>عدد الطلاب المسجلين: <span>20</span></Box>
                    </Box>
                </Box>
                <Box
                    padding={"10px"}
                    bgcolor={"var(--primary)"}
                >
                    <p
                        style={{ textAlign: "center", fontSize: "18px" }}
                    >الفيديوهات</p>
                    <Box>
                        {
                            levels.map(level => <Level level={level} />)
                        }
                    </Box>
                </Box>
                <Box
                    width={"fit-content"}
                    margin={"auto"}
                >
                    <Button variant="contained" onClick={() => navigate("/control/addvideo")}>اضافة فيديو</Button>
                    <Button variant="contained" onClick={() => navigate("/control/addlevel/1")}>اضافة مستوى</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Course
