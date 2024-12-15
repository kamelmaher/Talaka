import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import Person from "/picture.jpg"
import { User as UserType } from "../types/User"
import { Course } from "../types/Course"
import { useState } from "react"

export type AddCourse = {
    level: number,
    name: string,
    plan: number
}
const User = () => {
    const [adding, setAdding] = useState(false)
    const [nameSelected, setNameSelected] = useState(false)
    const [newUser, setNewUser] = useState<UserType>({
        id: 0,
        fname: "Kamel",
        lname: "maher",
        age: 12,
        progress: [],
        email: "",
        password: ""
    })
    const myCourses: Course[] = [
        {
            courseId: 0,
            courseName: "انجليزي",
            levels: [],
            videoCount: 20,
            Teacher: {
                id: 0,
                name: "",
                email: "",
                courses: []
            }
        },
        {
            courseId: 1,
            courseName: "الماني",
            levels: [],
            videoCount: 15,
            Teacher: {
                id: 0,
                name: "",
                email: "",
                courses: []
            }
        },
        {
            courseId: 2,
            courseName: "ايطالي",
            levels: [],
            videoCount: 15,
            Teacher: {
                id: 0,
                name: "",
                email: "",
                courses: []
            }
        },
    ]


    // const coursesToBeAdded = myCourses.filter(course => {
    //     newUser.progress.map(progress => {
    //         if (progress.course.courseId == course.courseId) return course
    //     })
    // })
    const [editPlan, setEditPlan] = useState(false)
    const [newPlan, setNewPlan] = useState(0)
    const [selectedCourse, setSelectedCourse] = useState<AddCourse>({ level: 0, name: "", plan: 1 })
    const addCoursesToUser = () => {
        myCourses.map(myCourse => {
            if (selectedCourse.name == myCourse.courseName) {
                setNewUser({ ...newUser, progress: [...newUser.progress, { course: myCourse, level: selectedCourse.level, finished: 0, startDate: 2, plan: selectedCourse.plan }] })
            }
        })
    }
    return (
        <Box
            bgcolor={"var(--primary)"}
            padding={{
                xs: "20px",
                md: "60px 40px"
            }}
            position={"relative"}
        >
            {/* Content  */}
            <Box
                bgcolor={"white"}
                width={{
                    xs: "100%",
                    md: "90%"
                }}
                margin={"auto"}
            >
                <Box
                    display={"flex"}
                    flexWrap={"wrap"}
                >
                    <Box
                        width={"200px"}
                    >
                        <img src={Person} alt="" className="img-fix" />
                    </Box>
                    <Box
                        padding={"15px"}
                    >
                        <h4
                            style={{ fontSize: "22px", fontWeight: "500", marginBottom: "10px" }}
                        >Kamel Maher</h4>
                        <span
                            style={{ fontSize: "17px", fontWeight: "500" }}
                        >kamelmaher@gmail.com</span>
                        <Box
                            mt={"20px"}
                            display={"flex"}
                            gap={"10px"}
                        >
                            <Button variant="contained" onClick={(() => setAdding(true))}>اضافة دورة</Button>
                            <Button variant="contained" color="error">حذف المستخدم</Button>
                        </Box>
                    </Box>
                </Box>
                <Box
                    padding={"15px"}
                    overflow={"auto"}
                >
                    <h4 style={{ fontSize: "20px", color: "var(--background)", textAlign: "center", marginBottom: "10px" }}>الكورسات </h4>
                    {
                        newUser.progress.length > 0 ?
                            <Table
                                style={{ width: "850px", overflow: "auto", margin: "auto" }}
                            >
                                <TableHead>
                                    <TableRow>
                                        <th>اسم الدورة</th>
                                        <th>معلم الدورة</th>
                                        <th>تاريخ البداية</th>
                                        <th>المستويات</th>
                                        <th>المستوى الحالي</th>
                                        <th>فيديوهات تمت مشاهدتها</th>
                                        <th>مدة الاشتراك</th>
                                        <th>تعديل الاشتراك</th>
                                        <th>حذف</th>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        newUser.progress.map(e => {
                                            return <TableRow>
                                                <TableCell>{e.course.courseName}</TableCell>
                                                <TableCell>{e.course.Teacher.name}</TableCell>
                                                <TableCell>25 / 2 / 2024</TableCell>
                                                <TableCell>{e.course.levels.length}</TableCell>
                                                <TableCell>{e.level}</TableCell>
                                                <TableCell>{e.finished}</TableCell>
                                                <TableCell>
                                                    {editPlan ?
                                                        <input type="number" onChange={(e) => { setNewPlan(+e.target.value) }} />
                                                        :
                                                        <>
                                                            {e.plan}  شهور
                                                        </>
                                                    }

                                                </TableCell>
                                                <TableCell><Button variant="contained" onClick={() => {
                                                    if (editPlan) {
                                                        setEditPlan(false)
                                                        // Api Request
                                                        e.plan = newPlan
                                                    } else setEditPlan(true)
                                                }}>تعديل</Button></TableCell>
                                                <TableCell><Button variant="contained" color="error" onClick={() => { }}>حذف</Button></TableCell>
                                            </TableRow>
                                        })
                                    }
                                </TableBody>
                            </Table>
                            : <p>لا يوجد كورسات</p>
                    }

                </Box>
            </Box>

            {/* Add Course To User */}
            {
                adding &&
                <Box
                    position={"absolute"}
                    width={"100%"}
                    height={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    left={0}
                    top={0}
                    bgcolor={"#0f0f0f6b"}
                >
                    <Box
                        textAlign={"center"}
                        className="add-course-to-user"
                    >
                        اضافة كورس للطالب
                        <Box
                            mt={"15px"}
                        >
                            <form>
                                <Box
                                    width={"250px"}
                                    mb={"10px"}
                                >
                                    <select
                                        style={{ width: "150px", marginBottom: "10px" }}
                                        className="pointer"
                                        onChange={(e) => {
                                            setNameSelected(true)
                                            setSelectedCourse({ ...selectedCourse, name: e.target.value })
                                        }}
                                    >
                                        <option value="اختر كورس">اختر كورس</option>
                                        <option value="انجليزي">انجليزي</option>
                                        <option value="الماني">الماني</option>
                                        <option value="ايطالي">ايطالي</option>
                                    </select>
                                    {
                                        nameSelected &&
                                        <>
                                            <select
                                                style={{ width: "150px", marginBottom: "10px" }}
                                                className="pointer"
                                                onChange={(e) => setSelectedCourse({ ...selectedCourse, level: +e.target.value })}
                                            >
                                                <option value="المستوى">المستوى</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                            <select
                                                style={{ width: "150px" }}
                                                className="pointer"
                                                onChange={(e) => setSelectedCourse({ ...selectedCourse, plan: +e.target.value })}
                                            >
                                                <option value="مدة الاشتراك">مدة الاشتراك</option>
                                                <option value="1"> شهر</option>
                                                <option value="3">3 شهور</option>
                                                <option value="6">6 شهور</option>
                                                <option value="12">12 شهر</option>
                                            </select>
                                        </>
                                    }
                                </Box>
                                <Button
                                    variant="contained"
                                    style={{ margin: "auto", display: "block" }}
                                    onClick={(e) => {
                                        if (selectedCourse.name == "")
                                            e.preventDefault()
                                        else {
                                            addCoursesToUser();
                                            setAdding(false)
                                        }
                                    }}
                                >اضافة</Button>
                            </form>
                        </Box>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default User
