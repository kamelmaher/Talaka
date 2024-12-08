import { Button } from "@mui/material"
import { ReactNode } from "react"
import paymentMethods from "/payment-methods.avif"
type SubsicriptionProps = {
    type: string,
    children?: ReactNode
}
const Subsicription = ({ type, children }: SubsicriptionProps) => {
    return (
        <div className="subscribe">
            <div className="subscribe-heading">
                <p className="course-heading" style={{ marginBottom: "8px" }}>
                    اشتراك {type}
                </p>
                <p className="course-price" style={{ marginBottom: "15px" }}>
                    <span>
                        {
                            type == "شهري" ? "750 " : "4950"
                        } جنيه</span>
                    <span style={{ margin: "11px" }}>/</span>
                    <span>
                        {
                            type == "شهري" ? "15" : "99"
                        }
                        $</span>
                </p>
                <span>يمكنك الدفع بعملة بلدك بأي طريقة دفع تريحك، لا يجدد تلقائيا حتى تجدد أنت</span>
            </div>
            <div className="subscribe-body">
                <p> شامل المستوى صفر، والأول، والثاني، والثالث ✅</p>
                <p>شامل جميع المستويات القادمة حتى آخر مستوى ✅</p>
                <p>مشاهدة الفيديوهات عدد لا محدود من المرات دون إنتهاء ✅</p>
                <p>ضمان إسترداد النقود كاملة إذا لم تعجبك الدورة ✅</p>
            </div>
            {
                children && children
            }
            <div>
                <Button variant="contained" style={{ background: "var(--secondary)", marginBottom: "10px" }}>
                    اشترك الان
                </Button>
            </div>
            <div><img src={paymentMethods} alt="Payment-Methods" /></div>
        </div>
    )
}

export default Subsicription
