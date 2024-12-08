import Hero from "../../components/HomePage/Hero/Hero"
import Opinions from "../../components/HomePage/Opinions/Opinions"
import Teams from "../../components/HomePage/Team/Teams"
import img from "/تنزيل.webp"
function App() {
  const opinions = [img, img, img]
  return (
    <div>
      <Hero />
      <Opinions imgs={opinions} />
      <Teams />
    </div>
  )
}

export default App
