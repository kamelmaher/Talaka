import { Box } from "@mui/material"
type UserDetailsProps = {
    name: string,
    value: string
}
const UserDetails = ({ name, value }: UserDetailsProps) => {
    return (
        <Box
            padding={"10px 0"}
            borderBottom={"1px solid #8080802e"}
            textAlign={"start"}
        >
            <span
                style={{
                    width: "100px",
                    display: "inline-block",
                    fontSize: "18px"
                }}
            >{name}</span>
            <span
                style={{
                    fontSize: "15px"
                }}
            >{value}</span>
        </Box>
    )
}

export default UserDetails
