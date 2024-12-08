import { Box, Button } from "@mui/material"
import "../Teacher/addteacher.css"
const AddVideo = () => {
    return (
        <Box
            textAlign={"center"}
        >
            <p style={{ marginBottom: "15px", fontSize: "22px" }}>اضافة فيديو</p>
            <form>
                <Box
                    className="form-box"
                >
                    <Box>
                        <label>اسم الفيديو</label>
                        <input type="text" />
                    </Box>
                    <Box>
                        <label>المستوى</label>
                        <input type="number" />
                    </Box>
                    <Box>
                        <label>تحميل</label>
                        <input type="file" accept="video/*" />
                    </Box>
                    <Box>
                        <label>الوصف</label>
                        <input type="text" />
                    </Box>
                    <Button variant="contained">اضافة</Button>
                </Box>
            </form>
        </Box>
    )
}

export default AddVideo