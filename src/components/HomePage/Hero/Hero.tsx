import { Box } from "@mui/material"
import "./hero.css"
import img1 from "/Hero/img1.webp"
import img2 from "/Hero/img2.webp"
import img3 from "/Hero/img3.webp"
import img4 from "/Hero/img4.webp"
import img5 from "/Hero/img5.webp"
import img6 from "/Hero/img6.webp"
import Card from "./Card"
import More from "./More"
const Hero = () => {
    const cardsImages = [img1, img2, img3, img4, img5, img6]

    const cardsTitles = [
        "الدراسة في هذا الكورس لا يوجد لها أكثر من إحتمال واحد إما أن تتكلم بطلاقة  أو تتكلم بطلاقة لا يوجد أي  إحتمالات أخرى 🤩🔥 ",
        "لن تحتاج للمذاكرة أو حفظ الكلمات ولا تعلم القواعد، لأنك ستكتب اللغة كأهله، فقط ستشاهد الدروس وستدخل اللغة لعقلك تلقائياً مثل السحر",
        "لن تحتاج لمراجعة  الدروس لأني قمت بكل  هذا بدلاً عنك ستجد الدروس معدة بطريقة معينه بها مراجعة وبها كل شيء",
        "الدروس صغيرة جداً مدتها دقيقه لدقيقتين ولا تتعدى الثلاث دقائق فيمكنك مشاهدتها في أي  وقت وفي أي مكان ولن تحتاج إلى ورقه وقلم ",
        "الدروس ستبدأ معك من تحت الصفر حتى لو لا تعرف أي شيء عن اللغة لأن هذا المستوى معد خصيصاً للمستوى صفر ثم يتدرج معك في المستوى بشكل تدريجي جداً",
        "الدروس ممتعة جداً وسهلة وبسيطة ولن تحتاج لمعلم معك، لأن الدروس معدة خصيصاً لتكون دراسة ذاتيه لا تحتاج معها لمعلم."
    ]

    return (
        <div className="hero">
            <h1 style={{ textAlign: "center" }}>أول كورس في الوطن العربي بطريقة الإكتساب الطبيعي للغات</h1>
            <Box
                display={"flex"}
                justifyContent={{
                    xs: "center",
                    md: "space-between"
                }}
                className="cards"
                flexWrap={"wrap"}
            >
                {
                    cardsImages.map((img, i) => <Card key={img} img={img} text={cardsTitles[i]} />)
                }
            </Box>
            <Box
                display={"flex"}
                justifyContent={{
                    xs: "center",
                    md: "space-around"
                }}
                textAlign={"center"}
                flexWrap={"wrap"}
                marginTop={"30px"}
            >
                <More text="كورس اللغة الانجليزية" />
                <More text="كورس اللغة الألمانية" />
                <More text="اراء الطلاب" />
            </Box>
        </div>
    )
}

export default Hero
