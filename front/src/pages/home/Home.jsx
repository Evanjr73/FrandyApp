
import Feed from "./compents/feed"
import style from "./Home.module.css"


import Card from "./compents/Card"
import Footer from "../../compo/Footer"

function Home() {
    return (
        <div className={style.home}>


            <div className={style.componet}>
                <Card></Card>
            </div>
            <Footer></Footer>

        </div>
    )
}

export default Home