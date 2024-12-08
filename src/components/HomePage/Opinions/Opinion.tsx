import { Box } from "@mui/material"

type OpinionProps = {
    img: string
}
const Opinion = ({ img }: OpinionProps) => {
    return (
        <Box
            width={{
                xs: "100%",
                sm: "calc(100% /2 - 20px)",
                md: "calc(100% / 3 - 20px)",
            }}
            marginBottom={"20px"}
        >
            <img src={img} alt="Opinion" style={{
                width: "100%"
            }} />
        </Box>
    )
}

export default Opinion
