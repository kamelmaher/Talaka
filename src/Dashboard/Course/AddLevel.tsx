import { Box, Button } from "@mui/material"
import { useParams } from "react-router-dom"
import "../Teacher/addteacher.css"
import { Level } from "../../types/Level"
import { useState } from "react"
const AddLevel = () => {
    const { courseid } = useParams()
    console.log(courseid)
    const [value, setValue] = useState(0)
    const newLevel: Level = {
        level: value,
        videos: []
    }
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
                >اضافة مستوى</h4>
                <Box
                    mt={"10px"}
                >
                    <form>
                        <Box>
                            <label>رقم المستوى</label>
                            <input type="number" onChange={(e => setValue(+e.target.value))} />
                        </Box>
                        <Button variant="contained">اضافة</Button>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default AddLevel
