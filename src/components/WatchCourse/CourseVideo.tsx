import { Box } from "@mui/material"
import person from "/picture.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { useParams } from "react-router-dom"
type CourseVideoProps = {
    name: string,
    desc: string
    time: number
    watched: boolean
}
const CourseVideo = ({ name, time, desc, watched }: CourseVideoProps) => {
    const icon = <FontAwesomeIcon icon={watched ? faCircleCheck : faCircle} style={{
        marginLeft: "6px",
        color: watched ? "var(--secondary)" : "var(--background)"
    }}></FontAwesomeIcon>
    const { courseid } = useParams()
    return (
        <Box
            display={"flex"}
            className="pointer course-video"
            borderRadius={'6px'}
            overflow={"hidden"}
            margin={"7px 0"}
            bgcolor={+courseid! === 1 ? "var(--primary)" : "initial"}
        >
            <Box
                width={"80px"}
            >
                <img src={person} alt="course-img" className="img-fix" />
            </Box>
            <Box
                padding={"8px"}
                flex={"1"}
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <h4
                        style={{ fontSize: "22px", color: "var(--background)" }}
                    >{name}</h4>
                    <span
                        style={{ fontSize: "14px", color: "var(--text)" }}
                    >{time} دقيقة</span>
                </Box>
                <h5
                    style={{ fontSize: "16px", color: "var(--text)", marginBottom: "6px" }}
                >{desc}</h5>
                <span>{icon}{watched ? "تمت مشاهدته" : "لم تتم المشاهدة"} </span>
            </Box>
        </Box>
    )
}

export default CourseVideo
