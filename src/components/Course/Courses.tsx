import { Box } from "@mui/material"
import CourseCard from "./CourseCard"
import { useParams } from "react-router-dom"

const Courses = () => {
    const { type } = useParams()
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
