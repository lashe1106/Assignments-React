import databiz from "../../assets/svg/client-databiz.svg"
import audiophile from "../../assets/svg/client-audiophile.svg"
import meet from "../../assets/svg/client-meet.svg"
import maker from "../../assets/svg/client-maker.svg"
import "./TextBox.css"
const TextBox = () => {
    return (
        <div>
            <main className="textBox">
                <h1>Make <br/>remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button id="btn">Learn more</button>
            </main>
            <main className="client">
                    <img src= {databiz} alt=""/>
                    <img id="client-icon" src= {audiophile} alt=""/>
                    <img id="client-meet" src= {meet} alt=""/>
                    <img id="client-icon" src= {maker} alt=""/>
            </main>          
        </div>
    )
}

export default TextBox
