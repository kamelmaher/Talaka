import { Box, Button } from "@mui/material"
import person from "/picture.jpg"
import "./course.css"
import Level from "./Level"
import { Video } from "../../types/Video"
import { useNavigate } from "react-router-dom"
const Course = () => {
    const navigate = useNavigate()
    const videos: Video[] = [
        {
            id: 0,
            title: "فيديو 1",
            time: 25,
            watched: false,
            img: person,
            desc: "",
            level: 1,
            comments: []
        },
        {
            id: 4,
            title: "فيديو 2",
            time: 25,
            watched: false,
            img: person,
            desc: "",
            level: 5,
            comments: []
        },
        {
            id: 3,
            title: "فيديو 3",
            time: 25,
            watched: false,
            img: person,
            desc: "",
            level: 4,
            comments: []
        },
        {
            id: 6,
            title: "فيديو 2",
            time: 25,
            watched: false,
            img: person,
            desc: "",
            level: 5,
            comments: []
        },
        {
            id: 5,
            title: "فيديو 3",
            time: 25,
            watched: false,
            img: person,
            desc: "",
            level: 4,
            comments: []
        },
        {
            id: 1,
            title: "فيديو 2",
            time: 25,
            watched: false,
            img: person,
            desc: "",
            level: 5,
            comments: []
        },
        {
            id: 2,
            title: "فيديو 3",
            time: 25,
            watched: false,
            img: person,
            desc: "",
            level: 4,
            comments: []
        },
    ]
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
                        <Level level={1} videos={videos}></Level>
                        <Level level={2} videos={videos}></Level>
                        <Level level={3} videos={videos}></Level>
                    </Box>
                </Box>
                <Box
                    width={"fit-content"}
                    margin={"auto"}
                >
                    <Button variant="contained" onClick={() => navigate("/control/addvideo")}>اضافة فيديو</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Course
