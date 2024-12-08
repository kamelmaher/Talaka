import { Box, Button } from "@mui/material"
import person from "/picture.jpg"
type VideoCommentProps = {
    username: string,
    text?: string
    add?: boolean
}
const VideoComment = ({ username, text, add }: VideoCommentProps) => {
    return (
        <Box
            display={"flex"}
            alignItems={"center"}
            bgcolor={"var(--primary)"}
            padding={"10px"}
            gap={"10px"}
            marginBottom={"7px"}
            className="pointer"
        >
            <Box
                width={"40px"}
                height={"40px"}
                borderRadius={"50%"}
                overflow={"hidden"}
            >
                <img src={person} alt="user-img" className="img-fix" />
            </Box>
            <Box>
                <h5 style={{ marginBottom: "6px", fontSize: "18px", fontWeight: "500" }}>{username}</h5>
                {
                    add ?
                        <>
                            <input type="text" placeholder="أضف تعليقك" />
                            <Button variant="contained" style={{ marginTop: "10px", display: "block" }}>تعليق</Button>
                        </>
                        : <span>{text}</span>
                }
            </Box>
        </Box>
    )
}

export default VideoComment
