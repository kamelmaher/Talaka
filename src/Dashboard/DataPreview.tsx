import { Box, Button } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import Data from "./Data"
import person from "/picture.jpg"
import { ReactNode, useState } from "react"
const DataPreview = () => {
    const navigate = useNavigate()
    const { type } = useParams()
    let data = []
    const [searchValue, setSearchValue] = useState("")
    let content: ReactNode = <></>
    switch (type) {
        case "user":
            if (searchValue != "")
                // User Data
                data = [
                    {
                        id: 0,
                        fname: "Kamel",
                        lname: "Maher",
                        email: "kamel@gmail.com",
                        password: "123123",
                        courses: [{ courseName: "كورس اللغة الانجليزية", courseId: 0, levels: 4, videoCount: 10 }],
                        progress: [],
                    },
                    {
                        id: 1,
                        fname: "Ahmed",
                        lname: "Ahmed",
                        email: "ahmed@gmail.com",
                        password: "123123",
                        courses: [],
                        progress: [],
                    },
                    {
                        id: 2,
                        fname: "Kamel",
                        lname: "Maher",
                        email: "kamel@gmail.com",
                        password: "123123",
                        courses: [{ courseName: "كورس اللغة الانجليزية", courseId: 0, levels: 4, videoCount: 10 }],
                        progress: [],
                    },
                    {
                        id: 3,
                        fname: "Ahmed",
                        lname: "Ahmed",
                        email: "ahmed@gmail.com",
                        password: "123123",
                        courses: [],
                        progress: [],
                    },
                    {
                        id: 4,
                        fname: "Kamel",
                        lname: "Maher",
                        email: "kamel@gmail.com",
                        password: "123123",
                        courses: [{ courseName: "كورس اللغة الانجليزية", courseId: 0, levels: 4, videoCount: 10 }],
                        progress: [],
                    },
                    {
                        id: 5,
                        fname: "Ahmed",
                        lname: "Ahmed",
                        email: "ahmed@gmail.com",
                        password: "123123",
                        courses: [],
                        progress: [],
                    },
                ].filter(e => e.fname.toLowerCase().startsWith(searchValue.toLowerCase()))
            else {
                data = [
                    {
                        id: 0,
                        fname: "Kamel",
                        lname: "Maher",
                        email: "kamel@gmail.com",
                        password: "123123",
                        courses: [{ courseName: "كورس اللغة الانجليزية", courseId: 0, levels: 4, videoCount: 10 }],
                        progress: [],
                    },
                    {
                        id: 1,
                        fname: "Ahmed",
                        lname: "Ahmed",
                        email: "ahmed@gmail.com",
                        password: "123123",
                        courses: [],
                        progress: [],
                    },
                    {
                        id: 2,
                        fname: "Kamel",
                        lname: "Maher",
                        email: "kamel@gmail.com",
                        password: "123123",
                        courses: [{ courseName: "كورس اللغة الانجليزية", courseId: 0, levels: 4, videoCount: 10 }],
                        progress: [],
                    },
                    {
                        id: 3,
                        fname: "Ahmed",
                        lname: "Ahmed",
                        email: "ahmed@gmail.com",
                        password: "123123",
                        courses: [],
                        progress: [],
                    },
                    {
                        id: 4,
                        fname: "Kamel",
                        lname: "Maher",
                        email: "kamel@gmail.com",
                        password: "123123",
                        courses: [{ courseName: "كورس اللغة الانجليزية", courseId: 0, levels: 4, videoCount: 10 }],
                        progress: [],
                    },
                    {
                        id: 5,
                        fname: "Ahmed",
                        lname: "Ahmed",
                        email: "ahmed@gmail.com",
                        password: "123123",
                        courses: [],
                        progress: [],
                    },
                ]
            }
            content = data.map(e => <Data key={e.id} id={e.id} img={person} name={`${e.fname} ${e.lname}`} link={"user"} email={e.email} />)
            break;
        case "teacher":
            if (searchValue != "")
                data = [
                    {
                        id: 0,
                        name: "Sami",
                        email: "sami@gmail.com",
                        courses: [{ courseName: "كورس اللغة الانجليزية", courseId: 0, levels: 4, videoCount: 10 }],
                    },
                    {
                        id: 1,
                        name: "Khaled",
                        email: "khaled@gmail.com",
                        courses: []
                    },
                ].filter(e => e.name.toLowerCase().startsWith(searchValue.toLowerCase()))
            else data = [
                {
                    id: 0,
                    name: "Sami",
                    email: "sami@gmail.com",
                    courses: [{ courseName: "كورس اللغة الانجليزية", courseId: 0, levels: 4, videoCount: 10 }],
                },
                {
                    id: 1,
                    name: "Khaled",
                    email: "khaled@gmail.com",
                    courses: []
                },
            ]
            content = data.map(e => <Data key={e.id} id={e.id} img={person} name={e.name} link={"teacher"} email={e.email} />)
            break;
        case "course":
            if (searchValue != "")
                data = [
                    {
                        id: 0,
                        courseName: "كورس اللغة الانجليزية",
                        courseLevels: 4,
                        videoCount: 20
                    },
                    {
                        id: 1,
                        courseName: "كورس اللغة الألمانية",
                        courseLevels: 3,
                        videoCount: 30
                    },
                ].filter(e => e.courseName.toLowerCase().startsWith(searchValue.toLowerCase()))
            else data = [
                {
                    id: 0,
                    courseName: "كورس اللغة الانجليزية",
                    courseLevels: 4,
                    videoCount: 20
                },
                {
                    id: 1,
                    courseName: "كورس اللغة الألمانية",
                    courseLevels: 3,
                    videoCount: 30
                },
            ]
            content = data.map(e => <Data key={e.id} id={e.id} img={person} name={e.courseName} levels={e.courseLevels} link={"course"} videoCount={e.videoCount} />)
            break;
    }
    const add = (myType: string) => {
        switch (myType) {
            case "teacher":
                navigate(`/control/addteacher`)
                break;
            case "course":
                navigate(`/control/addcourse`)
                break;
        }
    }
    return (
        <Box>
            <Box>
                <input type="text" placeholder="بحث" onChange={(e) => { setSearchValue(e.target.value) }} />
            </Box>
            <Box
                mt={"20px"}
                display={"flex"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
            >
                {
                    content
                }
            </Box>
            <Box
                width={"fit-content"}
                margin={"auto"}
            >
                {
                    type != "user" &&
                    <Button variant="contained" onClick={() => add(type!)}>اضافة {type == "teacher" ? "معلم" : "دورة"}</Button>
                }
            </Box>
        </Box>
    )
}

export default DataPreview
