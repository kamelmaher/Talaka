import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import Person from "/picture.jpg"
import CourseToUser from "./CourseToUser"
import { User as UserType } from "../types/User"
import { Course } from "../types/Course"
import { useState } from "react"

export type AddCourse = {
    level: number,
    name: string
}
const User = () => {
    const [adding, setAdding] = useState(false)
    const [newUser, setNewUser] = useState<UserType>({
        id: 0,
        fname: "Kamel",
        lname: "maher",
        progress: [],
        email: "",
        password: ""
    })
    const myCourses: Course[] = [
        {
            courseId: 0,
            courseName: "انجليزي",
            levels: 6,
            videoCount: 20
        },
        {
            courseId: 1,
            courseName: "الماني",
            levels: 3,
            videoCount: 15
        },
        {
            courseId: 2,
            courseName: "ايطالي",
            levels: 4,
            videoCount: 16
        },
    ]


    // const coursesToBeAdded = myCourses.filter(course => {
    //     newUser.progress.map(progress => {
    //         if (progress.course.courseId == course.courseId) return course
    //     })
    // })

    const [selectedCourses, setSelectedCourses] = useState<AddCourse[]>([])
    const selectCourse = (course: AddCourse) => {
        let found = false
        selectedCourses.map(e => {
            if (e.name == course.name) {
                found = true
                setSelectedCourses(selectedCourses.filter(selectedCourse => selectedCourse.name != course.name))
            }
        })
        if (!found)
            setSelectedCourses([...selectedCourses, course])
    }
    const addCoursesToUser = () => {
        myCourses.map(myCourse => {
            selectedCourses.map(course => {
                if (course.name == myCourse.courseName) {
                    setNewUser({ ...newUser, progress: [...newUser.progress, { course: myCourse, level: course.level, finished: 0 }] })
                }
            })
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
                    <h4 style={{ fontSize: "20px", color: "var(--background)", textAlign: "center" }}>الكورسات </h4>
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
                                        <th>انتهاء الاشتراك</th>
                                        <th>حذف</th>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        newUser.progress.map(e => {
                                            return <TableRow>
                                                <TableCell>{e.course.courseName}</TableCell>
                                                <TableCell>كامل ماهر</TableCell>
                                                <TableCell>25 / 2 / 2024</TableCell>
                                                <TableCell>{e.course.levels}</TableCell>
                                                <TableCell>{e.level}</TableCell>
                                                <TableCell>{e.finished}</TableCell>
                                                <TableCell>25/5/2024</TableCell>
                                                <TableCell><Button variant="contained" color="error">حذف</Button></TableCell>
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
                        className="add-course-to-user"
                    >
                        اضافة كورس للطالب
                        <Box
                            mt={"15px"}
                        >
                            <form>
                                {
                                    myCourses.map(course => <CourseToUser key={course.courseId} addCourse={selectCourse} name={course.courseName} levels={course.levels} />)
                                }
                                <Button
                                    variant="contained"
                                    style={{ margin: "auto", display: "block" }}
                                    onClick={() => {
                                        addCoursesToUser()
                                        setAdding(false)
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
