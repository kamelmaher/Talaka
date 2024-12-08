import { NavLink } from "react-router-dom"

type SocialItemsProps = {
    img: string
}
const SocialItem = ({ img }: SocialItemsProps) => {
    return (
        <NavLink to={"/"} >
            <img src={img} alt="Social-Icon" style={{width: "35px"}} />
        </NavLink>
    )
}

export default SocialItem
