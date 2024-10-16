import Logo from "../../assets/svg/logo.svg"
import FeaturesArrow from "../../assets/svg/icon-arrow-down.svg"
import CompanyArrow from "../../assets/svg/icon-arrow-down.svg"
import IconMenu from "../../assets/svg/icon-menu.svg"
import "./Header.css"
const Header = () => {
    return (
        <div className="header">
            <main className="logoNav">
                <div>
                    <img className="img" src={Logo} alt=""/>
                </div>
                <div className="navigation">
                    <div className="nav-main">
                        <div className="features-main">
                            <div className="nav" id="nav-features">
                                <nav>Features</nav>
                                <img className="nav-link" src={FeaturesArrow}/>
                            </div>
                            <div id="features-content"></div>
                        </div>

                        <div className="company-main">
                            <div className="nav" id="nav-company">
                                <nav>Company</nav>
                                <img className="nav-link" src={CompanyArrow}/>
                            </div>
                            <div id="company-content"></div>
                        </div>
                    </div>

                    <nav className="nav">Careers</nav>
                    <nav className="nav">About</nav>
                </div>
            </main>
            <main className="loginBtn">
                <button id="login">Login</button>
                <button id="register">Register</button>
            </main>
            <main className="iconMenu">
                <div id="iconImage">
                    <img src={IconMenu} alt=""/>
                </div>
                <div id="menu-content"></div>
            </main>
        </div>
    )
}

export default Header