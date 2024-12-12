import { Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Level as LevelType } from "../../types/Level"
type LevelProps = {
    level: LevelType
}
const Level = ({ level }: LevelProps) => {
    const navigate = useNavigate()
    return (
        <Box
            padding={"5px"}
        >
            <p style={{ marginBottom: "10px", color: "var(--background)" }}>المستوى {level.level}</p>

            {/* Videos */}
            <Box
                display={"flex"}
                gap={"5px"}
                flexWrap={"wrap"}
            >
                {
                    level.videos.map(e => {
                        return <Box
                            key={e.id}
                            width={"fit-content"}
                            onClick={() => navigate(`/watch/${e.id}}`)}
                            textAlign={"center"}
                        >
                            <Box
                                width={"80px"}
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
