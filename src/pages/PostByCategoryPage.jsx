import PostList from "../components/PostList";

function PostsByCategoryPage () {
    return (
        <section class="mobile-block fon-for-page">
        <div class="mobile-block-header is-black_for_text_and_category">
            <div class="mobile-block-header-main-bar is-gradient_for_janr">
            Рок
            </div>
        </div>
            <PostList />
    </section>
    );
}

export default PostsByCategoryPage;