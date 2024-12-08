import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
type UserCourseProps = {
    name: string
    level: number
}
const UserCourse = ({ name, level }: UserCourseProps) => {
    const navigate = useNavigate()
    return (
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={"1px solid #8080802e"}
            padding={"15px 0"}
        >
            <span
                style={{
                    fontSize: '18px'
                }}
            >{name}</span>
            <span
                style={{
                    color: 'var(--secondary)'
                }}
            >المستوى {level}</span>
            <Button variant="contained" onClick={() => navigate(`/course/watch/1`)}>أكمل</Button>
        </Box>
    )
}

export default UserCourse
