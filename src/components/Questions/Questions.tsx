import { Box } from "@mui/material"
import "./questions.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import Question from "./Question"
import { useEffect, useState } from "react"
const Questions = () => {
    type Qusetion = {
        question: string,
        answer: string
    }
    const qustions = [
        {
            question: "Question 1",
            answer: "Answer 1"
        },
        {
            question: "Question 2",
            answer: "Answer 2"
        },
        {
            question: "Question 3",
            answer: "Answer 3"
        },
        {
            question: "Question 4",
            answer: "Answer 4"
        },
    ]

    const [isSearch, setIsSearch] = useState(false)
    const [selectedQuestions, setSelectedQuestions] = useState<Qusetion[]>([])
    const search = (text: string) => {
        const newQuestions = qustions.filter(e => e.question.startsWith(text))
        setSelectedQuestions(newQuestions)
    }

    useEffect(() => {
        setSelectedQuestions(qustions)
    }, [])

    return (
        <Box className="questions-container">
            <Box
                width={{
                    xs: "100%",
                    md: "60%"
                }}
                margin={"auto"}
            >
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    position={"relative"}
                >
                    <h3>
                        لو عندك سؤال بخصوص الكورس ستجده هنا
                    </h3>
                    <Box
                        marginRight={"auto"}
                        color={"var(--background)"}
                        className="pointer"
                        fontSize={"20px"}
                        onClick={
                            () => {
                                setIsSearch(true)
                            }
                        }
                    >
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </Box>
                    {
                        isSearch &&
                        <Box className="search-question">
                            <input type="text" placeholder="Search a Question" onChange={e => search(e.target.value)} />
                        </Box>
                    }
                </Box>
                <Box
                    marginTop={"30px"}
                >
                    {
                        selectedQuestions.length > 0 ?
                            selectedQuestions.map((e, i) => <Question key={i} qusetion={e.question} answer={e.answer} />)
                            :
                            <p
                                style={{ textAlign: "center" }}
                            >No Questions Available</p>
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default Questions
