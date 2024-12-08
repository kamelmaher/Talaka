import { Box } from "@mui/material"
import { AddCourse } from "./User"

type CourseToUserProps = {
    levels: number,
    name: string
    addCourse: (course: AddCourse) => void
}
const CourseToUser = ({ name, levels, addCourse }: CourseToUserProps) => {
    return (
        <Box
            display={"flex"}
            mb={"15px"}
            fontSize={"18px"}
            gap={"10px"}
        >
            <Box>

                <input type="checkbox" id={name} onClick={() => {
                    addCourse({ name: name, level: 1 })
                }} />
                <label htmlFor={name} style={{ width: "100px", textAlign: "center" }}>{name}</label>
            </Box>
            <select
                style={{ width: "100px", fontSize: "15px" }}
            >
                <option>المستوى</option>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(e => {
                        if (e > levels) return 0
                        else
                            return <option key={e} value={e}>{e}</option>
                    })
                }
            </select>
            <select
                style={{ width: "100px", fontSize: "15px" }}
            >
                <option >مدة الاشتراك</option>
                <option value="1">شهر</option>
                <option value="6">6 شهور</option>
                <option value="12">سنوي</option>
            </select>
        </Box>
    )
}

export default CourseToUser