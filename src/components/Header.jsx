import categoryIcon from "../assets/images/Ум меню.svg";
import categoryIcon2 from "../assets/images/Групаа меню.svg";
import { Link } from "react-router-dom"

function Header() {
    return (
        <header class="header">
            <div class="container">
                <Link to="/categories" class="button_all_janrs">
                    <img src={categoryIcon} alt="Menu Button" />
                    <Link to="/categories" class="button_for_janrs_text">ЖАНРЫ</Link>
                </Link>
            </div>
            <div class="container">
                <Link to="/" class="button_all_grupps">
                    <Link to="/" class="button_for_all_grupps_text">ВСЕ ГРУППЫ</Link>
                    <img src={categoryIcon2} alt="Menu Button" />
                </Link>
            </div>
        </header>
    );
}

export default Header