import AppMain from "./main-components/AppMain"
import Sliders from "./main-components/Carousel"
import Footer from "./main-components/Footer"
import HomeCards from "./main-components/HomeCards"
import HomeProducts from "./main-components/HomeProducts"
import {Banner} from "./main-components/Navbar"
import NewHardware from "./main-components/NewHardware"
import TodaysBestDeals from "./main-components/TodaysBestDeals"


export default function Home() {
  return (
    <main >
      <Banner/>
      <Sliders/>
      <HomeCards/>
      <HomeProducts />
      <TodaysBestDeals/>
      <img src="/Bobcat.png" width="1080px" alt="bobcat"  className="bobcat"/>
      <NewHardware/>
      <Footer/>
    </main>
  )
}
