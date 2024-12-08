import { Card, CardContent, CardMedia } from "@mui/material"
type TeamProps = {
    img: string,
    role: string,
    name: string
}
const Team = ({ img, role, name }: TeamProps) => {
    return (
        <Card className="card">
            <CardMedia
                style={{
                    width: "300px"
                }}
            >
                <img src={img} alt="team-member" style={{
                    width: "100%"
                }}/>
            </CardMedia>
            <CardContent>
                <span>{role}</span>
                <h4 className="team-name">{name}</h4>
            </CardContent>
        </Card>
    )
}

export default Team
