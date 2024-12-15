import { Box } from "@mui/material"
import CourseCard from "./CourseCard"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
const Courses = () => {
    const { type } = useParams()
    useEffect(() => {
        axios.get("https://coursesapi23.runasp.net/swagger/index.html/api/Courses").then((data) => console.log(data))
    }, [])
    return (
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
            padding={"30px 20px"}
            gap={"10px"}
        >
            <CourseCard type={type!}></CourseCard>
            <CourseCard type={type!}></CourseCard>
            <CourseCard type={type!}></CourseCard>
            <CourseCard type={type!}></CourseCard>
        </Box>
    )
}

export default Courses
