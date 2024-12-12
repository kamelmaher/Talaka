import { Box } from "@mui/material"
// import CourseVideo from "./CourseVideo"
import { levels } from "../../Logic.tsx/FakeData"
import CourseLevel from "./CourseLevel"

const CourseVideos = () => {
    return (
        <Box
            className="course-videos"
            mb={"30px"}
            width={{
                xs: "100%",
                sm: "calc(100% / 2 - 10px)",
                md: "350px"
            }}
            order={{
                xs: 1,
                lg: 0
            }}
            height={"600px"}
        >
            <h4 style={{ textAlign: "center", color: "var(--text)", background: "var(--primary)", padding: "10px" }}>فيديوهات الدورة</h4>
            <Box
                maxHeight={"500px"}
                overflow={"auto"}
            >
                {
                    levels.map(level => <CourseLevel level={level} />)
                }
                {/* <CourseVideo name="فيديو 1" time={12} desc="فيديو يتحدث عن اللغة الانجليزية " watched={true} />
                <CourseVideo name="فيديو 2" time={9} desc="فيديو يتحدث عن اللغة الألمانية " watched={true} />
                <CourseVideo name="فيديو 3" time={5} desc="فيديو يتحدث عن مخرجات الكورس " watched={false} />
                <CourseVideo name="فيديو 3" time={5} desc="فيديو يتحدث عن مخرجات الكورس " watched={false} />
                <CourseVideo name="فيديو 3" time={5} desc="فيديو يتحدث عن مخرجات الكورس " watched={false} />
                <CourseVideo name="فيديو 3" time={5} desc="فيديو يتحدث عن مخرجات الكورس " watched={false} />
                <CourseVideo name="فيديو 3" time={5} desc="فيديو يتحدث عن مخرجات الكورس " watched={false} />
                <CourseVideo name="فيديو 3" time={5} desc="فيديو يتحدث عن مخرجات الكورس " watched={false} /> */}
            </Box>
        </Box>
    )
}

export default CourseVideos
