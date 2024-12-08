import { Box } from "@mui/material"
import Opinion from "./Opinion"
import "./opinions.css"
type OpinionsProps = {
    imgs: string[]
}
const Opinions = ({ imgs }: OpinionsProps) => {
    return (
        <Box
            className="opinions"
            display={"flex"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
        >
            {
                imgs.map((e, i) => <Opinion key={i} img={e} />)
            }
        </Box>
    )
}

export default Opinions
