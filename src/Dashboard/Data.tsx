import { Box } from "@mui/material"
import { Course } from "../types/Course"
import { useNavigate } from "react-router-dom"
type DataProps = {
    id: number
    img: string,
    name: string,
    email?: string,
    courses?: Course[],
    link: string,
    levels?: number,
    videoCount?: number
}
const Data = ({ id, img, name, email, courses, link, levels, videoCount }: DataProps) => {
    const navigate = useNavigate()
    let coursesName: string[] = []
    if (courses)
        coursesName = courses.map(e => e.courseName)
    return (
        <Box
            width={{
                xs: "100%",
                md: "calc(100% / 2 - 10px)",
                lg: "calc(100% / 3 - 10px)",
            }}
            mb={"10px"}
            display={"flex"}
            bgcolor={"var(--primary)"}
            className="pointer"
            onClick={() => navigate(`/control/${link}/${id}`)}
        >
            <Box
                width={"85px"}
            >
                <img src={img} alt="" className="img-fix" />
            </Box>
            <Box
                padding={"5px 10px"}
            >
                <h4>{name}</h4>
                {
                    email &&
                    <span
                        style={{ fontSize: "14px" }}
                    >{email}</span>
                }
                {
                    courses &&
                    <span style={{ display: "block" }}>
                        {
                            link == "user" ?
                                courses.length > 0 ?
                                    <p style={{ color: "var(--background)" }}>
                                        مشترك في
                                        <br />
                                        <span>
                                            {
                                                coursesName.join(" و ")
                                            }
                                        </span>
                                    </p> : "غير مشترك في أي دورة"
                                : courses.length > 0 ?
                                    <>
                                        <p>
                                            كورسات هذا المدرس هي :
                                            <br />
                                            {coursesName.join(" و ")}</p>
                                    </> : "هذا المعلم ليس لديه اي دورات"
                        }

                    </span>
                }

                {
                    levels && <Box fontSize={"17px"} mt={"5px"}>
                        <span style={{ display: "block" }}>عدد المستويات : {levels}</span>
                        <span>عدد الفيديوهات : {videoCount}</span>
                    </Box>
                }
            </Box>
        </Box>
    )
}

export default Data
