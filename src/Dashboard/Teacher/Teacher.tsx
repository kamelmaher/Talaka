import { Box, Button } from "@mui/material"
import person from "/picture.jpg"
import { useState } from "react"
const Teacher = () => {
    const [addCourse, setAddCourse] = useState(false)
    return (
        <Box
            bgcolor={"var(--primary)"}
            position={"relative"}
        >
            <Box
                width={{
                    xs: "100%",
                    md: "80%"
                }}
                bgcolor={"white"}
                margin={"auto"}
                display={"flex"}
                padding={{
                    xs: "10px",
                    lg: "30px"
                }}
            >
                <Box>
                    <img src={person} alt="" style={{ width: "140px", height: "140px" }} />
                </Box>
                <Box
                    padding={"5px 20px"}
                >
                    <Box
                        mb={"15px"}
                    >
                        <h4>كامل ماهر</h4>
                        <span>مدرس لغة عربية</span>
                        <p>kamelmaher@gmail.com</p>
                    </Box>
                    <Box>
                        دورات هذا المعلم هي :
                        <ul>
                            <li style={{ margin: "10px 0", display: "flex", gap: "15px", alignItems: "center" }}>دورة اللغة الانجليزية <Button variant="contained" color="error">حذف</Button></li>
                            <li style={{ margin: "10px 0", display: "flex", gap: "15px", alignItems: "center" }}>دورة اللغة الألمانية <Button variant="contained" color="error">حذف</Button></li>
                        </ul>
                    </Box>
                    <Box>
                        <Button variant="contained" onClick={() => setAddCourse(true)}>اضافة دورة للمعلم</Button>
                    </Box>
                </Box>
            </Box>
            {
                addCourse &&
                <Box
                    position={"absolute"}
                    width={"100%"}
                    height={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bgcolor={"#0f0f0f6b"}
                    left={0}
                    top={0}
                >
                    <Box
                        width={"200px"}
                        bgcolor={"white"}
                        padding={"15px"}
                        textAlign={"center"}
                    >
                        <p>اختر دورة :</p>
                        <form
                            style={{ marginTop: "15px" }}
                        >
                            <select
                                style={{ padding: "10px" }}
                            >
                                <option>اختر دورة</option>
                                <option value="كورس اللغة الانجليزية">كورس اللغة الانجليزية</option>
                                <option value="كورس اللغة الايطالية">كورس اللغة الايطالية</option>
                                <option value="كورس اللغة الألمانية">كورس اللغة الألمانية</option>
                            </select>
                            <Box
                                mt={"10px"}
                            >
                                <Button variant="contained" onClick={() => {
                                    setAddCourse(false)
                                }}>اضافة</Button>
                            </Box>
                        </form>
                    </Box>
                </Box>
            }
        </Box >
    )
}

export default Teacher
