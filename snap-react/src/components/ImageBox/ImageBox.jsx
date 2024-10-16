import heroDesktop from "../../assets/png/image-hero-desktop.png"
import heroMobile from "../../assets/png/image-hero-mobile.png"
import "./ImageBox.css"
const ImageBox = () => {
    return (
        <main className="imgBox">
            <img className="imgD" src= {heroDesktop} alt=""/>
            <img className="imgM" src= {heroMobile} alt=""/>
        </main>
    )
}

export default ImageBox
