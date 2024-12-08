import { Card as CardComponent, CardContent, CardMedia } from '@mui/material'
type CardProps = {
    img: string,
    text: string
}
const Card = ({ img, text }: CardProps) => {
    return (
        <CardComponent
            className='card'
            sx={{
                width: {
                    sm: "calc(100% / 2 - 20px)",
                    md: "calc(100% / 3 - 20px)"
                },
                marginBottom: "20px",
            }}
        >
            <CardMedia
                style={{
                    height: "135px"
                }}
            >
                <img src={img} alt="advantage" style={{ borderRadius: "50%" }} />
            </CardMedia>
            <CardContent
                style={{
                    margin: "auto",
                    padding: "10px 15px",
                    width: "250px",
                    fontSize: "17px",
                    lineHeight: "1.4"
                }}
            >
                {text}
            </CardContent>
        </CardComponent >
    )
}

export default Card
