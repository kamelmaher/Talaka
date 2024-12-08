import { Box } from "@mui/material"
import { Video } from "../../types/Video"
import { useNavigate } from "react-router-dom"
type LevelProps = {
    level: number
    videos: Video[]
}
const Level = ({ level, videos }: LevelProps) => {
    const navigate = useNavigate()
    return (
        <Box
            padding={"5px"}
        >
            <p style={{ marginBottom: "10px", color: "var(--background)" }}>المستوى {level}</p>

            {/* Videos */}
            <Box
                display={"flex"}
                gap={"5px"}
                flexWrap={"wrap"}
            >
                {
                    videos.map(e => {
                        return <Box
                            width={"fit-content"}
                            display={"flex"}
                            onClick={() => navigate(`/watch/0}`)}
                            key={e.id}
                        >
                            <Box
                                width={"60px"}
                            >
                                <img src={e.img} className="img-fix" />
                            </Box>
                            <Box
                                padding={"0 10px"}
                                className="pointer"
                            >
                                <p>{e.title}</p>
                                <span style={{ fontSize: "12px" }}>{e.time} دقيقة</span>
                            </Box>
                        </Box>
                    })
                }
            </Box>
        </Box >
    )
}

export default Level
