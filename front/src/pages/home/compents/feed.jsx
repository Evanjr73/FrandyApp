

import foto from "../../../assets/img/foto.png"
import "./feed.css"

function Feed(){
    return(
        <div className="home">
            <img src={foto} alt="" />
            <div className="biofeed">
                <h1>Evan junior</h1>
                <p>de salvador bahia</p>
            </div>
        </div>
    )
}



export default Feed