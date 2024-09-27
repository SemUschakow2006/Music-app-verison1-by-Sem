import "./assets/CSS/style.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import PostsByCategoryPage from "./pages/PostByCategoryPage";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/posts" element={<PostsByCategoryPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
