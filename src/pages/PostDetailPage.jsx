import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function PostDetailPage() {

    const {id} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(`https://cec73be6b7bb8b92.mokky.dev/post/${id}`);
                setPost(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPost();
    }, [id]);


    return (
        <section className="mobile-block fon-for-gruppa-concret">
            <div className="mobile-block-header is-black_for_text_and_category">
                <Link to="/" className="mobile-block-header-main-bar is-gradient_for_back_in_grupp">
                    Назад
                </Link>
                <div className="janr-detail-block">
                    <h3 className="hollywood_title">{post.title}</h3>
                    <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="for-detail-janr" 
                    />
                    <p className="hollywood_title-for-under-text">{post.opisanie}</p>
                    <p className="po-centry-text-in-postdetail">Популярные песни этой группы:</p>
                    <ul>
                            <li className="hollywood_title">
                                <h3 className="hollywood_title">{post.pesni}</h3>
                                <a href={post.ssilka} target="_blank" rel="noopener noreferrer">Ссылка на клип</a>
                            </li>

                            <li className="hollywood_title">
                                <h3 className="hollywood_title">{post.pesni2}</h3>
                                <a href={post.ssilka2} target="_blank" rel="noopener noreferrer">Ссылка на клип</a>
                            </li>

                            <li className="hollywood_title">
                                <h3 className="hollywood_title">{post.pesni3}</h3>
                                <a href={post.ssilka3} target="_blank" rel="noopener noreferrer">Ссылка на клип</a>
                            </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default PostDetailPage;
