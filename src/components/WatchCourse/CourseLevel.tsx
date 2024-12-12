import { Box } from "@mui/material"
import { Level } from "../../types/Level"
import CourseVideo from "./CourseVideo"
import { useState } from "react"

type CourseLevelProps = {
    level: Level
}

const CourseLevel = ({ level }: CourseLevelProps) => {
    const [showVideos, setShowVideos] = useState(false)
    return (
        <Box>
            <h4
                className="pointer"
                style={{ background: "var(--background)", padding: "15px 10px", color: "white" }}
                onClick={() => setShowVideos(!showVideos)}
            >المستوى {level.level}</h4>
            <Box
                maxHeight={"350px"}
                overflow={"auto"}
            >
                {
                    showVideos &&
                    level.videos.map(video => <CourseVideo key={video.id} name={"فيديو 1"} desc={"الفيديو الأول"} time={5} watched={true} />)
                }
            </Box>
        </Box>
    )
}

export default CourseLevel
