import backIcon23 from "../assets/images/icons8-музыкальный-48.svg";
import { Link } from "react-router-dom";

function CategoriesPage() {
    return (
        <section class="mobile-block for-all-janrs-fon">
        <div class="mobile-block-header is-black_for_text_and_category">
            <div class="mobile-block-header-main-bar is-gradient-background_for_header">
            Все жанры
            </div>
                <div class="janr-row">
                    <Link to="/category/posts" class="janr-item">
                        <img src={backIcon23} alt="icon-janrs-rock" class="janr-item__img" />
                        <span class="janr-item__title">Рок</span>
                    </Link>
                    <Link to="/category/posts" class="janr-item">
                        <img src={backIcon23} alt="icon-janrs-rep" class="janr-item__img" />
                        <span class="janr-item__title">Рэп</span>
                    </Link>
                </div>
                <div class="janr-row">
                    <Link to="/category/posts" class="janr-item">
                        <img src={backIcon23} alt="icon-janrs-pop-rock" class="janr-item__img" />
                        <span class="janr-item__title">Поп-рок</span>
                    </Link>
                    <Link to="/category/posts" class="janr-item">
                        <img src={backIcon23} alt="icon-janrs-metal" class="janr-item__img" />
                        <span class="janr-item__title">Метал</span>
                    </Link>
                </div>
                <div class="janr-row">
                    <Link to="/category/posts" class="janr-item">
                        <img src={backIcon23} alt="icon-janrs-rock" class="janr-item__img" />
                        <span class="janr-item__title">Музыка 80-90-ых</span>
                    </Link>
                    <Link to="/category/posts" class="janr-item">
                        <img src={backIcon23} alt="icon-janrs-rep" class="janr-item__img" />
                        <span class="janr-item__title">Lo-Fi</span>
                    </Link>
                </div>
            </div>
    </section>
    );
}

export default CategoriesPage;