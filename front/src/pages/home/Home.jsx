
import Feed from "./compents/feed"
import "./Home.module.css"

import Card from "./compents/Card"
import Footer from "../../compo/Footer"

function Home() {
    return (
        <div className="home">


            <div className="componet">
                <Card></Card>
            </div>
            <Footer></Footer>

        </div>
    )
}

export default Home