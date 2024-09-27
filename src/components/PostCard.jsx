import { Link } from "react-router-dom"

function PostCard({post}) {
    return(
        <Link to={`/post/${post.id}`} class="news-card">
                <div class="container">
                    <h2 class="news-card__title">{post.title}</h2>
                </div>
        </Link>
    );
}

export default PostCard;
