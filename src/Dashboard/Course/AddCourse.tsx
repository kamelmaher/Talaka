import { Box, Button } from "@mui/material"
import "../Teacher/addteacher.css"
import axios from "axios"
const AddCourse = () => {
    return (
        <Box
            textAlign={"center"}
            padding={"40px 60px"}
            bgcolor={"var(--primary)"}
        >
            <Box
                className="form-box"
                bgcolor={"white"}
                padding={"10px"}
            >
                <h4
                    style={{
                        fontSize: "25px",
                    }}
                >اضافة دورة</h4>
                <Box
                    mt={"10px"}
                >
                    <form>
                        <Box>
                            <label>اسم الدورة</label>
                            <input type="text" />
                        </Box>
                        <Box>
                            <label>الصورة</label>
                            <input type="file" accept="image/*" />
                        </Box>
                        <Box>
                            <label>عدد المستويات</label>
                            <input type="text" />
                        </Box>
                        <Box>
                            <label>نبذة مختصرة</label>
                            <textarea id=""></textarea>
                        </Box>
                        <Button
                            variant="contained"
                            onClick={() => {
                                const data = new FormData()
                                data.append("Name", "Course 1")
                                data.append("Description", "Test Test")
                                data.append("ImageCover", "")
                                data.append("IsActive", "true")
                                data.append("CreatedAt", (new Date()).toDateString())
                                axios.post("https://coursesapi23.runasp.net/api/Courses", data).then((data) => console.log(data))
                            }}
                        >اضافة</Button>
                    </form>
                </Box>
            </Box>

        </Box >
    )
}

export default AddCourse
