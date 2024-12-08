import { Box, Button } from "@mui/material"
import "./watchcourse.css"
import CourseVideos from "./CourseVideos"
import CourseComments from "./VideoComments"
import VideoDetails from "./VideoDetails"
const WatchCourse = () => {
    return (
        <Box
            padding={"20px"}
        >
            <h4 style={{ textAlign: "center", color: "var(--secondary)", fontSize: "20px" }}>دورة اللغة الانجليزية</h4>
            <Box
                display={"flex"}
                justifyContent={{
                    xs: "center",
                    sm: "space-between"
                }}
                flexWrap={"wrap"}
                mt={"20px"}

            >
                <CourseVideos />
                <Box
                    mb={"30px"}
                    width={"580px"}
                    className="video"
                    order={{
                        xs: 0,
                        lg: 1
                    }}
                    marginX={{
                        xs: "auto",
                        lg: 0
                    }}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"10px"}
                >
                    <Box
                        flex={"1"}
                    >
                        <video src={""} controls className="img-fix"></video>
                    </Box>
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Box>
                            <Button variant="contained" color="error">تمت المشاهدة</Button>
                        </Box>
                        <Box
                            display={"flex"}
                            gap={"10px"}
                        >
                            <Button variant="contained">التالي</Button>
                            <Button variant="contained">السابق</Button>
                        </Box>
                    </Box>
                </Box>
                <CourseComments />
            </Box>
            <VideoDetails />
        </Box >
    )
}

export default WatchCourse
