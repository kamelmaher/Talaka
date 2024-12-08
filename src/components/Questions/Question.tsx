import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
type QuestionProps = {
    qusetion: string
    answer: string
}
const Question = ({ qusetion, answer }: QuestionProps) => {
    return (
        <Accordion className='question'>
            <AccordionSummary>
                {qusetion}
            </AccordionSummary>
            <AccordionDetails>
                {answer}
            </AccordionDetails>
        </Accordion>
    )
}

export default Question
