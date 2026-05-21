import "./Header.css";
import headerTitleImg from "../../assets/notes-header.png"

function Header() {
    return (
        <header className="header__container">
            <h1 className="header__title sr-only">Notes App</h1>
            <p className="header__subtitle sr-only">Created By: Pyrad-Time</p>

            <img 
                src={headerTitleImg}
                alt="" 
                aria-hidden="true"
                className="header__img"
            />
        </header>
    )
}

export default Header