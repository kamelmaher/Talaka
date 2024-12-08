import { Box } from "@mui/material"
import VideoComment from "./VideoComment"

const VideoComments = () => {
    return (
        <Box
            className="video-comments"
            width={{
                xs: "100%",
                sm: "calc(100% /2 - 10px)",
                md: "300px"
            }}
            order={2}
            height={"600px"}

        >
            <h4 style={{ textAlign: "center", background: "var(--primary)", marginBottom: "10px", padding: "10px" }}>التعليقات</h4>
            <Box
                maxHeight={"70%"}
                overflow={"auto"}
            >
                <VideoComment username={"كامل ماهر"} text={"فيديو رائع و مميز"}></VideoComment>
                <VideoComment username={"كامل ماهر"} text={"فيديو رائع و مميز"}></VideoComment>
                <VideoComment username={"كامل ماهر"} text={"فيديو رائع و مميز"}></VideoComment>
                <VideoComment username={"كامل ماهر"} text={"فيديو رائع و مميز"}></VideoComment>
                <VideoComment username={"كامل ماهر"} text={"فيديو رائع و مميز"}></VideoComment>
                <VideoComment username={"كامل ماهر"} text={"فيديو رائع و مميز"}></VideoComment>
                <VideoComment username={"كامل ماهر"} text={"فيديو رائع و مميز"}></VideoComment>
                <VideoComment username={"كامل ماهر"} text={"فيديو رائع و مميز"}></VideoComment>
                <VideoComment username={"كامل ماهر"} text={"فيديو رائع و مميز"}></VideoComment>
                <VideoComment username={"كامل ماهر"} text={"فيديو رائع و مميز"}></VideoComment>
                <VideoComment username={"كامل ماهر"} text={"فيديو رائع و مميز"}></VideoComment>
            </Box>
            <Box
                bgcolor={"var(--primary)"}
                mt={"6px"}
            >
                <VideoComment username="كامل ماهر" add={true} />
            </Box>
        </Box>
    )
}

export default VideoComments
