import PostCard from "./PostCard";
import {useState, useEffect} from "react";
import axios from "axios";

function PostList() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get("https://cec73be6b7bb8b92.mokky.dev/post");
                setPosts(response.data); // json
            } catch(error) {
                console.log(error);
            }
        }
        fetchPosts();
    }, []);

    return (
        <div class="all-news-block">
           <div class="container">
           {posts.map((post) => (
                <PostCard key={post.id} post={post}/>
            ))}
           </div>
        </div>
    );
}

export default PostList;